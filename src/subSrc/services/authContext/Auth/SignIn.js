import React, { useRef, useState, useContext } from 'react'

import useQuery from '../../api/base/useQuery.js';

import appContext from '../../context/appContext.js';

import musicContext from '../../music/musicContext.js';

import apiClient from '../../api/base/apiClient.js';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../useAuth.js';

import { useCookies } from "react-cookie";

import image from '../../../assets/users/img/new/apocalypticsunset_pe.png';

import {
  SET_USER_EMAIL,
  SET_USER_USERNAME,
  SET_USER_FIRSTNAME,
  SET_USER_LASTNAME,
  SET_USER_EXCERPT,
  SET_USER_NUMBER,
  SET_USER_USERIMAGE,
  SET_USER_ACTIVEPLAYLIST,
  SET_USER_LASTSONG,
  SET_USER_LAST_SEEKTIME,
  SET_USER_TOTALMINUTESLISTENED,
  SET_USER_TOTAL_PLAYS_COUNT,
  SET_USER_ROLE,
  SET_USER_HISTORY_LIST,
  SET_USER_SHAZAM_LIST,
  SET_USER_COMMENTS_COUNT,
  SET_USER_COMMENTS,
  SET_USER_FAVOURITES_COUNT,
  SET_USER_FAVOURITE_LIST_ADD,
  SET_USER_IDENTIFIED_SONGS_COUNT,
  SET_USER_FIREBASE_UUID,
  SET_SHOW_MY_ONLINE_STATUS,
  SET_SHOW_OTHERS_COMMENTS,
  SET_GLOBAL_LANGUAGE,
  SET_MAIN_APP_DARKMODE,
} from '../../context/appState/stateTypes.js';

import {
  SET_TOGGLE_RANDOM,
  SET_TOGGLE_REPEAT,
  SET_ALLMUSICMIXES,
  SET_ACTIVE_PLAYLIST_ARRAY
} from '../../music/musicState/musicStateTypes';

//custom input validation with Regular Expressions
import useEmailValidation from '../../hooks/formValidation/useEmailValidation';
import usePasswordValidation from '../../hooks/formValidation/usePasswordValidation';

export default function SignIn() {

  const { setAuth } = useAuth();

  //global states
  // Global State
  const {
    stateDispatch,
  } = useContext(appContext)

  const {
    musicStateDispatch,
  } = useContext(musicContext)

  //cookie
  const [cookies, setCookie] = useCookies(["userToken", "userRefreshToken"]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const errRef = useRef();

  //Email
  const { email, setEmail, validEmail } = useEmailValidation();

  //Password
  const { password, setPassword, validPassword } = usePasswordValidation();

  const [errMsg, setErrMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [requestData, setRequestData] = useState({})
  //const { data, loading, error } = useQuery('/auth/login', 'POST', requestData, { enabled: false, refetchOnWindowFocus: false });

  //const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();


    // if(validEmail && validPassword){

    //   setRequestData({
    //     email,
    //     password
    //   })

    //   // Set the buttonClicked state to true to trigger the request
    //   setButtonClicked(true);

    //   if (data) {
    //     //set cookier    

    //     console.log(data)

    //   }

    // }


    if (validEmail && validPassword) {

      setLoading(true)

      apiClient.post('/auth/login', { password, email })
        .then(response => {

          setLoading(false)

          setCookie("userToken", response.data.accessToken, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          setCookie("userRefreshToken", response.data.refreshToken, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          setAuth({ email, password });

          stateDispatch({ type: SET_USER_FIREBASE_UUID, data: response.data.userData.firebaseUid })
          setCookie("firebaseUid", response.data.userData.firebaseUid, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_USERNAME, data: response.data.userData.userBio.username })
          setCookie("username", response.data.userData.userBio.username, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_FIRSTNAME, data: response.data.userData.userBio.firstname })
          setCookie("firstname", response.data.userData.userBio.firstname, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_LASTNAME, data: response.data.userData.userBio.lastname })
          setCookie("lastname", response.data.userData.userBio.lastname, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_EXCERPT, data: response.data.userData.userBio.excerpt })
          setCookie("excerpt", response.data.userData.userBio.excerpt, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_EMAIL, data: response.data.userData.userBio.email })
          setCookie("email", response.data.userData.userBio.email, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_NUMBER, data: response.data.userData.userBio.phone })
          setCookie("number", response.data.userData.userBio.phone, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_USERIMAGE, data: response.data.userData.userBio.photoUrl ?? 'imageavatar.png' })
          setCookie("image", response.data.userData.userBio.photoUrl ?? 'imageavatar.png', {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_TOTALMINUTESLISTENED, data: response.data.userData.appData.totalMinutesListenec })
          setCookie("minutesListened", response.data.userData.appData.totalMinutesListenec, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_TOTAL_PLAYS_COUNT, data: response.data.userData.appData.totalPlaysCount })
          setCookie("playsCount", response.data.userData.appData.totalPlaysCount, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_USER_ROLE, data: response.data.userData.userBio.role })
          setCookie("role", response.data.userData.appData.role, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_SHOW_MY_ONLINE_STATUS, data: response.data.userData.appData.allowOnlineStatus })
          setCookie("onlineStatus", response.data.userData.appData.allowOnlineStatus, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_SHOW_OTHERS_COMMENTS, data: response.data.userData.appData.allowComments })
          setCookie("showOthersComment", response.data.userData.appData.allowComments, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          stateDispatch({ type: SET_MAIN_APP_DARKMODE, data: response.data.userData.appData.appDarkMode })
          setCookie("appDarkMode", response.data.userData.appData.appDarkMode, {
            path: "/",
            secure: true,
            sameSite: true,
          });


          musicStateDispatch({ type: SET_TOGGLE_RANDOM, data: response.data.userData.appData.randomPlayback })
          setCookie("randomPlayback", response.data.userData.appData.randomPlayback, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          musicStateDispatch({ type: SET_TOGGLE_REPEAT, data: response.data.userData.appData.replayPlayback })
          setCookie("repeatPlayback", response.data.userData.appData.replayPlayback, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          // musicStateDispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: response.data.userData.appData.activePlaylist })
          // setCookie("activePlaylist", response.data.userData.appData.activePlaylist, {
          //   path: "/",
          //   secure: true,
          //   sameSite: true,
          // });


          // stateDispatch({ type: SET_USER_SHAZAM_LIST, data: response.data.userData.shazam.shazamData })
          // stateDispatch({ type: SET_USER_IDENTIFIED_SONGS_COUNT, data: response.data.userData.shazam.shazamCount })
          // stateDispatch({ type: SET_USER_COMMENTS_COUNT, data: response.data.userData.comment.commentsCount })
          // stateDispatch({ type: SET_USER_COMMENTS, data: response.data.userData.comment.comments })
          // stateDispatch({ type: SET_USER_FAVOURITE_LIST_ADD, data: response.data.userData.favourite.favouriteData })
          // stateDispatch({ type: SET_USER_FAVOURITES_COUNT, data: response.data.userData.favourite.favouriteCount })

          // stateDispatch({ type: SET_USER_ACTIVEPLAYLIST, data: response.data.userData.activei })
          // stateDispatch({ type: SET_USER_LASTSONG, data: response.data.userData })
          // stateDispatch({ type: SET_USER_LAST_SEEKTIME, data: response.data.userData })
          // stateDispatch({ type: SET_USER_HISTORY_LIST, data: response.data.userData.history.historyData })

          // stateDispatch({ type: SET_GLOBAL_LANGUAGE, data: response.data.userData })
          // stateDispatch({ type: SET_ALLMUSICMIXES, data: response.data.userData.musicList })
          // stateDispatch({ type: SET_MUSIC_APP_DARKMODE, data: response.data.userData.appData.appDarkMode })
          // stateDispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: email })

          // stateDispatch({ type: SET_ENABLE_APPLICATION_TOUR, data: email })
          // stateDispatch({ type: SET_ENABLE_GLOBAL_AUDIO_VISUALIZER, data: email })
          // stateDispatch({ type: SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE, data: email })
          // stateDispatch({ type: SET_ENABLE_GLOBAL_SHAZAM_SEARCH, data: email })
          // stateDispatch({ type: SET_ENABLE_GLOBAL_DOWNLOAD_OPTION, data: email })
          // stateDispatch({ type: SET_ENABLE_GLOBAL_CALM_ANXIETY, data: email })
          // stateDispatch({ type: SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY, data: email })

          navigate('/music', { replace: true });
        })
        .catch(error => {

          setLoading(false)
          setError("Your Credentials Do not Match our records")


        });

    }


  }

  const socialOnClick = (e) => {

    console.log(e)
  }

  return (
    <>
      <main className="main-content  mt-0">
        <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url(' + image + ')' }}>
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-secondary shadow-primary border-radius-lg py-3 pe-1">
                      <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                      <div className="row mt-3 px-3 py-3">
                        <div className="col-3 text-center ms-auto cursor-pointer" onClick={() => { socialOnClick('Facebook/Meta') }}>
                          <i className="fa fa-facebook text-white text-lg"></i>
                        </div>
                        <div className="col-3 text-center ms-auto cursor-pointer" onClick={() => { socialOnClick('Twitter') }}>
                          <i className="fa fa-twitter text-white text-lg"></i>
                        </div>
                        <div className="col-3 text-center me-auto cursor-pointer" onClick={() => { socialOnClick('Apple') }}>
                          <i className="fa fa-apple text-white text-lg"></i>
                        </div>
                        <div className="col-3 text-center me-auto cursor-pointer" onClick={() => { socialOnClick('Google') }}>
                          <i className="fa fa-google text-white text-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  {error &&
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                      {error}
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>}

                  <div className="card-body">
                    <form role="form" className="text-start" onSubmit={handleSubmit}>
                      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                      <div className="input-group input-group-outline my-3">

                        <input placeholder='Email or Username or Number' onChange={(e) => setEmail(e.target.value)} aria-describedby="uidnote" autoComplete="off" type="email" className="form-control" required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                        <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} aria-describedby="uidnote" autoComplete="off" type="password" className="form-control" required />
                      </div>
                      <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember me</label>
                      </div>
                      <div className="text-center">
                        <button type="submit" disabled={!validEmail || !validPassword ? true : false} className="btn bg-gradient-secondary w-100 my-4 mb-2">Sign in</button>

                        {loading && <div className="spinner-grow text-center" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>}
                      </div>
                      <p className="mt-4 text-sm text-center">
                        Don't have an account?
                        <Link to="/signup">
                          <a className="text-primary text-gradient font-weight-bold">Dont Worry. Sign Up Here</a>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer position-absolute bottom-2 py-2 w-100">
            <div className="container">
              <div className="align-items-center justify-content-lg-between">
                <div className="col-12 col-md-12 my-auto">
                  <div className="copyright text-center text-sm text-white text-lg-start">
                    ©
                    made with <i className="fa fa-heart"></i> by
                    <a href="https://bellenorthedynamics.com" className="font-weight-bold" target="_blank"> Toroyteach </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
