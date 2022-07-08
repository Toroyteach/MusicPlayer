import React, { useReducer, useState, useEffect, useContext, createContext } from 'react'

import appReducer from './appState/appReducer'
import appContext, { themes } from './appContext'

import { song_list } from '../music-app/music/songsList'

import {
  SET_CURRENT_SONG,
  SET_TOGGLE_RANDOM,
  SET_TOGGLE_REPEAT,
  SET_TOGGLE_PLAYING,
  SET_ACTIVE_PLAYLIST_ARRAY,
  SET_RECENT_SEEK_TIME,
  SET_SPECTRUM_TYPE,
  SET_FAVOURITE_MIX,
  SET_MAIN_APP_DARKMODE,
  SET_MUSIC_APP_DARKMODE,
  SET_FAVOURITE_MIX_ITEM,
} from './appState/stateTypes';

import defaultState from './appState/defaultState'


const ThemeUpdateContext = createContext();

const ApplicationState = (props) => {

  // initialize the reducer with the default state of the application
  const [state, dispatch] = useReducer(appReducer, defaultState)

  // Set songs array
  const playlistSet = (songArr) => dispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: songArr })

  // Set playing state of the audio
  // const togglePlaying = () => dispatch({ type: SET_TOGGLE_PLAYING, data: state.playing ? false : true })

  // Set current song
  const SetCurrent = (id) => dispatch({ type: SET_CURRENT_SONG, data: id })

  // Prev song
  const prevMix = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.activePlaylist.length - 1)
    } else {
      SetCurrent(state.currentSong - 1)
    }
  }

  // Handle Next song
  const nextMix = () => {
    if (state.currentSong === state.activePlaylist.length - 1) {

      SetCurrent(0)

    } else if (state.random) {

      SetCurrent(Math.floor(Math.random() * state.activePlaylist.length));
      //console.log(Math.floor(Math.random() * state.activePlaylist.length));

    } else {

      SetCurrent(state.currentSong + 1)
    }
  }

  // Handle Repeat Mix Item
  const toggleRepeat = () => dispatch({ type: SET_TOGGLE_REPEAT, data: state.repeat ? false : true })

  // Handle Random
  const toggleRandom = () => dispatch({ type: SET_TOGGLE_RANDOM, data: state.random ? false : true })

  // Handle Random
  const setSpectrum = () => dispatch({ type: SET_SPECTRUM_TYPE, data: state.random ? false : true })

  // Handle Random
  const setRecentSeekTime = (id) => dispatch({ type: SET_RECENT_SEEK_TIME, data: state.random ? false : true })

  // Handle Random
  const setFavouriteMix = (id) => dispatch({ type: SET_FAVOURITE_MIX_ITEM, data: state.random ? false : true })

  // Handle Random
  const setAppDarkTheme = () => dispatch({ type: SET_MAIN_APP_DARKMODE, data: state.random ? false : true })

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
        console.log('false')

        return

      } else {

        nextMix()

      }

    }
  }

  //handle theme provider for dark mode and light mode
  // const ThemeUpdateContext = useContext();

  const [appDarkTheme, setDarkTheme] = useState(false);
  const changeTheme = () => {

    //setTheme(theme);

    //dispatch({type: SET_MAIN_APP_DARKMODE, data: theme })

    if(!appDarkTheme){

      console.log(" dark is State ");  
      setDarkTheme(true);
      document.body.classList.add('dark-version');
      document.body.classList.add('music-version');

    } else {

      console.log(" dark is not State ");
      setDarkTheme(false);
      document.body.classList.remove('dark-version');
      document.body.classList.remove('music-version');
    }

  }


  return (
    <appContext.Provider
      value={{
        currentSong: state.currentSong,
        songs: state.activePlaylist,
        activePlaylist: state.activePlaylist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        nextMix,
        prevMix,
        SetCurrent,
        toggleRandom,
        toggleRepeat,
        handleEndOfMix,
        playlistSet,
        audio: state.audio,
        changeTheme,
        ...state,
        // dispatch
      }}
    >
          {props.children}
    </appContext.Provider>
  )

}

export default ApplicationState