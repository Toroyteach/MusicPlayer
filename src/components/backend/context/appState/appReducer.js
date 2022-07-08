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

} from './stateTypes'

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

    case SET_SPECTRUM_TYPE:
      return {
        ...state,
        spectrumType: action.data,
      }

    case SET_FAVOURITE_MIX_ITEM:
      return {
        ...state,
        favourite: action.data,
      }

    case SET_MAIN_APP_DARKMODE:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_MUSIC_APP_DARKMODE:
      return {
        ...state,
        musicAppTheme: action.data,
      }

    case SET_ENABLE_GLOBAL_AUDIO_VISUALIZER:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_ENABLE_GLOBAL_SHAZAM_SEARCH:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_ENABLE_GLOBAL_DOWNLOAD_OPTION:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_ENABLE_GLOBAL_CALM_ANXIETY:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_SHOW_MY_ONLINE_STATUS:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_SHOW_OTHERS_COMMENTS:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_ARTIFICIAL_WEATHER:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    case SET_ALLOW_RANDOM_QUIZ:
      return {
        ...state,
        mainAppTheme: action.data,
      }

    default:
      return state
  }
}