import React, { useReducer, useState, useEffect, createContext } from 'react'

import appReducer from './appState/appReducer.js';
import appContext from './appContext.js';

//librarty from axios to fetch the data
import axios from 'axios';

//set the active language
import '../../services/localization/i18n'

import {
  SET_CURRENT_SONG,
  SET_TOGGLE_PLAYING,
  SET_ACTIVE_PLAYLIST_ARRAY,
  SET_RECENT_SEEK_TIME,
  SET_MIX_ITEM_DURATION,
  SET_MUSIC_APP_DARKMODE,
  SET_FAVOURITE_MIX_ITEM,
  SET_ASTRONOMY_PICTURE,
  SET_ABLE_TO_PLAY_OR_LOADING,
  SET_NOTIFIATION_TEXT_ITEM
} from './appState/stateTypes.js';

import defaultState from './appState/defaultState.js';

import warningIcon from '../../layouts/components/toast/toastSvg/warning.svg';

//import cookie to set the last timeline playing
//cookie for enabling and disabling application tour
import Cookies from 'universal-cookie';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";
import i18n from 'i18next';

//const ThemeUpdateContext = createContext();

const ApplicationState = (props) => {

  //initiate tge translator
  const { t } = useTranslation();

  // initialize the reducer with the default state of the application
  const [state, dispatch] = useReducer(appReducer, defaultState)

  //cookie to set the timeline seek items for mixes
  const cookies = new Cookies();

  // Set songs array
  //const playlistSet = (songArr) => dispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: songArr })

  // Set audio playing element
  const [audio] = useState(new Audio(state.musicSettings.activePlaylist[0].fileUrl));

  //handles the playing and pausing of the audio object
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const togglePlaying = () => {

    state.musicSettings.playing ? audio.play() : audio.pause()

  }

  // Set current song
  const SetCurrent = (id) => {
    //set the dispatch playing to false
    dispatch({ type: SET_TOGGLE_PLAYING, data: false, })

    //add the correct method to fetch the correct file path
    audio.src = state.musicSettings.activePlaylist[id].fileUrl;

    //set the secleted song in dispatch
    dispatch({ type: SET_CURRENT_SONG, data: id })

    //change the document title dynamically to the mix name
    const name = state.musicSettings.activePlaylist[id].title

    // document.title = name;

  }

  // End of Song
  const handleEndOfMix = () => {
    //clear cookie
    cookies.remove('mixPreviousTimeline', { path: '/' })
    // Check for random and repeat options
    // and set the next mix
    //set the dispatch playing to false
    dispatch({ type: SET_TOGGLE_PLAYING, data: false, })

    if (state.musicSettings.random) {

      dispatch({ type: SET_CURRENT_SONG, data: ~~(Math.floor(Math.random() * state.musicSettings.activePlaylist.length)), })

    } else {

      if (state.musicSettings.repeat) {

        console.log('repeat')

        SetCurrent(state.musicSettings.currentSong)

      } else if (state.musicSettings.currentSong === state.musicSettings.activePlaylist.length - 1) {

        SetCurrent(0)

      } else {

        SetCurrent(state.musicSettings.currentSong + 1)

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

  const [cookieSeekTime, setCookieSeekTime] = useState(10);


  //effect to handle changes to the current song including errors and setting of cookies and any audio issues
  useEffect(() => {

    //create a method to interact with audio object and hit next to play the next item
    SetCurrent(state.musicSettings.currentSong)

    //loop through the favourite list if match dispatch favourite icon else none
    const result = state.userData.favourite.favouriteItems.find((match) => match.id === state.musicSettings.activePlaylist[state.musicSettings.currentSong].id)

    //dispatch set favourite icon to true
    dispatch({ type: SET_FAVOURITE_MIX_ITEM, data: result ? true : false })

    //dispatch the the browser is loading the music item.
    audio.onloadstart = () => {
      dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: true })
    }

    //
    audio.onplaying = () => {


    }

    //set call back to set cookie of timeline after 1min
    audio.ontimeupdate = () => {

      setCurrentTime(audio.currentTime)

      //if ((Math.trunc(audio.currentTime) % 60 === 0)) {
        console.log(audio.currentTime)
        //set the cookie here
        let time = audio.currentTime

        const date = new Date()
        date.setFullYear(date.getFullYear() + 1)

        cookies.set('mixPreviousTimeline', time, { path: '/', secure: true, sameSite: 'none', expires: date });
      //}

      dispatch({ type: SET_RECENT_SEEK_TIME, data: audio.currentTime })
    }

    audio.oncanplay = () => {

      setDuration(audio.duration)
      dispatch({ type: SET_MIX_ITEM_DURATION, data: audio.duration })
      dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: false })

    }

    audio.oncanplaythrough = () => {
      //check if the cookie for previous time was set
      // if (cookies.get('mixPreviousTimeline')) {

      //   let cookieTime = cookies.get('mixPreviousTimeline')

      //   //setCurrentTime(cookieTime)

      //   audio.currentTime = cookieTime

      // }
    }

    audio.onended = () => {
      handleEndOfMix()
    }

    //implement for when there is an error get the data
    //show a warning toast
    audio.onerror = () => {

      const notice = {
        id: Math.floor((Math.random() * 101) + 1),
        title: t("warning"),
        description: t("There-is-an-error-accessing-the-Mix-Item"),
        backgroundColor: '#f0ad4e',
        icon: warningIcon
      };

      dispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: notice });

      cookies.remove('mixPreviousTimeline', { path: '/' })

    }

    //this means the browser is downloading the audio obj
    audio.onprogess = () => {

    }

    //called when the loading of the item has finished or will not happen any more
    audio.onsuspend = () => {

      //show the toast of the added mix item
      // const notice = {
      //   id: Math.floor((Math.random() * 101) + 1),
      //   title: 'Warning',
      //   description: 'There is an issue accessing the Mix Item. Please check your connection and Reload',
      //   backgroundColor: '#f0ad4e',
      //   icon: warningIcon
      // };

      // dispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: notice });
      // console.log('on suspended')
      cookies.remove('mixPreviousTimeline', { path: '/' })
    }

  }, [state.musicSettings.currentSong])

  //effect to control the volume of the audio player
  useEffect(() => {

    audio.volume = state.musicSettings.volume

  }, [state.musicSettings.volume])

  //gets the user set languagefrom db and sets it
  useEffect(() => {

    const defLang = state.appSettings.language

    i18n.changeLanguage(defLang)

  }, [])

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