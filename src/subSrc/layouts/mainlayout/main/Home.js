import React, { useContext, useEffect, useState, useRef } from 'react'

import { Link, useMatch, useResolvedPath, Outlet, useLocation, useNavigate } from 'react-router-dom';

import * as THREE from 'three';

import io from 'socket.io-client';

// import { useQuery } from 'react-query';

import useQuery from '../../../services/api/base/useQuery.js';

//use auth for logout
import useAuth from '../../../services/authContext/useAuth.js';//'../backend/authContext/useAuth.js';

import apiClient from '../../../services/api/base/apiClient.js';

import apiEndUrl from '../../../services/api/base/apiEndurl.js';

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';

import musicContext from '../../../services/music/musicContext.js';

//notification images
import messageImage from '../../../assets/users/img/team-2.jpg';
import noticeImage from "../../../assets/users/img/small-logos/logo-spotify.svg";
import animeImg from '../../../assets/users/animeHeadphones.png'
import animeImgSvg from '../../../assets/users/anime.svg'
//sunsset image profile background
import image from '../../../assets/users/img/logo-ct.png';

//import the footer section of the application
import Footer from '../../components/footer/Footer.js';

//import custom toast component and its assets
import CustomToast from '../../components/toast/CustomToast.js';

//import languages list
import LanguageList from '../../../services/localization/LanguageList.js';
import LocalizeTypes from '../../../services/localization/localizeTypes.js'
import { useCookies, Cookies } from "react-cookie";

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import ApplicationTour from '../../../services/intro-tour/ApplicationTour.js';

import {
  SET_USER_FIREBASE_UUID,
  SET_USER_USERNAME,
  SET_USER_FIRSTNAME,
  SET_USER_LASTNAME,
  SET_USER_EXCERPT,
  SET_USER_EMAIL,
  SET_USER_NUMBER,
  SET_USER_TOTALMINUTESLISTENED,
  SET_USER_TOTAL_PLAYS_COUNT,
  SET_USER_ROLE,
  SET_USER_HISTORY_LIST,
  SET_USER_SHAZAM_LIST,
  SET_SHOW_MY_ONLINE_STATUS,
  SET_SHOW_OTHERS_COMMENTS,
  SET_MAIN_APP_DARKMODE,
  SET_USER_FAVOURITE_LIST_ADD,
  SET_ONLINE_USERS_LIST,
  SET_USER_USERIMAGE
} from '../../../services/context/appState/stateTypes';

import {
  SET_TOGGLE_RANDOM,
  SET_TOGGLE_REPEAT,
  SET_ALLMUSICMIXES,
  SET_ACTIVE_PLAYLIST_ARRAY,
} from '../../../services/music/musicState/musicStateTypes';

// import warningIcon from '../../../layouts/components/toast/toastSvg/warning.svg';
import webSocketUrl from '../../../services/api/base/webSocketUrl.js';

export default function Home() {

  //Global State
  const {
    userData: {
      firebaseUid,
      username,
      allowOnlineStatus,
      userImage,
      role,
    },
    appSettings: {
      notificationText,
      asideNavigation,
      thanosSnapVisible,
    },
    stateDispatch,
  } = useContext(appContext)

  const {
    musicStateDispatch,
    activePlaylist,
    currentSong,
  } = useContext(musicContext)

  const [setCookie, removeCookie] = useCookies(["userToken", "userRefreshToken"]);
  const cookies = new Cookies();
  // const accessToken = cookies.get('userToken')

  const refContainer = useRef(null);

  const navigate = useNavigate();

  //initiate tge translator
  const { t } = useTranslation();

  const { data } = useQuery(`${apiEndUrl}profile/getUserFavouriteList/${firebaseUid}`, "GET");
  const { data: musicListData } = useQuery(`${apiEndUrl}music/getMix`, "GET");
  //use this to allow users to change the current active localisation language
  const handleChangeLanguage = (value) => {

    // const cookies = new Cookies();
    // const refreshToken = cookies.get('userRefreshToken')

    // //TODO stop music if playing

    // apiClient.delete(`/auth/logout?refreshToken=${refreshToken}`)
    //   .then(response => {

    //     if(response.data.success === true){

    //       stateDispatch({ type: SET_GLOBAL_LANGUAGE, data: response.data.photoUrl })

    //       let data = {
    //         type: t("success"),
    //         text: "Language Set Seccessfully",
    //         icon: checkIcon,
    //         bgColour: '#5cb85c',
    //       }

    //       dispatchNotification(data)

    //     } else if(response.data.success === false) {

    //       let data = {
    //         type: 'Warning',
    //         text: 'Failed to Set Language',
    //         icon: warningIcon,
    //         bgColour: '#f0ad4e',
    //       }

    //       dispatchNotification(data)

    //     }

    //   })
    //   .catch(error => {

    //     let data = {
    //       type: 'Warning',
    //       text: 'Failed to Set Language',
    //       icon: warningIcon,
    //       bgColour: '#f0ad4e',
    //     }

    //     dispatchNotification(data)

    //   });

    //change to the new language
    i18n.changeLanguage(value)

  }

  //use to set the nav active or not on mobile view
  const [isActive, setIsActive] = useState(false);
  const openNavBar = (e) => {
    e.preventDefault();
    setIsActive(current => !current)
  }
  //set timeout function to take back navigation anchor back
  const navigationTimeOut = () => {

    setTimeout(() => {

      setIsActive(current => !current)

    }, 100);

  }

  const { auth, setAuth } = useAuth();
  // const location = useLocation();
  const logout = () => {
    //unset cookie
    const cookies = new Cookies();
    const refreshToken = cookies.get('userRefreshToken')

    //TODO stop music if playing

    apiClient.delete(`/auth/logout?refreshToken=${refreshToken}`)
      .then(response => {

        if (response.data.success === true) {


          stateDispatch({ type: SET_USER_USERNAME, data: '' })
          stateDispatch({ type: SET_USER_FIRSTNAME, data: '' })
          stateDispatch({ type: SET_USER_LASTNAME, data: '' })
          stateDispatch({ type: SET_USER_EXCERPT, data: '' })
          stateDispatch({ type: SET_USER_EMAIL, data: '' })
          stateDispatch({ type: SET_USER_NUMBER, data: '' })
          stateDispatch({ type: SET_USER_TOTALMINUTESLISTENED, data: '' })
          stateDispatch({ type: SET_USER_TOTAL_PLAYS_COUNT, data: '' })
          stateDispatch({ type: SET_USER_ROLE, data: '' })
          stateDispatch({ type: SET_USER_HISTORY_LIST, data: '' })
          stateDispatch({ type: SET_USER_SHAZAM_LIST, data: '' })
          stateDispatch({ type: SET_SHOW_MY_ONLINE_STATUS, data: '' })
          stateDispatch({ type: SET_SHOW_OTHERS_COMMENTS, data: '' })
          stateDispatch({ type: SET_MAIN_APP_DARKMODE, data: '' })
          stateDispatch({ type: SET_USER_FAVOURITE_LIST_ADD, data: '' })

          setAuth({});


          removeCookie("userToken", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: 'localhost'
          });

          removeCookie("userRefreshToken", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: 'localhost'
          });

          removeCookie("firebaseUid", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("username", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("firstname", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("lastname", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("excerpt", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("email", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("number", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("role", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("image", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("minutesListened", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("playsCount", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("onlineStatus", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("showOthersComment", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("appDarkMode", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("randomPlayback", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("repeatPlayback", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: "localhost"
          });

          removeCookie("activePlaylist", {
            path: "/",
            secure: true,
            sameSite: true,
            domain: 'localhost'
          });


          navigate("/login");

        }
        // else if(response.data.success === false) {

        //   let data = {
        //     type: 'Warning',
        //     text: 'Failed to Logout',
        //     icon: warningIcon,
        //     bgColour: '#f0ad4e',
        //   }

        //   dispatchNotification(data)

        // }

      })
      .catch(error => {

        console.log(error)

      });


  }

  //dispatch all notiifcations from on place
  // const dispatchNotification = (data) => {

  //   const notice = {
  //     id: Math.floor((Math.random() * 101) + 1),
  //     title: data.type,
  //     description: data.text,
  //     backgroundColor: data.bgColour,
  //     icon: data.icon
  //   };

  //   stateDispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: notice });
  // }

  //toast texts and description
  const [list, setList] = useState([]);

  //Mobile view
  // const isMobile = window.innerWidth <= 768;

  const language = (LocalizeTypes || []).map((language, idx) => (
    <LanguageList key={idx} style={language.stype} name={language.name} handleOnClick={() => { handleChangeLanguage(language.value) }} />
  ))

  useEffect(() => {

    if (notificationText.length != 0) {

      setList([...list, notificationText]);

    }


    // const element = document.documentElement; // Get the root element (HTML element)

    // if (isMobile) {
    //   if (element.requestFullscreen) {
    //     element.requestFullscreen(); // Standard API
    //   } else if (element.mozRequestFullScreen) {
    //     element.mozRequestFullScreen(); // Firefox
    //   } else if (element.webkitRequestFullscreen) {
    //     element.webkitRequestFullscreen(); // Webkit/Blink
    //   } else if (element.msRequestFullscreen) {
    //     element.msRequestFullscreen(); // IE/Edge
    //   }
    // } else {
    //   alert('Full-screen mode is only available on mobile devices.');
    // }


  }, [notificationText]);

  //use effect to check state changes in the Application tour to launch/remove Aside Navigation state
  useEffect(() => {

    asideNavigation ? setIsActive(true) : setIsActive(false)

  }, [asideNavigation])

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = io(webSocketUrl);

    if (allowOnlineStatus) {

      const songTitle = activePlaylist[currentSong]?.title ?? ''

      if (songTitle) {
        return
      }

      socket.emit('onlineListeners', {
        userName: username,
        activeSong: songTitle,
        displayPicUrl: userImage
      });

    }

    socket.on('onlineUsersList', (users) => {
      if (users.length > 0) {
        stateDispatch({ type: SET_ONLINE_USERS_LIST, data: users })
      }

    });

    return () => {
      // Disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, [])

  useEffect(() => {

    if (((cookies.get('userToken') != 'null' && cookies.get('userRefreshToken') != 'null') || cookies.get('userToken') || cookies.get('userRefreshToken'))) {

      stateDispatch({ type: SET_USER_FIREBASE_UUID, data: cookies.get('firebaseUid') })
      stateDispatch({ type: SET_USER_USERNAME, data: cookies.get('username') })
      stateDispatch({ type: SET_USER_FIRSTNAME, data: cookies.get('firstname') })
      stateDispatch({ type: SET_USER_LASTNAME, data: cookies.get('lastname') })
      stateDispatch({ type: SET_USER_EXCERPT, data: cookies.get('excerpt') })
      stateDispatch({ type: SET_USER_EMAIL, data: cookies.get('email') })
      stateDispatch({ type: SET_USER_NUMBER, data: cookies.get('number') })
      stateDispatch({ type: SET_USER_ROLE, data: cookies.get('role') })
      stateDispatch({ type: SET_USER_USERIMAGE, data: cookies.get('image') ?? 'imageavatar.png' })
      stateDispatch({ type: SET_USER_TOTALMINUTESLISTENED, data: cookies.get('minutesListened') })
      stateDispatch({ type: SET_USER_TOTAL_PLAYS_COUNT, data: cookies.get('playCount') })
      stateDispatch({ type: SET_SHOW_MY_ONLINE_STATUS, data: (cookies.get('onlineStatus') == true || cookies.get('onlineStatus') === "true") ? true : false })
      stateDispatch({ type: SET_SHOW_OTHERS_COMMENTS, data: (cookies.get('showOthersComment') == true || cookies.get('showOthersComment') === "true") ? true : false })
      stateDispatch({ type: SET_MAIN_APP_DARKMODE, data: (cookies.get('appDarkMode') == true || cookies.get('appDarkMode') === "true") ? true : false })

      // musicStateDispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: cookies.get('activePlaylist') })
      musicStateDispatch({ type: SET_TOGGLE_RANDOM, data: (cookies.get('randomPlayback') == true || cookies.get('randomPlayback') === "true") ? true : false })
      musicStateDispatch({ type: SET_TOGGLE_REPEAT, data: (cookies.get('repeatPlayback') == true || cookies.get('repeatPlayback') === "true") ? true : false })
    }

  }, [])

  useEffect(() => {

    if (data) {

      stateDispatch({ type: SET_USER_FAVOURITE_LIST_ADD, data: data.data.favourite.favouriteData })
    }

  }, [data])

  useEffect(() => {

    if (musicListData) {


      if (musicListData.status === 'success') {

        const mixArray = []
        const uniqueItemsSet = new Set();

        musicListData.data.mix.mixData.forEach(item => {

          if (!uniqueItemsSet.has(item.mixId)) {

            if (item.status === "disabled") {
              return
            }

            uniqueItemsSet.add(item.mixId);

            mixArray.push({
              commentsEnabled: item.commentsEnabled,
              description: item.description,
              duration: item.duration,
              genre: item.genre,
              mixId: item.mixId,
              songsCount: item.songsCount,
              status: item.status,
              title: item.title,
              chunks: item.chunks,
              coverArt: item.coverArt
            });

          }

        })

        musicStateDispatch({ type: SET_ALLMUSICMIXES, data: mixArray })
        musicStateDispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: mixArray })

      }

    }

  }, [musicListData])

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (

    <>
      <ApplicationTour />

      <div className={isActive ? 'g-sidenav-show g-sidenav-pinned' : 'g-sidenav-show'}>

        {/* {showComponent && <ApplicationTour />}  */}

        <CustomToast toastList={list} position="top-right" autoDelete={true} autoDeleteTime={3000} />

        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">

          <div className={thanosSnapVisible ? 'fadeOutMainNav' : 'row'} id='fadeOutMainNav'>
            <div className="sidenav-header">
              <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
              <div className="navbar-brand m-0">
                <img src={image} className="navbar-brand-img h-100" alt="main_logo" />
                <span className="ms-1 font-weight-bold text-white">Toroyteach Exp</span>
              </div>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div className="collapse navbar-collapse  w-auto" id="sidenav-collapse-main">
              <ul className="navbar-nav">
                <li className="nav-item" id='dashboardIntro'>
                  <CustomLink to="/users/dashboard" onClick={navigationTimeOut} >
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">dashboard</i>
                    </div>
                    <span className="nav-link-text ms-1">{t("dashboard")}</span>
                  </CustomLink>
                </li>
                <li className="nav-item" id='musicIntro'>
                  <CustomLink to="/music" onClick={navigationTimeOut}>
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">library_music</i>
                    </div>
                    <span className="nav-link-text ms-1">{t("music")}</span>
                  </CustomLink>
                </li>
                <li className="nav-item" id='messagesIntro'>
                  <CustomLink to="/users/messages" onClick={navigationTimeOut}>
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">receipt_long</i>
                    </div>
                    <span className="nav-link-text ms-1">{t("message")}</span>
                  </CustomLink>
                </li>
                <li className="nav-item" id='notificationsIntro'>
                  <CustomLink to="/notifications" onClick={navigationTimeOut}>
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">notifications</i>
                    </div>
                    <span className="nav-link-text ms-1">{t("notifications")}</span>
                  </CustomLink>
                </li>
                <li className="nav-item" id='aboutIntro'>
                  <CustomLink to="/about" onClick={navigationTimeOut}>
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">info</i>
                    </div>
                    <span className="nav-link-text ms-1">{t("about")}</span>
                  </CustomLink>
                </li>
                <li className="nav-item mt-3">
                  <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">{t("account")}</h6>
                </li>
                <li className="nav-item" id='profileIntro'>
                  <CustomLink to="/profile" onClick={navigationTimeOut}>
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">person</i>
                    </div>
                    <span className="nav-link-text ms-1">{t("profile")}</span>
                  </CustomLink>
                </li>
                <li className="nav-item" onClick={logout} id='logoutIntro'>
                  <a className="nav-link text-white ">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">logout</i>
                    </div>
                    <span className="nav-link-text ms-1">{t("logout")}</span>
                  </a>
                </li>


                {role === "Admin" && (
                  <>
                    <li className="nav-item mt-3">
                      <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Admin Pages</h6>
                    </li>
                    <li className="nav-item">
                      <CustomLink to="/admin/dashboard" onClick={navigationTimeOut}>
                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">dashboard</i>
                        </div>
                        <span className="nav-link-text ms-1">Dashboard</span>
                      </CustomLink>
                    </li>
                    <li className="nav-item">
                      <CustomLink to="/admin/comments" onClick={navigationTimeOut}>
                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">assignment</i>
                        </div>
                        <span className="nav-link-text ms-1">Comments</span>
                      </CustomLink>
                    </li>
                    <li className="nav-item">
                      <CustomLink to="/admin/map" onClick={navigationTimeOut}>
                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">people</i>
                        </div>
                        <span className="nav-link-text ms-1">FanBase</span>
                      </CustomLink>
                    </li>
                  </>
                )}

                {/* <li className="nav-item">
              <CustomLink to="/admin/messages" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Messages</span>
              </CustomLink>
            </li> */}
                {/* <li className="nav-item">
              <CustomLink to="/admin/users" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">people</i>
                </div>
                <span className="nav-link-text ms-1">Users</span>
              </CustomLink>
            </li> */}
                {/* <li className="nav-item">
              <CustomLink to="/admin/add-quiz" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">add</i>
                </div>
                <span className="nav-link-text ms-1">Add Quiz</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/admin/add-mix" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">add</i>
                </div>
                <span className="nav-link-text ms-1">Add Mix</span>
              </CustomLink>
            </li> */}
              </ul>
            </div>

            <div className="sideNavAside">
            {/* <div ref={refContainer}></div> */}
              {/* <img src={animeImgSvg} className="card-img-top" alt="..." /> */}
            </div>

          </div>
        </aside>


        <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg " id='main-section'>
          {/* <!-- Navbar --> */}

          <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-auto">
                  <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="/#">{t("welcome")}</a></li>
                  <li className="breadcrumb-item text-sm active modalIntro" aria-current="page">{username}</li>
                </ol>
              </nav>
              <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                </div>
                <ul className="navbar-nav  justify-content-end">

                  <li className="nav-item d-flex align-items-center" id='languageSelectorIntro'>
                    <div className="sl-nav">
                      <ul>
                        <li>
                          <i className="fa fa-language cursor-pointer"></i>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>

                          <div className="triangle"></div>

                          <ul>

                            {language}

                          </ul>


                        </li>
                      </ul>

                    </div>
                  </li>

                  <li className="nav-item dropdown pe-2 d-flex align-items-center" id='shortNotificationIntro' aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Notifications">
                    <a href="/#" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-bell cursor-pointer"></i>
                    </a>
                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="/#">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img src={messageImage} className="avatar avatar-sm  me-3 " alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">{t("new-message-from")}</span> Anthony
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="/#">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img src={noticeImage} alt="" className="avatar avatar-sm bg-gradient-dark  me-3 " />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">{t("new-mix-by")}</span> Toroyteach
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item d-xl-none ps-3 d-flex align-items-center" onClick={openNavBar}>
                    <a href="/#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line"></i>
                        <i className="sidenav-toggler-line"></i>
                        <i className="sidenav-toggler-line"></i>
                      </div>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid changeView">

            <Outlet />


          </div>

          <div id='footerIntro'>
            <Footer />
          </div>

        </main>
      </div>
    </>
  )
}

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  const location = useLocation();

  if (isActive) {

    return (
      <Link className='active bg-gradient-primary nav-link text-white' to={to} {...props}>
        {children}
      </Link>
    )

  } else if ((to == location['pathname'].slice(0, 15)) || (to == location['pathname'].slice(0, 6))) {

    return (
      <Link className='active bg-gradient-primary nav-link text-white' to={to} {...props}>
        {children}
      </Link>
    )

  } else {

    return (
      <Link className='nav-link text-white ' to={to} {...props}>
        {children}
      </Link>
    )

  }

}
