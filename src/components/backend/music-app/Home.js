import React, { PureComponent } from 'react'

import '../../../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo, Elastic } from 'gsap';
// import { Toast, Button } from 'react-bootstrap';

// components
import MainPlayer from './main-music-components/MainPlayer';
import Navbar from './main-music-components/Navbar';
// import Weather from'./main-music-components/Weather';
import Visualizer from './sub-components/Visualizer';
// import SongQuiz from './sub-components/SongQuiz';
import Astronomy from './child-components/Astronomy';
import CalmAnxiety from './child-components/CalmAnxiety';
import OnlineListeners from './child-components/OnlineListeners';
import Weather from './main-music-components/Weather';

export default class Home extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

  }

  //Handles Toast Information of new Music playing
  updateMusicToast() {
    this.setState({ show: true })
  }

  //handles mouse on hover of the text "LISTEN"
  handleMouseEnterTextHoverAction = () => {
    gsap.to($(".main-btn_wrapper"), { duration: 0.5, opacity: 1, display: "block", position: "absolute", scale: 1, ease: Elastic.easeOut.config(1, 0.75) });
    gsap.to($(".line"), { duration: 0.5, css: { scaleY: 0.6, transformOrigin: "center center" }, ease: Expo.easeOut });
  }

  handleMouseExitTextHoverAction = () => {
    gsap.to($(".main-btn_wrapper"), { duration: 0.5, opacity: 0, display: "none", scale: 0, ease: Elastic.easeOut.config(1, 0.75) });
    gsap.to($(".line"), { duration: 0.5, css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut });
  }

  //handles the main play button in the middle. use thos to initiate the music quiz
  handleStartListeningAction = () => {
    //edit this to resume playback from initial play or start  playing..
    let homeToMain = gsap;

    // Hide
    $(".logo-text").css("display", "none");
    homeToMain.to($(".line, .text-wrap"), 0.5, { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut }, 0);
    // Background down
    homeToMain.to($(".wave-container"), 1, { yPercent: 30, ease: Power2.easeInOut }, 0);
    // Show
    $("#curator").css("display", "block");
    homeToMain.fromTo($(".back_btn"), 0.8, { x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut }, 1);
    homeToMain.fromTo($(".curator_title_wrapper"), 0.8, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, 1);
    homeToMain.fromTo($(".curator_list"), 0.8, { opacity: 0, display: "none", x: 30 }, { opacity: 1, x: 0, display: "block", ease: Power2.easeInOut }, 1.2);
  }

  //handles opening of the navigation bar
  handlePlayerMenuAction = () => {
    // ===== Toggle the oppening and closing of the users nav bar
    let gsapAction = gsap;
    if ($(".nav").css("display") === "none") {
      gsapAction.to(".dim", { duration: 0.5, opacity: 1, display: "block", ease: Power2.easeInOut });
      gsapAction.fromTo(".nav", { duration: 0.5, xPercent: -100 }, { xPercent: 0, display: "block", ease: Expo.easeOut });
      //gsapAction.staggerTo( ".nav li", {duration:0.5, opacity: 0, y: 20, ease: Power2.easeInOut }, 0.1 );

      gsapAction.to(".nav li", {
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

    } else if ($(".nav").css("display") === "block" && $("#curator").css("display") === "block") {
      gsapAction.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
      gsapAction.to(".nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
      // $('.logo-text').css({'opacity': '1', 'display': 'block'});
    } else {
      gsapAction.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
      gsapAction.to(".nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
      $(".logo-text").css({ opacity: "1", display: "block" });
    }
  }

  //handles opening of the mini player playlist
  handleOpenMiniPlayer = () => {
    let gsapAction = gsap;

    gsapAction.to(".dim", { duration: 0.5, opacity: 1, display: "block", ease: Power2.easeInOut });
    gsapAction.fromTo("#player", { duration: 0.5, xPercent: 100 }, { xPercent: 0, display: "block", ease: Expo.easeOut });
    gsapAction.to(".mini-player", { duration: 0.5, x: 50, ease: Expo.easeOut });
  }

  //handles stopping the dim and also retracting the navigation and other tool bar
  handlePlayerDimAction = () => {
    gsap.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
    gsap.to("#player", { duration: 0.5, xPercent: 100, display: "none", ease: Expo.easeOut });
    gsap.to(".nav", { duration: 0.5, xPercent: -100, y: -20, display: "none", ease: Expo.easeOut });
    gsap.to(".mini-player", { duration: 0.5, x: 0, ease: Expo.easeOut });
  }

  // In the Music player navigation
  handleHomeClickActionBack = () => {
    //edit this to resume playback from initial play or start  playing..
    let homeToMain = gsap;

    if ($("#curator").css("display") === "block") {
      homeToMain.fromTo($(".curator_title_wrapper"), { opacity: 1, x: 0 }, { opacity: 0, x: 30, ease: Power2.easeInOut, duration: 0.5 })
      homeToMain.fromTo($(".curator_list"), { opacity: 1, display: "block", x: 0 }, { opacity: 0, x: 30, display: "none", ease: Power2.easeInOut, duration: 0.5 })
      homeToMain.to($("#curator"), { display: "none", ease: Power2.easeInOut, duration: 0.4 })
    }

    // Hide
    $("#astronomy, #anxiety, .back_btn").css("display", "none");
    //homeToMain.to( $(".back_btn"),{ display: "none" } );

    homeToMain.to($(".wave-container"), 1, { yPercent: 0, ease: Power2.easeInOut }, 1);
    // 	Show
    homeToMain.to($(".text-wrap"), { display: "flex", opacity: 1, y: 0, ease: Power2.easeInOut, duration: 1.3 },);
    homeToMain.to($(".logo-text, .line"), 0.5, { display: "block", opacity: 1, y: 0, ease: Power2.easeInOut }, 1.2);
    // 	Force to redraw by using y translate
    homeToMain.fromTo($(".text-wrap .text"), { y: 0.1, position: "absolute" }, { y: 0, position: "relative", ease: Power2.easeInOut, duration: 1.3 });
    homeToMain.to(".nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });

    homeToMain.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
    $(".logo-text").css("display", "block");
  }

  render() {
    return (
      <div className="container_fluid wrapper" id="wrapper">

        <div className='container_fluid'>
          <div className='row'>
            <div className='col-md-6'>
              {/* Header for the LIstners and home */}
              <div className="header">
                <div className="burger-wrapper" onClick={this.handlePlayerMenuAction}>
                  <div className="burger"></div>
                </div>
                <div className="logo-text">Listeners Playlist</div>
                <div className="back_btn" onClick={this.handleHomeClickActionBack}>
                  <div className="circle"></div>
                  <div className="text">Home</div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              {/* Mini Music */}
              <div className="mini-player" onClick={this.handleOpenMiniPlayer}>
                <div className="track_info_wrapper">
                  <div className="track_info">
                    <div className="thumb"></div>
                    <div className="info">
                      <div className="title">Magnifico</div>
                      <div className="artist">Toroyteach</div>
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

        {/* Weather 3D Canvas Component */}
        <div>
          <Weather />
        </div>

        {/* Waves and Audio Soectryum Visualizer Canvas Component */}
        <div>
          <Visualizer />
        </div>

        <div className="line"></div>

        <div className="text-wrap">
          <div className="text" onMouseEnter={this.handleMouseEnterTextHoverAction} onMouseLeave={this.handleMouseExitTextHoverAction}>
            <span>L</span><span>I</span><span>S</span><span>T</span><span>E</span><span>N</span>
            <div className="main-btn_wrapper" onClick={this.handleStartListeningAction}>
              <i className="main-btn fa fa-play" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        {/* Music Page Sub-Navbar Component */}
        <Navbar />

        <div className="dim" onClick={this.handlePlayerDimAction}></div>

        {/* Sliding in Music Player Component */}
        <div>
          <MainPlayer />
        </div>

        {/* this section Online Active Listeners Component*/}
        <div>
          <OnlineListeners />
        </div>

        {/* this section will have the calm your anxiety pictures */}
        <div>
          <CalmAnxiety />
        </div>

        {/* this section will host the astronomy picture of the day */}
        <div>
          <Astronomy />
        </div>

      </div>
    )
  }
}
