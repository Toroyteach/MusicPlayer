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
  SET_ABLE_TO_PLAY_OR_LOADING,
  SET_NOTIFIATION_TEXT_ITEM
} from './appState/stateTypes.js';

import defaultState from './appState/defaultState.js';

import warningIcon from '../../layouts/components/toast/toastSvg/warning.svg';

//import cookie to set the last timeline playing
//cookie for enabling and disabling application tour
import Cookies from 'universal-cookie';


//const ThemeUpdateContext = createContext();

const ApplicationState = (props) => {

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

  //set the current time from cookie the when application loads
  // const setCurrentTimeFromCookie = (data) => {
  //   setCurrentTime(data)
  // }

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

      //set the call back to set cookie for previous timeline after every 1min
      // setTimeout(() => {

      //   cookies.set('mixPreviousTimeline', audio.currentTime, { path: '/', maxAge: 10  });

      // }, 60000);

      dispatch({ type: SET_RECENT_SEEK_TIME, data: audio.currentTime })
    }

    audio.oncanplay = () => {
      setDuration(audio.duration)
      dispatch({ type: SET_MIX_ITEM_DURATION, data: audio.duration })
      dispatch({ type: SET_ABLE_TO_PLAY_OR_LOADING, data: false })
    }

    audio.onended = () => {
      cookies.remove('mixPreviousTimeline', { path: '/', maxAge: 10  })
      handleEndOfMix()
    }


    //implement for when there is an error get the data
    //show a warning toast
    audio.onerror = () => {

      const notice = {
        id: Math.floor((Math.random() * 101) + 1),
        title: 'Warning',
        description: 'There is an error accessing the Mix Item',
        backgroundColor: '#f0ad4e',
        icon: warningIcon
      };

      dispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: notice });

      cookies.remove('mixPreviousTimeline', { path: '/', maxAge: 10 })

    }

    //
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
      cookies.remove('mixPreviousTimeline', { path: '/', maxAge: 10  })
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


  //set the current timeline from the cookie that was set from previou
  useEffect(() => {

    if (cookies.get('mixPreviousTimeline')) {

      let cookieTime = cookies.get('mixPreviousTimeline')
      setCurrentTime(cookieTime)

    }


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