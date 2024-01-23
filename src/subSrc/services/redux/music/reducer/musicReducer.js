import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentSong: null,
    activePlaylist: [],
    completePlaylist: [],
    repeat: false,
    random: false,
    playing: false,
    seekTime: 0,
    duration: 0,
    volume: 0.2,
    mainAppTheme: 'default',
    musicAppTheme: 'default',
    likedItem: false,
    mixList: [],
    playOrLoading: false,
    playingStatus: false,
    musicPlayingStatus: false,
    mixItemLoadingSpinner: false,
    currentChunkIndex: 0,
}

const musicSlice = createSlice({
    name: 'music',
    initialState: { data: initialState },
    reducers: {
        setMusic: (state, action) => {
            state.data = action.payload;
        },
        set_current_song: (state, action) => {
            state.data = { ...state.data, currentSong: action.payload };
        },
        set_toggle_random: (state, action) => {
            state.data = { ...state.data, random: action.payload };
        },
        set_toggle_repeat: (state, action) => {
            state.data = { ...state.data, repeat: action.payload };
        },
        set_toggle_playing: (state, action) => {
            state.data = { ...state.data, playing: action.payload };
        },
        set_active_playlist_array: (state, action) => {
            state.data = { ...state.data, activePlaylist: action.payload };
        },
        set_recent_seek_time: (state, action) => {
            state.data = { ...state.data, seekTime: action.payload };
        },
        set_favourite_mix_item: (state, action) => {
            state.data = { ...state.data, likedItem: action.payload };
        },
        set_volume: (state, action) => {
            state.data = { ...state.data, volume: action.payload };
        },
        set_mix_item_duration: (state, action) => {
            state.data = { ...state.data, duration: action.payload };
        },
        set_able_to_play_or_loading: (state, action) => {
            state.data = { ...state.data, playOrLoading: action.payload };
        },
        set_complete_playlist: (state, action) => {
            state.data = { ...state.data, completePlaylist: action.payload };
        },
        set_allmusicmixes: (state, action) => {
            state.data = { ...state.data, mixList: action.payload };
        },
        set_music_playing_status: (state, action) => {
            state.data = { ...state.data, musicPlayingStatus: action.payload };
        },
        // set_mix_item_loading_spinner: (state, action) => {
        //     state.data = { ...state.data, mixItemLoadingSpinner: action.payload };
        // },
        set_current_chunk_index: (state, action) => {
            state.data = { ...state.data, currentChunkIndex: action.payload };
        },
        increment_current_chunk_index: (state) => {
            state.data = { ...state.data, currentChunkIndex: state.data.currentChunkIndex + 1 };
        },
        reset_chunk_index: (state) => {
            state.data = { ...state.data, currentChunkIndex: 1 };
        },
    },
});

export const {
    setMusic,
    set_current_song,
    set_toggle_random,
    set_toggle_repeat,
    set_toggle_playing,
    set_active_playlist_array,
    set_recent_seek_time,
    set_favourite_mix_item,
    set_volume,
    set_mix_item_duration,
    set_able_to_play_or_loading,
    set_complete_playlist,
    set_allmusicmixes,
    set_music_playing_status,
    // set_mix_item_loading_spinner,
    set_current_chunk_index,
    increment_current_chunk_index,
    reset_chunk_index,
} = musicSlice.actions;

export default musicSlice.reducer;