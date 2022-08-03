import React, { useReducer, useState, useEffect, createContext } from 'react'

import appReducer from './appState/appReducer.js';
import appContext from './appContext.js';

//librarty from axios to fetch the data
import axios from 'axios';

import {
  SET_CURRENT_SONG,
  SET_TOGGLE_PLAYING,
  SET_ACTIVE_PLAYLIST_ARRAY,
  SET_RECENT_SEEK_TIME,
  SET_MIX_ITEM_DURATION,
  SET_MUSIC_APP_DARKMODE,
  SET_FAVOURITE_MIX_ITEM,
  SET_ASTRONOMY_PICTURE,
} from './appState/stateTypes.js';

import defaultState from './appState/defaultState.js';


const ThemeUpdateContext = createContext();

const ApplicationState = (props) => {

  // initialize the reducer with the default state of the application
  const [state, dispatch] = useReducer(appReducer, defaultState)

  // Set songs array
  //const playlistSet = (songArr) => dispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: songArr })

  // Set playing state of the audio
  //Audio state of item playing
  const audioCtx = new (window.AudioContext || window.webkitAudioContext);
  const [audio] = useState(new Audio(state.musicSettings.activePlaylist[0].fileUrl));
  // const audioSource =  audioCtx.createMediaElementSource(audio);
  // const analyser = audioCtx.createAnalyser();
  //sshsh
  // let audioSource = useRef();
  // let analyser = useRef();
  // let bufferLength = useRef();
  // const [dataArray, setDataArray] = useState([]);

  //handles the playing and pausing of the audio object
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const togglePlaying = () => {

    //audio.oncanplay = () => {
    state.musicSettings.playing ? audio.play() : audio.pause()
    //}

  }

  // Set current song
  const SetCurrent = (id) => {

    // console.log(id);

    //add the correct method to fetch the correct file path
    audio.src = state.musicSettings.activePlaylist[id].fileUrl;

    //dispatch({ type: SET_CURRENT_SONG, data: id })

  }

  // Handle Next song
  const nextMix = () => {
    if (state.musicSettings.currentSong === state.musicSettings.activePlaylist.length - 1) {

      SetCurrent(0)

    } else if (state.musicSettings.random) {

      SetCurrent(Math.floor(Math.random() * state.musicSettings.activePlaylist.length));

    } else {

      SetCurrent(state.musicSettings.currentSong + 1)
    }
  }

  // End of Song
  const handleEndOfMix = () => {
    // Check for random and repeat options
    if (state.random) {

      return dispatch({ type: SET_CURRENT_SONG, data: ~~(Math.floor(Math.random() * state.activePlaylist.length)), })

    } else {

      if (state.repeat) {

        nextMix()

      } else if (state.currentSong === state.activePlaylist.length - 1) {


        dispatch({ type: SET_TOGGLE_PLAYING, data: false, })

        return

      } else {

        nextMix()

      }

    }
  }

  //handles and enables moving the seek to move the audio to desired timeline
  const handleProgress = (e) => {

    let compute = (e.target.value * duration) / 100
    setCurrentTime(compute)
    audio.currentTime = compute

  }

  //handle go back 30sec
  const handleback30 = () => {

    let time = audio.currentTime - 30
    setCurrentTime(time)
    audio.currentTime = time

  }

  //handle forward 1 minute
  const handleForward1Minute = () => {

    let time = audio.currentTime + 60
    setCurrentTime(time)
    audio.currentTime = time

  }
  //load the image only once from Nasa and use reducer to main state of it.
  const NASA_API_KEY = '';
  const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=aQK0MCbvf5b9EN5j1ZSr0mKnxKH3ZAB9VLvhbit0';
  //const EPOCH_POINT = 'https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=aQK0MCbvf5b9EN5j1ZSr0mKnxKH3ZAB9VLvhbit0';

  useEffect(() => {

    axios.get(END_POINT)
      .then(response => {
        dispatch({ type: SET_ASTRONOMY_PICTURE, data: response.data })
      })
      .catch(error => {
        console.log(error, 'failed to get astronomy pic data')
      });

  }, []);

  //effect to make theme state on load
  useEffect(() => {

    if (state.appSettings.appDarkMode) {

      document.body.classList.add('dark-version');

    } else {

      document.body.classList.remove('dark-version');

    }

  }, [state.appSettings.appDarkMode])

  // effect to handle changing of the play pause states of the application
  useEffect(() => {

    togglePlaying()

  }, [state.musicSettings.playing])

  //effect to handle changes to the current song
  useEffect(() => {

    //create a method to interact with audio object and hit next to play the next item
    SetCurrent(state.musicSettings.currentSong)

    //loop through the favourite list if match dispatch favourite icon else none
    const result = state.userData.favourite.favouriteItems.find((match) => match.id === state.musicSettings.activePlaylist[state.musicSettings.currentSong].id)

    //dispatch set favourite icon to true
    dispatch({ type: SET_FAVOURITE_MIX_ITEM, data: result ? true : false })


    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime)
      dispatch({ type: SET_RECENT_SEEK_TIME, data: audio.currentTime })
    }

    audio.oncanplay = () => {
      setDuration(audio.duration)
      dispatch({ type: SET_MIX_ITEM_DURATION, data: audio.duration })
    }

    audio.onended = () => {
      handleEndOfMix()
    }

  }, [state.musicSettings.currentSong])

  //effect to control the volume of the audio player
  useEffect(() => {

    audio.volume = state.musicSettings.volume

  }, [state.musicSettings.volume])

  //get and set the current language
  // useEffect(() => {

  //   console.log('languge has changed to ', state.appSettings.language)

  // }, [state.appSettings.language])

  // const [ testAudioCtx, setTestAudioCtx] = useState([]);
  // const [ testAudioSource, setTestAudioSource] = useState([]);
  // const [ testAnalyser, setTestAnalyser] = useState([]);
  // const [ testBufferLength, setTestBufferLength ] = useState([]);
  // const [ testDataArray, setTestDataArray ] = useState([]);

  // useEffect(() => {

  //   setTestAudioCtx(window.AudioContext || window.webkitAudioContext);
  //   setTestAudioSource(testAudioCtx.createMediaElementSource(audio));
  //   setTestAnalyser(testAudioCtx.createAnalyser());
  //   setTestBufferLength(testAnalyser.frequencyBinCount);
  //   setTestDataArray(new Uint8Array(testBufferLength))

  //   testAudioSource.connect(testAnalyser)
  //   testAnalyser.connect(testAudioCtx)

  // }, [])

  return (
    <appContext.Provider
      value={{
        currentSong: state.musicSettings.currentSong,
        activePlaylist: state.musicSettings.activePlaylist,
        repeat: state.musicSettings.repeat,
        random: state.musicSettings.random,
        playing: state.musicSettings.playing,
        astronomyPicture: state.appSettings.astronomyPicture,
        volume: state.musicSettings.volume,
        duration: state.musicSettings.duration,
        audioObject: audio,
        audioContext: audioCtx,
        // audioSource: audioSourceT,
        // analyser: testAnalyser,
        // dataArray: testDataArray,
        // bufferLength: testBufferLength,
        currentTime: currentTime,
        stateDispatch: dispatch,
        handleForward1Minute,
        handleback30,
        handleProgress,
        SetCurrent,
        ...state,
      }}
    >
      {props.children}
    </appContext.Provider>
  )

}

export default ApplicationState