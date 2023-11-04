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
    SET_ABLE_TO_PLAY_OR_LOADING,
    SET_COMPLETE_PLAYLIST,
    SET_ALLMUSICMIXES,
  
  } from './musicStateTypes'
  
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
  
      case SET_FAVOURITE_MIX_ITEM:
        return {
          ...state,
          musicSettings: { ...state.musicSettings, likedItem: action.data }
        }
  
      case SET_ABLE_TO_PLAY_OR_LOADING:
        return {
          ...state,
          musicSettings: { ...state.musicSettings, playOrLoading: action.data }
        }
  
      case SET_COMPLETE_PLAYLIST:
        return {
          ...state,
          musicSettings: { ...state.musicSettings, completePlaylist: action.data }
        }
  
      case SET_ALLMUSICMIXES:
        return {
          ...state,
          musicSettings: { ...state.musicSettings, mixList: action.data }
        }

  
      default:
        return state
    }
  }