import { song_list } from '../../../pages/Music/music/songsList.js';

const mixList = [
  'QuePasa', 'Byte', 'Mamba', 'RecessTrance', 'JK', 'Angst', 'SwitchBack', 'Magnifico', 'HolyGrailH', 'Tonny',
  'Amelia', 'Cool_Jam',
  'Khalifa_kush', 'Step_up',
  'Bona', 'My_all_time',
  'DuranTonny', 'Tempted_to_say_sorry',
  'Formula', 'Hocus',
  'T_D', 'M10', 'Made_Up', 'Recess', 'Sweet', 'Ultimo', 'Intuition', 'Sensei', 'Hallows', 'Contengency', 'Aspire3',
  'DuranTonny', 'Tempted_to_say_sorry', 'Pilot', 'Prism', 'HolyGrainP',
];

//default user state
const userData = {
  firstname: 'Anthony',
  lastname: 'Toroyteach',
  email: 'toroyteach@gmail.com',
  excerpt: 'I am a deejay who also likes to do this other programming thing. Checkout what i have in store for you. Welcome to my experience. Its gonna be an amaizing one',
  username: 'Toroyteach',
  number: 'wantoowantwo',
  userImage: 'thisimage',
  activePlaylist: 'Favourite',
  lastSong: 'Angst',
  recentSeekTime: '12:13:48',
  allowQuize: false,
  allowWeather: false,
  allowComments: false,
  allowOnlineStatus: false,
  totalMinutesListened: 129,
  totalPlaysCount: 34,
  role: 'USER',
  totalQuizePoints: 10,
  lastQuizDate: 'today',
  history: [
    {
      "title": "Byte",
      "artist": "Toroyteach",
      "id": 3,
      "dateUpdated": '2012-02-03',
      "mixId": "263bx2i36b",
    },
    {
      "title": "Angst",
      "artist": "Toroyteach",
      "id": 4,
      "dateUpdated": '2012-02-03',
      "mixId": "x23dxfx4x4",
    },
  ],
  favourite: {
    favouriteCount: 2,
    favouriteItems: [
      {
        "id": 1,
        "title": "Byte",
        "artistName": "Toroyteach",
      },
      {
        "id": 2,
        "title": "Magnifico",
        "artistName": "Toroyteach",
      },
      {
        "id": 3,
        "title": "Angst",
        "artistName": "Toroyteach",
      },
      {
        "id": 4,
        "title": "Quepasa",
        "artistName": "Toroyteach",
      },
    ],
  },
  shazam: {
    shazamCount: 2,
    shazamItems: [
      {
        "title": "Dont be so shy",
        "artist": "Imany",
      },
      {
        "title": "Sexy Chick",
        "artist": "David Guetta",
      }],
  },
  comments: {
    commentsCount: 3,
    commentsItems: [
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
      }],
  },
};

//default application state settings
const appSettings = {
  visualizerActive: true,
  astronomyActive: false,
  shazamActive: false,
  downloadActive: false,
  anxietyVideos: false,
  viewOtherUsers: false,
  cumulativeMinutesListened: 13992,
  cumulativeDownloaded: 123,
  cumulativePlays: 245,
  cumulativeComments: 123,
  cummulativeQuizeAttempts: 124,
  usersCount: 34,
  shazamCounts: 13,
  highestFavourite: 'Mamba',
  language: 'En',
  appDarkMode: false,
  activeSpectrum: true,
  musicAppDarkMode: false,
  astronomyPicture: '',
  notificationText: [],
  asideNavigation: false,
  enableApplicationTour: false,
}

//Music player states
const musicSettings = {
  currentSong: 0,
  activePlaylist: song_list,
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
  mixList: mixList,
  playOrLoading: false,
}

//the reducer states
const defaultState = {
  userData,
  appSettings,
  musicSettings,
}

export default defaultState;