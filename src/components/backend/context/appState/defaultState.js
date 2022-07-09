import { song_list } from '../../music-app/music/songsList'
const userData = {
  firstname: 'Anthony',
  lastname: 'Toroyteach',
  email: 'toroyteach@gmail.com',
  excerpt: 'I am a deejayw hos likes to do this other thing which is also being a programmer. Checkout what i have in store for you. Welcome to my experience. Its gonna be an amaizing one',
  username: 'Toroyteach',
  number: 'wantoowantwo',
  userImage: 'thisimage',
  activePlaylist: 'Favourite',
  lastSong: 'Angst',
  recentSeekTime: '12:13:48',
  randomPlayback: false,
  replayPlayback: false,
  activeSpectrum: "default",
  allowQuize: true,
  allowWeather: true,
  allowComments: false,
  allowOnlineStatus: false,
  totalMinutesListened: 129,
  totalPlaysCount: 34,
  appDarkMode: false,
  musicAppDarkMode: true,
  role: 'USER',
  totalQuizePoints: 10,
  lastQuizDate: 'today',
  history: [
    {
      "title": "Byte",
      "artist": "Toroyteach",
      "id": 3,
      "dateUpdated": '2012-02-03',
    },
    {
      "title": "Angst",
      "artist": "Toroyteach",
      "id": 4,
      "dateUpdated": '2012-02-03',
    },
  ],
  favourite: [
    {
      "title": "Switchback",
      "artist": "Toroyteach",
      "id": 3
    },
    {
      "title": "Mamba",
      "artist": "Toroyteach",
      "id": 1
    },
  ],
  shazam: [
    {
      "title": "Dont be so shy",
      "artist": "Imany",
    },
    {
      "title": "Sexy Chick",
      "artist": "David Guetta",
    },
  ],
  comments: [
    {
      "mixItem": "Quepasa",
      "content": "This has gat to be the worst i have ever heard",
      "dateCreated": "10th July 2022",
    },
    {
      "mixItem": "Recesse",
      "content": "Sexy Chick but you got to have tried some loream ipsum so that you can bring up all the logc to your thnking in the dumy text realm",
      "dateCreated": "10th July 2022",
    },
    {
      "mixItem": "Sensei",
      "content": "lorem ipsum is a dumy text wixt was deisgned to bring about the contious use of not thunkin gin created dummy text but just use the alresdy obsious one",
      "dateCreated": "10th July 2022",
    },
  ],
};

const appSettings = {
  visualizerActive: true,
  astronomyActive: false,
  shazamActive: true,
  downloadActive: false,
  anxietyVideos: true,
  viewOtherUsers: false,
  cumulativeMinutesListened: 13992,
  cumulativeDownloaded: 123,
  cumulativePlays: 245,
  cumulativeComments: 123,
  cummulativeQuizeAttempts: 124,
  usersCount: 34,
  shazamCounts: 13,
  highestFavourite: 'Mamba',
}

const defaultState = {
  currentSong: 0,
  activePlaylist: song_list, // should get deafult playlist
  repeat: false,
  random: false,
  playing: false,
  seekTime: 0,
  mainAppTheme: 'default',
  musicAppTheme: 'default',
  favourite: false,
  audio: null,
  userData,
  appSettings,
  astronomyPicture: '',
}

export default defaultState