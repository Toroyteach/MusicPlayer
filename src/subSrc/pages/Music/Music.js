import React, { useContext, useEffect } from 'react'

//cookie for enabling and disabling application tour
import Cookies from 'universal-cookie';

import { useSelector, useDispatch } from 'react-redux';

// import '../../assets/users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo, Elastic } from 'gsap';
// import { Toast, Button } from 'react-bootstrap';

// components
import MainPlayer from './components/MainPlayer.js';
import Navbar from './components/Navbar';
// import Weather from'./components/Weather';
import Visualizer from './components/Visualizer';
import PlainWaves from './components/PlainWaves.js';
// import SongQuiz from './sub-components/SongQuiz';
import Astronomy from './pages/Astronomy';
import CalmAnxiety from './pages/CalmAnxiety';
import OnlineListeners from './pages/OnlineListeners';

import appContext from '../../services/context/appContext.js';

import musicContext from '../../services/music/musicContext.js';

import endpointCoverArtUrl from '../../services/api/base/endPointCoverArtUrl.js';

//import custom component for intro js dependecies
import ApplicationTour from '../../services/intro-tour/ApplicationTour.js';

//import the reducer function states to make consistent states
import {

  SET_ENABLE_APPLICATION_TOUR,

} from '../../services/context/appState/stateTypes';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";
import ImageGen from './pages/ImageGen.js';
import { set_enable_application_tour } from '../../services/redux/app/reducer/appReducer.js';

export default function Music() {

  // Global State
  // const {
  //   stateDispatch,
  // } = useContext(appContext)

  // const {
  //   currentSong,
  //   activePlaylist,
  // } = useContext(musicContext)

  const dispatch = useDispatch()
  const musicData = useSelector((state) => state.music.data)
  const userData = useSelector((state) => state.user.data)

  //initiate tge translator
  const { t } = useTranslation();

  //handles mouse on hover of the text "LISTEN"
  const handleMouseEnterTextHoverAction = () => {
    gsap.to($(".main-btn_wrapper"), { duration: 0.5, opacity: 1, display: "block", position: "absolute", scale: 1, ease: Elastic.easeOut.config(1, 0.75) });
    gsap.to($(".line"), { duration: 0.5, css: { scaleY: 0.6, transformOrigin: "center center" }, ease: Expo.easeOut });
  }

  const handleMouseExitTextHoverAction = () => {
    gsap.to($(".main-btn_wrapper"), { duration: 0.5, opacity: 0, display: "none", scale: 0, ease: Elastic.easeOut.config(1, 0.75) });
    gsap.to($(".line"), { duration: 0.5, css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut });
  }

  //handles opening of the navigation bar
  const handlePlayerMenuAction = () => {
    // ===== Toggle the oppening and closing of the users nav bar
    let gsapAction = gsap;
    if ($(".m-nav").css("display") === "none") {
      gsapAction.to(".dim", { duration: 0.5, opacity: 1, display: "block", ease: Power2.easeInOut });
      gsapAction.fromTo(".m-nav", { duration: 0.5, xPercent: -100 }, { xPercent: 0, display: "block", ease: Expo.easeOut });
      //gsapAction.staggerTo( ".m-nav li", {duration:0.5, opacity: 0, y: 20, ease: Power2.easeInOut }, 0.1 );

      gsapAction.to(".m-nav li", {
        duration: 0.7,
        y: 20,
        ease: Power2.easeInOut,
        stagger: {
          grid: [7, 15],
          from: "random",
          amount: 0.7
        }
      });

      $(".logo-text").css({ opacity: "0", display: "none" });

    } else if ($(".m-nav").css("display") === "block" && $("#curator").css("display") === "block") {
      gsapAction.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
      gsapAction.to(".m-nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
      // $('.logo-text').css({'opacity': '1', 'display': 'block'});
    } else {
      gsapAction.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
      gsapAction.to(".m-nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
      $(".logo-text").css({ opacity: "1", display: "block" });
    }
  }

  //handles opening of the mini player playlist
  const handleOpenMiniPlayer = () => {
    let gsapAction = gsap;

    gsapAction.to(".dim", { duration: 0.5, opacity: 1, display: "block", ease: Power2.easeInOut });
    gsapAction.fromTo("#player", { duration: 0.5, xPercent: 100 }, { xPercent: 0, display: "block", ease: Expo.easeOut });
    gsapAction.to(".mini-player", { duration: 0.5, x: 50, ease: Expo.easeOut });
  }

  //handles stopping the dim and also retracting the navigation and other tool bar
  const handlePlayerDimAction = () => {
    gsap.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
    gsap.to("#player", { duration: 0.5, xPercent: 100, display: "none", ease: Expo.easeOut });
    gsap.to(".m-nav", { duration: 0.5, xPercent: -100, y: -20, display: "none", ease: Expo.easeOut });
    gsap.to(".mini-player", { duration: 0.5, x: 0, ease: Expo.easeOut });
  }

  // In the Music player navigation
  const handleHomeClickActionBack = () => {
    //edit this to resume playback from initial play or start  playing..
    let homeToMain = gsap;

    if ($("#curator").css("display") === "block") {
      homeToMain.fromTo($(".curator_title_wrapper"), { opacity: 1, x: 0 }, { opacity: 0, x: 30, ease: Power2.easeInOut, duration: 0.5 })
      homeToMain.fromTo($(".curator_list"), { opacity: 1, display: "block", x: 0 }, { opacity: 0, x: 30, display: "none", ease: Power2.easeInOut, duration: 0.5 })
      homeToMain.to($("#curator"), { display: "none", ease: Power2.easeInOut, duration: 0.4 })
    }

    // Hide
    $("#astronomy, #anxiety, .back_btn, #imageGen").css("display", "none");
    //homeToMain.to( $(".back_btn"),{ display: "none" } );

    homeToMain.to($(".wave-container"), 1, { yPercent: 0, ease: Power2.easeInOut }, 1);
    // 	Show
    homeToMain.to($(".text-wrap"), { display: "flex", opacity: 1, y: 0, ease: Power2.easeInOut, duration: 1.3 },);
    homeToMain.to($(".logo-text, .line"), 0.5, { display: "block", opacity: 1, y: 0, ease: Power2.easeInOut }, 1.2);
    // 	Force to redraw by using y translate
    homeToMain.fromTo($(".text-wrap .text"), { y: 0.1, position: "absolute" }, { y: 0, position: "relative", ease: Power2.easeInOut, duration: 1.3 });
    homeToMain.to(".m-nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });

    homeToMain.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
    $(".logo-text").css("display", "block");
  }

  const onPlayButtonClickInitiateTour = () => {

    dispatch(set_enable_application_tour(true))
    // stateDispatch({ type: SET_ENABLE_APPLICATION_TOUR, data: true })

  }

  //cookie to check if user hase already seen the tour for a day
  const cookies = new Cookies();

  //create an effect to start the application tour
  useEffect(() => {

    if (cookies.get('showTour') != 'show') {

      dispatch(set_enable_application_tour(true))
      // stateDispatch({ type: SET_ENABLE_APPLICATION_TOUR, data: true })

    }

  }, [])

  return (

    <div className="container_fluid wrapper" id="wrapper">

      <div className='container_fluid'>
        <div className='row'>
          <div className='col-4'>
            {/* Header for the LIstners and home */}
            <div className="header">
              <div className="burger-wrapper" onClick={handlePlayerMenuAction} id='musicSubNavIntro'>
                <div className="burger"></div>
              </div>
              <div className="back_btn" onClick={handleHomeClickActionBack}>
                <div className=""><i className="fa fa-home" aria-hidden="true"></i></div>
                <div className="text"> &nbsp;{t("home")}</div>
              </div>
            </div>
          </div>
          <div className='col-8'>
            {/* Mini Music */}
            <div className="mini-player" onClick={handleOpenMiniPlayer} id='musicPlayerIntro'>
              <div className="track_info_wrapper miniPlayer">
                <div className="track_info">
                {(typeof musicData.currentSong === 'number') && (<div className="thumb" style={{ backgroundImage: `url(${endpointCoverArtUrl+musicData.activePlaylist[musicData.currentSong]?.coverArt})`}}></div>)}
                  <div className="info">
                    <div className="title">{musicData.activePlaylist[musicData.currentSong]?.title}</div>
                    <div className="artist">{musicData.activePlaylist[musicData.currentSong]?.genre}</div>
                  </div>
                </div>
              </div>

              <div className="mini-player_btn_wrapper">
                <i className="btn-open-player fa fa-list" aria-hidden="true"></i>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Waves and Audio Soectryum Visualizer Canvas Component */}
      <PlainWaves />
      {/* <Visualizer /> */}

      <div className="line"></div>

      <div className="text-wrap">
        <div className="text" onMouseEnter={handleMouseEnterTextHoverAction} onMouseLeave={handleMouseExitTextHoverAction}>
          <span>L</span><span>I</span><span>S</span><span>T</span><span>E</span><span>N</span>
          <div className="main-btn_wrapper" onClick={onPlayButtonClickInitiateTour}>
            <i className="main-btn fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Music Page Sub-Navbar Component */}
      <Navbar />

      {/* USe to redurn the navigation and music player back after launched */}
      <div className="dim" onClick={handlePlayerDimAction}></div>

      {/* Sliding in Music Player Component */}
      <MainPlayer />

      {/* this section Online Active Listeners Component*/}
      <OnlineListeners />

      {/* this section will have the calm your anxiety pictures */}
      {/* <CalmAnxiety /> */}

      {/* this section will host the astronomy picture of the day */}
      <Astronomy />

    </div>
  )
}
