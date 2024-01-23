import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    visualizerActive: false,
    astronomyActive: false,
    shazamActive: false,
    downloadActive: false,
    anxietyVideos: false,
    viewOtherUsers: false,
    cumulativeMinutesListened: 0,
    cumulativeDownloaded: 0,
    cumulativePlays: 0,
    cumulativeComments: 0,
    cummulativeQuizeAttempts: 0,
    usersCount: 0,
    shazamCounts: 0,
    highestFavourite: '',
    language: 'En',
    appDarkMode: false,
    activeSpectrum: false,
    musicAppDarkMode: false,
    astronomyPicture: '',
    notificationText: [],
    asideNavigation: false,
    enableApplicationTour: false,
    thanosSnapVisible: false,
    onlineList: []
  }

const appSlice = createSlice({
    name: 'app',
    initialState: { data: initialState },
    reducers: {
        setApp: (state, action) => {
            state.data = action.payload;
        },
        set_music_app_darkmode: (state, action) => {
            state.data = { ...state.data, musicAppDarkMode: action.payload };
        },
        set_mix_item_loading_spinner: (state, action) => {
            state.data = { ...state.data, mixItemLoadingSpinner: action.payload };
        },
        set_cumulative_minutes_listened: (state, action) => {
            state.data = { ...state.data, cumulativeMinutesListened: action.payload };
        },
        set_cumulative_plays_count: (state, action) => {
            state.data = { ...state.data, cumulativePlays: action.payload };
        },
        set_cummulative_comments: (state, action) => {
            state.data = { ...state.data, cummulativeComments: action.payload };
        },
        set_total_users_count: (state, action) => {
            state.data = { ...state.data, usersCount: action.payload };
        },
        set_total_shazam_count: (state, action) => {
            state.data = { ...state.data, shazamCounts: action.payload };
        },
        set_higest_favourites: (state, action) => {
            state.data = { ...state.data, higestFavourite: action.payload };
        },
        set_cummulative_downloads: (state, action) => {
            state.data = { ...state.data, cummulativeDownloaded: action.payload };
        },
        set_cummulative_quiz_attempts: (state, action) => {
            state.data = { ...state.data, cummulativeQuizAttempts: action.payload };
        },
        set_astronomy_picture: (state, action) => {
            state.data = { ...state.data, astronomyPicture: action.payload };
        },
        set_global_language: (state, action) => {
            state.data = { ...state.data, language: action.payload };
        },
        set_aside_navigation_open_app_tour: (state, action) => {
            state.data = { ...state.data, asideNavigation: action.payload };
        },
        set_enable_application_tour: (state, action) => {
            state.data = { ...state.data, enableApplicationTour: action.payload };
        },
        set_main_app_darkmode: (state, action) => {
            state.data = { ...state.data, appDarkMode: action.payload };
        },
        set_thanos_snap_animation: (state, action) => {
            state.data = { ...state.data, thanosSnapAnimation: action.payload };
        },
        set_notifiation_text_item: (state, action) => {
            state.data = { ...state.data, notificationText: action.payload };
        },
        set_enable_global_audio_visualizer: (state, action) => {
            state.data = { ...state.data, enableGlobalAudioVisualizer: action.payload };
        },
        set_enable_global_astronomy_picture: (state, action) => {
            state.data = { ...state.data, astronomyActive: action.payload };
        },
        set_enable_global_shazam_search: (state, action) => {
            state.data = { ...state.data, enableGlobalShazamSearch: action.payload };
        },
        set_enable_global_download_option: (state, action) => {
            state.data = { ...state.data, enableGlobalDownloadOption: action.payload };
        },
        set_enable_global_calm_anxiety: (state, action) => {
            state.data = { ...state.data, anxietyVideos: action.payload };
        },
        set_enable_global_allow_users_see_others_online_activity: (state, action) => {
            state.data = { ...state.data, viewOtherUsers: action.payload };
        },
        set_online_users_list: (state, action) => {
            state.data = { ...state.data, onlineList: action.payload };
        },
    },
});

export const {
    setApp,
    set_music_app_darkmode,
    set_mix_item_loading_spinner,
    set_cumulative_minutes_listened,
    set_cumulative_plays_count,
    set_cummulative_comments,
    set_total_users_count,
    set_total_shazam_count,
    set_higest_favourites,
    set_cummulative_downloads,
    set_cummulative_quiz_attempts,
    set_astronomy_picture,
    set_global_language,
    set_aside_navigation_open_app_tour,
    set_enable_application_tour,
    set_main_app_darkmode,
    set_thanos_snap_animation,
    set_notifiation_text_item,
    set_enable_global_audio_visualizer,
    set_enable_global_astronomy_picture,
    set_enable_global_shazam_search,
    set_enable_global_download_option,
    set_enable_global_calm_anxiety,
    set_enable_global_allow_users_see_others_online_activity,
    set_online_users_list,
  } = appSlice.actions;

export default appSlice.reducer;