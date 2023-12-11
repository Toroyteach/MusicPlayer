import React, { useReducer, useState, useEffect, useContext } from 'react'

import { Howl, Howler } from 'howler';

import musicContext from './musicContext'

import appContext from '../context/appContext';

import Cookies from 'universal-cookie';

import { useQuery } from 'react-query';

import Queue from './Queue'

import defaultMusicState from './musicState/defaultMusicState';

import musicReducer from './musicState/musicReducer';

import clippedFileUrl from '../api/base/clippedFileUrl';

import {
    SET_CURRENT_SONG,
    SET_FAVOURITE_MIX_ITEM,
    SET_TOGGLE_PLAYING,
    SET_MIX_ITEM_DURATION,
    SET_ABLE_TO_PLAY_OR_LOADING,
    SET_MUSIC_PLAYING_STATUS
} from '../../services/music/musicState/musicStateTypes';

const MusicContextState = (props) => {

    const {
        userData: {
            favourite: {
                favouriteItems,
            }
        }
    } = useContext(appContext)

    // initialize the reducer with the default state of the application
    const [state, dispatch] = useReducer(musicReducer, defaultMusicState)

    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')
    const [queue, setQueue] = useState(new Queue());

    const [audioBuffer, setAudioBuffer] = useState(null);
    // const [sourceNode, setSourceNode] = useState(null);


    const [audioContext, setAudioContext] = useState();
    const [currentIndex, setCurrentIndex] = useState(1);
    const [totalChunks, setTotalChunks] = useState(17);
    const [endPlayback, setEndPlayback] = useState(false);
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [audio, setAudio] = useState(null);

    const fetchChunkedFiles = async () => {
        if (typeof state.musicSettings.currentSong !== 'number') {
            return;
        }

        const title = state.musicSettings.activePlaylist[state.musicSettings.currentSong]?.title;
        const header = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        const res = await fetch(`${clippedFileUrl}?title=${title}&clippedId=${currentIndex}.opus`, header);
        const arrayBuffer = await res.arrayBuffer();
        let arrayBufferView = new Uint8Array(arrayBuffer)
        return arrayBufferView;

    };

    const { isLoading, isError, error, data: audioData, refetch, remove, status } = useQuery('fetchAudio', fetchChunkedFiles, {
        refetchOnWindowFocus: false,
        enabled: false,
    },);


    const [startedAt, setStartedAt] = useState()
    const [pausedAt, setPausedAt] = useState(0)
    const [sourceNode, setSourceNode] = useState([]);
    const playNextItem = () => {

        if (queue.isEmpty()) {
            return;
        }

        Howler.volume(0.2);

        if (queue.isEmpty()) {
            return;
        }

        const dataArr = queue.peek();
        let blob = new Blob([dataArr], { type: 'music/opus' })
        let howlSource = URL.createObjectURL(blob)
        let audio = new Howl({
            src: [howlSource],
            html5: true,
            format: ['opus']
        });

        
        audio.on('end', () => {
            
            queue.dequeue();

            console.log(currentIndex)
            
            if (!queue.isEmpty()) {
                playNextItem();
            }
        })
        
        setAudio(audio)
        
        if (currentIndex <= totalChunks) {
            
            setCurrentIndex(currentIndex => currentIndex + 1);
            
            setTimeout(() => {
                remove('fetchAudio')
                refetch();
            }, 4000);
            
        }
        
        audio.play()
    };

    const togglePlaying = () => {

        if (audio == null) {
            return
        }
        
        state.musicSettings.playing ? audio.play() : audio.pause()

    }

    //handles and enables moving the seek to move the audio to desired timeline
    const handleProgress = (e) => {

        let compute = (e.target.value * duration) / 100
        setCurrentTime(compute)
        let chunks =  state.musicSettings.activePlaylist[state.musicSettings.currentSong]?.chunks
        let percent = e.target.value
        const seekChinkItem = Math.floor((percent / 100) * chunks)

        //TODO ON MOUSE RELEASE
        dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: true })
        setCurrentIndex(seekChinkItem)

        setTimeout(() => {
            refetch()
        }, 300)

        setTimeout(() => {
            dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: false })
            playNextItem()
        }, 2300)

    }

    //handle go back 30sec
    const handleback30 = () => {

        // let time = audio.currentTime - 30
        // setCurrentTime(time)
        // audio.currentTime = time

    }

    //handle forward 1 minute
    const handleForward1Minute = () => {

        // let time = audio.currentTime + 60
        // setCurrentTime(time)
        // audio.currentTime = time

    }

    const convertTimeToSeconds = (time) => {
        const timeArray = time.split(':').map(Number);

        if (timeArray.length === 3) {
            const [hours, minutes, seconds] = timeArray;
            return hours * 3600 + minutes * 60 + seconds;
        }

        else if (timeArray.length === 2) {
            const [minutes, seconds] = timeArray;
            return minutes * 60 + seconds;
        }

        else if (timeArray.length === 1) {
            return timeArray[0];
        }

        return null;
    }

    const SetCurrent = (id) => {

        dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: true })

        dispatch({ type: SET_MUSIC_PLAYING_STATUS, data: false })
        dispatch({ type: SET_TOGGLE_PLAYING, data: false })


        //set the secleted song in dispatch
        dispatch({ type: SET_CURRENT_SONG, data: id })

        //sets the chunks count to 1
        setCurrentIndex(1)

        queue.clear()

        setTimeout(() => {
            refetch()
        }, 300)

        //change the document title dynamically to the mix name
        const name = state.musicSettings.activePlaylist[id].title + ' - Toroyteach Music Application'
        const duration = convertTimeToSeconds(state.musicSettings.activePlaylist[id].duration)

        dispatch({ type: SET_MIX_ITEM_DURATION, data: duration })

        document.title = name;

        setTimeout(() => {
            dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: false })
        }, 2000)
    }

    useEffect(() => {

        if (audioData) {
            queue.enqueue(audioData)
        }

    }, [audioData])

    useEffect(() => {

        if (currentIndex === totalChunks) {
            setTimeout(() => {
                audio.stop()

                document.title = "Toroyteach Mix Application";
            }, 8000);
        }

    }, [currentIndex])

    useEffect(() => {

        togglePlaying()

    }, [state.musicSettings.playing])

    useEffect(() => {

        if (!state.musicSettings.activePlaylist || state.musicSettings.activePlaylist.length === 0) {
            return;
        }

        const result = favouriteItems.find((match) => match.mixId === state.musicSettings.activePlaylist[state.musicSettings.currentSong].mixId)
        // dispatch set favourite icon to true
        dispatch({ type: SET_FAVOURITE_MIX_ITEM, data: result ? true : false })

    }, [state.musicSettings.currentSong])

    return (
        <musicContext.Provider
            value={{
                currentSong: state.musicSettings.currentSong,
                activePlaylist: state.musicSettings.activePlaylist,
                repeat: state.musicSettings.repeat,
                random: state.musicSettings.random,
                playing: state.musicSettings.playing,
                volume: state.musicSettings.volume,
                duration: state.musicSettings.duration,
                currentTime: currentTime,
                handleForward1Minute,
                handleback30,
                handleProgress,
                SetCurrent,
                playNextItem,
                musicStateDispatch: dispatch,
                ...state,
            }}
        >
            {props.children}
        </musicContext.Provider>
    )

}

export default MusicContextState
