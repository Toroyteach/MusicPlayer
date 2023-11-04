import { song_list } from "../../../pages/Music/music/songsList"

const allMusicListCount = [
    {
        "commentsEnabled": true,
        "mixId": "  dtLzqJlkKMwpPdTQoTMG ",
        "status": "enabled",
        "title": "Quepasa",
        "genre": "house-edm",
        "songsCount": "52",
        "duration": "1:43:12",
    },
    {
        "commentsEnabled": true,
        "mixId": "  dtLzqJlkKMwpPdTQoTMG ",
        "status": "enabled",
        "title": "Wabisabi",
        "genre": "house-edm",
        "songsCount": "52",
        "duration": "1:43:12",
    },
    {
        "commentsEnabled": true,
        "mixId": "  dtLzqJlkKMwpPdTQoTMG ",
        "status": "enabled",
        "title": "Amelia",
        "genre": "house-edm",
        "songsCount": "52",
        "duration": "1:43:12",
    }
]

//Music player states
const musicSettings = {
    currentSong: 0,
    activePlaylist: [],
    completePlaylist: song_list,
    repeat: false,
    random: false,
    playing: false,
    seekTime: 0,
    duration: 0,
    volume: 0.1,
    mainAppTheme: 'default',
    musicAppTheme: 'default',
    likedItem: false,
    mixList: allMusicListCount,
    playOrLoading: false,
}

//the reducer states
const defaultMusicState = {
    musicSettings,
}

export default defaultMusicState;