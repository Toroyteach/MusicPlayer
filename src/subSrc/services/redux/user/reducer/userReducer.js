import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firebaseUid: '',
    firstname: '',
    lastname: '',
    email: '',
    excerpt: '',
    username: '',
    number: '',
    userImage: '',
    activePlaylist: '',
    lastSong: '',
    recentSeekTime: '',
    allowQuize: false,
    allowWeather: false,
    allowComments: false,
    allowOnlineStatus: false,
    totalMinutesListened: 0,
    totalPlaysCount: 0,
    role: 'USER',
    totalQuizePoints: 0,
    lastQuizDate: '',
    history: [],
    favourite: {
        favouriteCount: 0,
        favouriteItems: [],
    },
    shazam: {
        shazamCount: 0,
        shazamItems: [],
    },
    comments: {
        commentsCount: 0,
        commentsItems: [],
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState: { data: initialState },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
        set_user_firstname: (state, action) => {
            state.data = { ...state.data, firstname: action.payload };
        },
        set_user_lastname: (state, action) => {
            state.data = { ...state.data, lastname: action.payload };
        },
        set_user_username: (state, action) => {
            state.data = { ...state.data, username: action.payload };
        },
        set_user_excerpt: (state, action) => {
            state.data = { ...state.data, excerpt: action.payload };
        },
        set_user_email: (state, action) => {
            state.data = { ...state.data, email: action.payload };
        },
        set_user_number: (state, action) => {
            state.data = { ...state.data, number: action.payload };
        },
        set_user_userimage: (state, action) => {
            state.data = { ...state.data, userImage: action.payload };
        },
        set_user_activeplaylist: (state, action) => {
            state.data = { ...state.data, activePlaylist: action.payload };
        },
        set_user_lastsong: (state, action) => {
            state.data = { ...state.data, lastSong: action.payload };
        },
        set_user_last_seektime: (state, action) => {
            state.data = { ...state.data, recentSeekTime: action.payload };
        },
        set_user_totalminuteslistened: (state, action) => {
            state.data = { ...state.data, totalMinutesListened: action.payload };
        },
        set_user_total_plays_count: (state, action) => {
            state.data = { ...state.data, totalPlaysCount: action.payload };
        },
        set_user_role: (state, action) => {
            state.data = { ...state.data, role: action.payload };
        },
        set_user_favouritelist_add: (state, action) => {
            state.data = { ...state.data, favourite: { ...state.data.favourite, favouriteItems: action.payload } };
        },
        set_user_favouritelist_remove: (state, action) => {
            state.data = { ...state.data, favourite: { ...state.data.favourite, favouriteItems: action.payload } };
        },
        set_user_shazamlist: (state, action) => {
            state.data = { ...state.data, shazam: { ...state.data.shazam, shazamItems: action.payload } };
        },
        set_user_historylist: (state, action) => {
            state.data = { ...state.data, history: action.payload };
        },
        set_user_favourites_count: (state, action) => {
            state.data = { ...state.data, favourite: { ...state.data.favourite, favouriteCount: action.payload } };
        },
        set_user_identified_songs_count: (state, action) => {
            state.data = { ...state.data, phone: action.payload };
        },
        set_user_comments: (state, action) => {
            state.data = { ...state.data, comments: { ...state.data.comments, commentsItems: action.payload } };
        },
        set_user_comments_count: (state, action) => {
            state.data = { ...state.data, comments: { ...state.data.comments, commentsCount: action.payload } };
        },
        set_user_firebase_uuid: (state, action) => {
            state.data = { ...state.data, firebaseUid: action.payload };
        },
        set_show_my_online_status: (state, action) => {
            state.data = { ...state.data, allowOnlineStatus: action.payload };
        },
        set_show_others_comments: (state, action) => {
            state.data = { ...state.data, allowComments: action.payload };
        },
    },
});

export const {
    setUser,
    set_user_firstname,
    set_user_lastname,
    set_user_username,
    set_user_excerpt,
    set_user_email,
    set_user_number,
    set_user_userimage,
    set_user_activeplaylist,
    set_user_lastsong,
    set_user_last_seektime,
    set_user_totalminuteslistened,
    set_user_total_plays_count,
    set_user_role,
    set_user_favouritelist_add,
    set_user_favouritelist_remove,
    set_user_shazamlist,
    set_user_historylist,
    set_user_favourites_count,
    set_user_identified_songs_count,
    set_user_comments,
    set_user_comments_count,
    set_user_firebase_uuid,
    set_show_my_online_status,
    set_show_others_comments,
} = userSlice.actions;

export default userSlice.reducer;


