//imports for the state types to be used in the reducer
import {
  SET_CURRENT_SONG,
  SET_TOGGLE_RANDOM,
  SET_TOGGLE_REPEAT,
  SET_TOGGLE_PLAYING,
  SET_ACTIVE_PLAYLIST_ARRAY,
  SET_RECENT_SEEK_TIME,
  SET_SPECTRUM_TYPE,
  SET_FAVOURITE_MIX_ITEM,
  SET_MAIN_APP_DARKMODE,
  SET_MUSIC_APP_DARKMODE,
  SET_MIX_ITEM_DURATION,
  SET_VOLUME,
  SET_GLOBAL_LANGUAGE,

  SET_ENABLE_GLOBAL_AUDIO_VISUALIZER,
  SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE,
  SET_ENABLE_GLOBAL_SHAZAM_SEARCH,
  SET_ENABLE_GLOBAL_DOWNLOAD_OPTION,
  SET_ENABLE_GLOBAL_CALM_ANXIETY,
  SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY,

  SET_SHOW_MY_ONLINE_STATUS,
  SET_SHOW_OTHERS_COMMENTS,
  SET_ALLOW_RANDOM_QUIZ,
  SET_ARTIFICIAL_WEATHER,
  SET_ASTRONOMY_PICTURE,

} from './stateTypes'

//the redcuers state and dispatch methods
export default (state, action) => {
  switch (action.type) {

    case SET_ACTIVE_PLAYLIST_ARRAY:
      return {
        ...state,
        songs: action.data,
      }

    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
      }

    case SET_TOGGLE_RANDOM:
      return {
        ...state,
        random: action.data,
      }

    case SET_TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.data,
      }

    case SET_TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data,
      }

    case SET_RECENT_SEEK_TIME:
      return {
        ...state,
        seekTime: action.data,
      }

    case SET_MIX_ITEM_DURATION:
      return {
        ...state,
        duration: action.data,
      }

    case SET_VOLUME:
      return {
        ...state,
        volume: action.data,
      }

    case SET_FAVOURITE_MIX_ITEM:
      return {
        // comee back to this one
        ...state,
        favourite: action.data,
      }

    case SET_SPECTRUM_TYPE:
      return {
        ...state,
        userData: { ...state.userData, activeSpectrum: action.data }
      }

    case SET_MAIN_APP_DARKMODE:
      return {
        ...state,
        userData: { ...state.userData, appDarkMode: action.data }
      }

    case SET_MUSIC_APP_DARKMODE:
      return {
        ...state,
        userData: { ...state.userData, musicAppDarkMode: action.data }
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
      }

    default:
      return state
  }
}