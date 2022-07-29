//imports for the state types to be used in the reducer
import {
  //music application state
  SET_CURRENT_SONG,
  SET_TOGGLE_RANDOM,
  SET_TOGGLE_REPEAT,
  SET_TOGGLE_PLAYING,
  SET_ACTIVE_PLAYLIST_ARRAY,
  SET_RECENT_SEEK_TIME,
  SET_FAVOURITE_MIX_ITEM,
  SET_MIX_ITEM_DURATION,
  SET_VOLUME,
  SET_MIX_ITEM_LOADING_SPINNER,

  //admin states
  SET_ENABLE_GLOBAL_AUDIO_VISUALIZER,
  SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE,
  SET_ENABLE_GLOBAL_SHAZAM_SEARCH,
  SET_ENABLE_GLOBAL_DOWNLOAD_OPTION,
  SET_ENABLE_GLOBAL_CALM_ANXIETY,
  SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY,

  //Application states
  SET_SPECTRUM_TYPE,
  SET_GLOBAL_LANGUAGE,
  SET_MAIN_APP_DARKMODE,
  SET_MUSIC_APP_DARKMODE,
  SET_ASTRONOMY_PICTURE,

  //Application stats
  SET_CUMMULATIVE_MINUTES_LISTENED,
  SET_COMMULATIVE_PLAYS_COUNT,
  SET_CUMMULATIVE_COMMENTS,
  SET_TOTAL_USERS_COUNT,
  SET_TOTAL_SHAZAM_COUNT,
  SET_HIGEST_FAVOURITES,
  SET_CUMMULATIVE_DOWNLOADS,
  SET_CUMMULATIVE_QUIZ_ATTEMPTS,

  //user profile states
  SET_USER_USERNAME,
  SET_USER_FIRSTNAME,
  SET_USER_LASTNAME,
  SET_USER_EXCERPT,
  SET_USER_EMAIL,
  SET_USER_NUMBER,
  SET_USER_USERIMAGE,
  SET_USER_ACTIVEPLAYLIST,
  SET_USER_LASTSONG,
  SET_USER_LAST_SEEKTIME,
  SET_USER_TOTALMINUTESLISTENED,
  SET_USER_TOTAL_PLAYS_COUNT,
  SET_USER_ROLE,
  SET_USER_TOTAL_QUIZE_POINTS,
  SET_USER_LAST_QUIZ_DATE,

  //user setting states
  SET_SHOW_MY_ONLINE_STATUS,
  SET_SHOW_OTHERS_COMMENTS,
  SET_ALLOW_RANDOM_QUIZ,
  SET_ARTIFICIAL_WEATHER,

} from './stateTypes'

//the redcuers state and dispatch methods
export default (state, action) => {
  switch (action.type) {

    //Music application states
    case SET_ACTIVE_PLAYLIST_ARRAY:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, activePlaylist: action.data }
      }

    case SET_CURRENT_SONG:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, currentSong: action.data }
      }

    case SET_TOGGLE_RANDOM:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, random: action.data }
      }

    case SET_TOGGLE_REPEAT:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, repeat: action.data }
      }

    case SET_TOGGLE_PLAYING:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, playing: action.data }
      }

    case SET_RECENT_SEEK_TIME:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, seekTime: action.data }
      }

    case SET_MIX_ITEM_DURATION:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, duration: action.data }
      }

    case SET_VOLUME:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, volume: action.data }
      }

    case SET_MIX_ITEM_LOADING_SPINNER:
      return {
        ...state,
        musicSettings: { ...state.musicSettings, spinnerLoading: action.data }
      }

    case SET_FAVOURITE_MIX_ITEM:
      return {
        // comee back to this one
        ...state,
        favourite: action.data,
      }

    //User states
    case SET_USER_FIRSTNAME:
      return {
        ...state,
        userData: { ...state.userData, firstname: action.data }
      }

    case SET_USER_LASTNAME:
      return {
        ...state,
        userData: { ...state.userData, lastname: action.data }
      }

    case SET_USER_USERNAME:
      return {
        ...state,
        userData: { ...state.userData, username: action.data }
      }

    case SET_USER_EXCERPT:
      return {
        ...state,
        userData: { ...state.userData, excerpt: action.data }
      }

    case SET_USER_EMAIL:
      return {
        ...state,
        userData: { ...state.userData, email: action.data }
      }

    case SET_USER_NUMBER:
      return {
        ...state,
        userData: { ...state.userData, number: action.data }
      }

    case SET_USER_USERIMAGE:
      return {
        ...state,
        userData: { ...state.userData, userImage: action.data }
      }

    case SET_USER_ACTIVEPLAYLIST:
      return {
        ...state,
        userData: { ...state.userData, activePlaylist: action.data }
      }

    case SET_USER_LASTSONG:
      return {
        ...state,
        userData: { ...state.userData, lastSong: action.data }
      }

    case SET_USER_LAST_SEEKTIME:
      return {
        ...state,
        userData: { ...state.userData, recentSeekTime: action.data }
      }

    case SET_USER_TOTALMINUTESLISTENED:
      return {
        ...state,
        userData: { ...state.userData, totalMinutesListened: action.data }
      }

    case SET_USER_TOTAL_PLAYS_COUNT:
      return {
        ...state,
        userData: { ...state.userData, totalPlaysCount: action.data }
      }

    case SET_USER_ROLE:
      return {
        ...state,
        userData: { ...state.userData, role: action.data }
      }

    case SET_USER_TOTAL_QUIZE_POINTS:
      return {
        ...state,
        userData: { ...state.userData, totalQuizePoints: action.data }
      }

    case SET_USER_LAST_QUIZ_DATE:
      return {
        ...state,
        userData: { ...state.userData, lastQuizDate: action.data }
      }

    case SET_SHOW_MY_ONLINE_STATUS:
      return {
        ...state,
        userData: { ...state.userData, allowOnlineStatus: action.data }
      }

    case SET_SHOW_OTHERS_COMMENTS:
      return {
        ...state,
        userData: { ...state.userData, allowComments: action.data }
      }

    case SET_ARTIFICIAL_WEATHER:
      return {
        ...state,
        userData: { ...state.userData, allowWeather: action.data }
      }

    case SET_ALLOW_RANDOM_QUIZ:
      return {
        ...state,
        userData: { ...state.userData, allowQuize: action.data }
      }

    //Application stats
    case SET_CUMMULATIVE_MINUTES_LISTENED:
      return {
        ...state,
        appSettings: { ...state.appSettings, cumulativeMinutesListened: action.data }
      }

    case SET_COMMULATIVE_PLAYS_COUNT:
      return {
        ...state,
        appSettings: { ...state.appSettings, cumulativePlays: action.data }
      }

    case SET_CUMMULATIVE_COMMENTS:
      return {
        ...state,
        appSettings: { ...state.appSettings, cumulativeComments: action.data }
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        appSettings: { ...state.appSettings, usersCount: action.data }
      }

    case SET_TOTAL_SHAZAM_COUNT:
      return {
        ...state,
        appSettings: { ...state.appSettings, shazamCounts: action.data }
      }

    case SET_HIGEST_FAVOURITES:
      return {
        ...state,
        appSettings: { ...state.appSettings, highestFavourite: action.data }
      }

    case SET_CUMMULATIVE_DOWNLOADS:
      return {
        ...state,
        appSettings: { ...state.appSettings, cumulativeDownloaded: action.data }
      }

    case SET_CUMMULATIVE_QUIZ_ATTEMPTS:
      return {
        ...state,
        appSettings: { ...state.appSettings, cummulativeQuizeAttempts: action.data }
      }

    //Application states 
    case SET_MUSIC_APP_DARKMODE:
      return {
        ...state,
        appSettings: { ...state.appSettings, musicAppDarkMode: action.data }
      }

    case SET_SPECTRUM_TYPE:
      return {
        ...state,
        appSettings: { ...state.appSettings, activeSpectrum: action.data }
      }

    case SET_MAIN_APP_DARKMODE:
      return {
        ...state,
        appSettings: { ...state.appSettings, appDarkMode: action.data }
      }

    case SET_ENABLE_GLOBAL_AUDIO_VISUALIZER:
      return {
        ...state,
        appSettings: { ...state.appSettings, visualizerActive: action.data }
      }

    case SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE:
      return {
        ...state,
        appSettings: { ...state.appSettings, astronomyActive: action.data }
      }

    case SET_ENABLE_GLOBAL_SHAZAM_SEARCH:
      return {
        ...state,
        appSettings: { ...state.appSettings, shazamActive: action.data }
      }

    case SET_ENABLE_GLOBAL_DOWNLOAD_OPTION:
      return {
        ...state,
        appSettings: { ...state.appSettings, downloadActive: action.data }
      }

    case SET_ENABLE_GLOBAL_CALM_ANXIETY:
      return {
        ...state,
        appSettings: { ...state.appSettings, anxietyVideos: action.data }
      }

    case SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY:
      return {
        ...state,
        appSettings: { ...state.appSettings, viewOtherUsers: action.data }
      }

    case SET_GLOBAL_LANGUAGE:
      return {
        ...state,
        appSettings: { ...state.appSettings, language: action.data }
      }

    case SET_ASTRONOMY_PICTURE:
      return {
        ...state,
        astronomyPicture: action.data,
        ...state,
        appSettings: { ...state.appSettings, astronomyPicture: action.data }
      }

    default:
      return state
  }
}