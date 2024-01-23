import React, { useReducer, useState, useEffect, useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux';

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
import { increment_current_chunk_index, reset_chunk_index, set_able_to_play_or_loading, set_current_chunk_index, set_current_song, set_favourite_mix_item, set_mix_item_duration, set_music_playing_status, set_toggle_playing } from '../redux/music/reducer/musicReducer';

const MusicContextState = (props) => {

    // const {
    //     userData: {
    //         favourite: {
    //             favouriteItems,
    //         }
    //     }
    // } = useContext(appContext)

    const userData = useSelector((state) => state.user.data)
    const musicData = useSelector((state) => state.music.data)
    const dispatch = useDispatch()

    // initialize the reducer with the default state of the application
    // const [state, dispatch] = useReducer(musicReducer, defaultMusicState)

    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')
    const [queue, setQueue] = useState(new Queue());

    // const [audioBuffer, setAudioBuffer] = useState(null);
    // const [sourceNode, setSourceNode] = useState(null);


    // const [audioContext, setAudioContext] = useState();
    // const [currentIndex, setCurrentIndex] = useState(1);
    // const [totalChunks, setTotalChunks] = useState(17);
    // const [endPlayback, setEndPlayback] = useState(false);
    const [currentTime, setCurrentTime] = useState(0)
    // const [duration, setDuration] = useState(0)
    const [audio, setAudio] = useState(null);

    const fetchChunkedFiles = async () => {
        if (typeof musicData.currentSong !== 'number') {
            return;
        }

        if (musicData.currentChunkIndex == musicData.activePlaylist[musicData.currentSong]?.chunks && musicData.currentChunkIndex != undefined) {

            setTimeout(() => {
                audio.stop()
                document.title = "Toroyteach Mix Application";
            }, 9000);

            return;
        }

        const title = musicData.activePlaylist[musicData.currentSong]?.title;
        const header = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        const res = await fetch(`${clippedFileUrl}?title=${title}&clippedId=${musicData.currentChunkIndex}.opus`, header);
        const arrayBuffer = await res.arrayBuffer();
        let arrayBufferView = new Uint8Array(arrayBuffer)
        return arrayBufferView;

    };

    const { isLoading, isError, error, data: audioData, refetch, remove, status } = useQuery('fetchAudio', fetchChunkedFiles, {
        refetchOnWindowFocus: false,
        enabled: false,
    },);


    // const [startedAt, setStartedAt] = useState()
    // const [pausedAt, setPausedAt] = useState(0)
    // const [sourceNode, setSourceNode] = useState([]);
    const playNextItem = () => { 

        if (queue.isEmpty()) {
            return;
        }

        Howler.volume(0.2);

        const start = performance.now();

        const dataArr = queue.peek();
        let blob = new Blob([dataArr], { type: 'music/opus' })
        let howlSource = URL.createObjectURL(blob)
        let audio = new Howl({
            src: [howlSource],
            html5: true,
            format: ['opus']
        });

        const end = performance.now();

        console.log(`Execution time: ${end - start} ms`);

        setAudio(audio)

        audio.on('end', () => {

            queue.dequeue();

            if (!queue.isEmpty()) {
                playNextItem();
            } else {
                audio.stop()
            }
        })


        if (musicData.currentChunkIndex < musicData.activePlaylist[musicData.currentSong]?.chunks) {

            //dispatch currentChunkIndex
            dispatch(increment_current_chunk_index())

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

        musicData.playing ? audio.play() : audio.pause()

    }

    //handles and enables moving the seek to move the audio to desired timeline
    const handleProgress = (e) => {

        let compute = (e.target.value * musicData.duration) / 100
        setCurrentTime(compute)
        let chunks = musicData.activePlaylist[musicData.currentSong]?.chunks
        let percent = e.target.value
        const seekChinkItem = Math.floor((percent / 100) * chunks)

        //TODO ON MOUSE RELEASE
        dispatch(set_able_to_play_or_loading(true))
        // dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: true })
        dispatch(set_current_chunk_index(seekChinkItem))
        // setCurrentIndex(seekChinkItem)

        setTimeout(() => {
            refetch()
        }, 300)

        setTimeout(() => {
            dispatch(set_able_to_play_or_loading(false))
            // dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: false })
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

        dispatch(set_able_to_play_or_loading(true))
        // dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: true })

        dispatch(set_music_playing_status(false))
        dispatch(set_toggle_playing(false))
        // dispatch({ type: SET_MUSIC_PLAYING_STATUS, data: false })
        // dispatch({ type: SET_TOGGLE_PLAYING, data: false })


        //set the secleted song in dispatch
        dispatch(set_current_song(id))
        // dispatch({ type: SET_CURRENT_SONG, data: id })

        //sets the chunks count to 1
        dispatch(reset_chunk_index())
        // setCurrentIndex(1)

        queue.clear()

        setTimeout(() => {
            refetch()
        }, 300)

        //change the document title dynamically to the mix name
        const name = musicData.activePlaylist[id].title + ' - Toroyteach Music Application'
        const duration = convertTimeToSeconds(musicData.activePlaylist[id].duration)

        dispatch(set_mix_item_duration(duration))
        // dispatch({ type: SET_MIX_ITEM_DURATION, data: duration })

        document.title = name;

        setTimeout(() => {
            dispatch(set_able_to_play_or_loading(false))
            // dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: false })
        }, 2000)
    }

    useEffect(() => {

        if (audioData) {
            queue.enqueue(audioData)
        }

    }, [audioData])

    useEffect(() => {

        togglePlaying()

    }, [musicData.playing])

    useEffect(() => {

        if (!musicData.activePlaylist || musicData.activePlaylist.length === 0 || musicData.activePlaylist === undefined) {
            return;
        }

        const result = userData.favourite.favouriteItems.find((match) => match.mixId === musicData.activePlaylist[musicData.currentSong].mixId)
        // dispatch set favourite icon to true
        dispatch(set_favourite_mix_item(result ? true : false))
        // dispatch({ type: SET_FAVOURITE_MIX_ITEM, data: result ? true : false })

    }, [musicData.currentSong])

    return (
        <musicContext.Provider
            value={{
                currentTime: currentTime,
                handleForward1Minute,
                handleback30,
                handleProgress,
                SetCurrent,
                playNextItem,
                // musicStateDispatch: dispatch,
            }}
        >
            {props.children}
        </musicContext.Provider>
    )

}

export default MusicContextState
