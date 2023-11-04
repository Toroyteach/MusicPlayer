import React, { useReducer, useState, useEffect, useContext } from 'react'

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
    SET_FAVOURITE_MIX_ITEM
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

    const [audioContext, setAudioContext] = useState(new window.AudioContext || window.webkitAudioContext);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [totalChunks, setTotalChunks] = useState(17);
    const [endPlayback, setEndPlayback] = useState(false);

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const fetchChunkedFiles = async () => {
        const title = "quepasa"//state.musicSettings.activePlaylist[state.musicSettings.currentSong].title
        const header = {
            headers: { Authorization: `Bearer ${accessToken}` }
        }
        const res = await fetch(`${clippedFileUrl}?title=${title}&clippedId=${currentIndex}.opus`, header);
        const arrayBuffer = await res.arrayBuffer()
        const decodedAudio = await audioContext.decodeAudioData(arrayBuffer)
        return decodedAudio;
    };

    const { isLoading, isError, error, data: audioData, refetch, remove, status } = useQuery('fetchAudio', fetchChunkedFiles, {
        refetchOnWindowFocus: false,
        enabled: false,
    },);

    const playNextItem = () => {
        if (!audioContext || queue.isEmpty()) {
            return;
        }

        const dataArr = queue.peek();
        const playSound = audioContext.createBufferSource();
        playSound.buffer = dataArr;
        playSound.connect(audioContext.destination);
        playSound.onended = () => {

            queue.dequeue();

            if (!queue.isEmpty()) {
                playNextItem();
            } else {
                audioContext.close()
            }
        };

        playSound.start(audioContext.currentTime);


        if (currentIndex <= totalChunks) {

            setCurrentIndex(currentIndex => currentIndex + 1);

            setTimeout(() => {
                remove('fetchAudio')
                refetch();
            }, 4000);

        }

    };

    const togglePlaying = () => {

        state.musicSettings.playing ? audioContext.resume() : audioContext.suspend()

    }

    //handles and enables moving the seek to move the audio to desired timeline
    const handleProgress = (e) => {

        // let compute = (e.target.value * duration) / 100
        // setCurrentTime(compute)
        // audio.currentTime = compute

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

    const SetCurrent = (id) => {

        //set the dispatch playing to false
        // dispatch({ type: SET_TOGGLE_PLAYING, data: false, })

        //add the correct method to fetch the correct file path
        // audio.src = state.musicSettings.activePlaylist[id].fileUrl;

        //set the secleted song in dispatch
        dispatch({ type: SET_CURRENT_SONG, data: id })

        //change the document title dynamically to the mix name
        const name = state.musicSettings.activePlaylist[id].title + ' - Toroyteach Music Application'

        document.title = name;

        playNextItem()
    }

    useEffect(() => {

        if (audioData) {
            queue.enqueue(audioData)
        }

    }, [audioData])

    useEffect(() => {
        refetch();
    }, [])

    useEffect(() => {

        if (currentIndex === totalChunks) {
            setTimeout(() => {
                audioContext.suspend()
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
                playNextItem: playNextItem,
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