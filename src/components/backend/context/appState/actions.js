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
  } from './appState/stateTypes'

  const fetchUserProfile = (params)=> {
    return {
        type:SET_MUSIC_APP_DARKMODE,
        data:param
    }
  }