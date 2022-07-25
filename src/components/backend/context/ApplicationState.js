import React, { useReducer, useState, useEffect, createContext } from 'react'

import appReducer from './appState/appReducer'
import appContext from './appContext'


//import cookiee
//import { useCookies } from 'react-cookie';

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
} from './appState/stateTypes';

import defaultState from './appState/defaultState'


const ThemeUpdateContext = createContext();

const ApplicationState = (props) => {

  // initialize the reducer with the default state of the application
  const [state, dispatch] = useReducer(appReducer, defaultState)

  // Set songs array
  const playlistSet = (songArr) => dispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: songArr })

  // Set playing state of the audio
  //Audio state of item playing
  const audioCtx = new (window.AudioContext || window.webkitAudioContext);
  const [audio] = useState(new Audio(state.activePlaylist[0].fileUrl));
  //sshsh
  // let audioSource = useRef();
  // let analyser = useRef();
  // let bufferLength = useRef();
  // const [dataArray, setDataArray] = useState([]);

  //handles the playing and pausing of the audio object
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const togglePlaying = () =>  {

    //audio.oncanplay = () => {
      state.playing ? audio.play() : audio.pause()
    //}

  }

  // Set current song
  const SetCurrent = (id) => {

    console.log(id);

    //add the correct method to fetch the correct file path
    audio.src = state.activePlaylist[id].fileUrl;

    //dispatch({ type: SET_CURRENT_SONG, data: id })

  }

  // Handle Next song
  const nextMix = () => {
    if (state.currentSong === state.activePlaylist.length - 1) {

      SetCurrent(0)

    } else if (state.random) {

      SetCurrent(Math.floor(Math.random() * state.activePlaylist.length));

    } else {

      SetCurrent(state.currentSong + 1)
    }
  }


  // Handle Random
  const setFavouriteMix = () => dispatch({ type: SET_FAVOURITE_MIX_ITEM, data: state.random ? false : true })

  // Handle Random
  const setMusicAppDarkTheme = () => dispatch({ type: SET_MUSIC_APP_DARKMODE, data: state.random ? false : true })

  // End of Song
  const handleEndOfMix = () => {
    // Check for random and repeat options
    if (state.random) {

      return dispatch({

        type: SET_CURRENT_SONG,
        data: ~~(Math.floor(Math.random() * state.activePlaylist.length)),

      })

    } else {

      if (state.repeat) {

        nextMix()

      } else if (state.currentSong === state.activePlaylist.length - 1) {


        dispatch({

          type: SET_TOGGLE_PLAYING,
          data: false,
        })

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
    
    if(state.appSettings.appDarkMode){

      document.body.classList.add('dark-version');

    } else {

      document.body.classList.remove('dark-version');

    }

  }, [state.appSettings.appDarkMode])

  // effect to handle changing of the play pause states of the application
  useEffect(() => {

    togglePlaying()

  }, [state.playing])

  //effect to handle changes to the current song
  useEffect(() => {

    //create a method to interact with audio object and hit next to play the next item
    SetCurrent(state.currentSong)

    audio.ontimeupdate = () => { 
      setCurrentTime( audio.currentTime ) 
      dispatch({ type: SET_RECENT_SEEK_TIME, data: audio.currentTime })
    }

    audio.oncanplay = () => { 
      setDuration( audio.duration ) 
      dispatch({ type: SET_MIX_ITEM_DURATION, data: audio.duration })
    }

    audio.onended = () => {
      handleEndOfMix()
    }

  }, [state.currentSong])

  //effect to control the volume of the audio player
  useEffect(() => {

    audio.volume = state.volume

  }, [state.volume])

  //get and set the current language
  // useEffect(() => {

  //   console.log('languge has changed to ', state.appSettings.language)

  // }, [state.appSettings.language])


  return (
    <appContext.Provider
      value={{
        currentSong: state.currentSong,
        songs: state.activePlaylist,
        activePlaylist: state.activePlaylist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        astronomyPicture: state.astronomyPicture,
        audioObject: audio,
        volume: state.volume,
        duration: duration,
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