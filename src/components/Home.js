import React, { PureComponent } from 'react'

import '../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo, Elastic } from 'gsap';

// components
import MainPlayer from './main-music-components/MainPlayer';
import Navbar from './main-music-components/Navbar';
// import Weather from'./main-music-components/Weather';
import Visualizer from './sub-components/Visualizer';
// import SongQuiz from './sub-components/SongQuiz';
import Astronomy from './child-components/Astronomy';
import CalmAnxiety from './child-components/CalmAnxiety';
import OnlineListeners from './child-components/OnlineListeners';

export default class Home extends PureComponent {

    //handles play of the music player
    handlePlayAction = () => {
        gsap.to($(".btn-play"), {duration:0.5,  x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
        gsap.fromTo( $(".btn-pause"), {duration:0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut } );
      }
      //handles pause of the music player
      handlePauseAction = () => {
        gsap.to($(".btn-pause"), {duration:0.5, x: 20, opacity: 0, display: "none", scale: 0.3, ease: Power2.easeInOut });
        gsap.fromTo( $(".btn-play"), {duration:0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut }
        );
      }
  
      //handles mouse on hover of the text "LISTEN"
      handleMouseEnterTextHoverAction = () => {
        gsap.to($(".main-btn_wrapper"), 0.5, {duration:0.5,  opacity: 1,  display: "block",  position: "absolute",  scale: 1,  ease: Elastic.easeOut.config(1, 0.75)});
        gsap.to($(".line"), 0.5, {duration:0.5, css: { scaleY: 0.6, transformOrigin: "center center" }, ease: Expo.easeOut });
      }
      
      handleMouseExitTextHoverAction = () => {
          gsap.to($(".main-btn_wrapper"), 0.5, {duration:0.5,  opacity: 0,  display: "none",  scale: 0,  ease: Elastic.easeOut.config(1, 0.75)});
          gsap.to($(".line"), 0.5, {duration:0.5, css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut });
      }
  
      //handles the main play button in the middle
      handleStartListeningAction = () => {
        //edit this to resume playback from initial play or start  playing..
        let homeToMain = gsap;
  
        // Hide
        $(".logo-text").css("display", "none");
          homeToMain.to( $(".line, .text-wrap"), 0.5, { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut }, 0 );
          // Background down
          homeToMain.to(  $(".wave-container"), 1, { yPercent: 30, ease: Power2.easeInOut }, 0 );
          // Show
          $("#curator").css("display", "block");
          homeToMain.fromTo( $(".back_btn"), 0.8, { x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut }, 1 );
          homeToMain.fromTo( $(".curator_title_wrapper"), 0.8, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, 1);
          homeToMain.fromTo( $(".curator_list"), 0.8, { opacity: 0, display: "none", x: 30 }, { opacity: 1, x: 0, display: "block", ease: Power2.easeInOut }, 1.2);
      }

        //handles opening of the navigation bar
        handlePlayerMenuAction = () => {
            // ===== Toggle the oppening and closing of the users nav bar
        let gsapAction = gsap; 
        if ($(".nav").css("display") === "none") {
            gsapAction.to(".dim", { duration:0.5, opacity: 1, display: "block", ease: Power2.easeInOut });
            gsapAction.fromTo(".nav", {duration:0.5, xPercent: -100 },  { xPercent: 0, display: "block", ease: Expo.easeOut } );
            gsapAction.staggerTo( ".nav li", {duration:0.5, opacity: 0, y: 20, ease: Power2.easeInOut }, 0.1 );
        
            $(".logo-text").css({ opacity: "0", display: "none" });

        } else if ( $(".nav").css("display") === "block" && $("#curator").css("display") === "block") {
            gsapAction.to(".dim", {duration:0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
            gsapAction.to(".nav", {duration:0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
            // $('.logo-text').css({'opacity': '1', 'display': 'block'});
        } else {
            gsapAction.to(".dim", { duration:0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
            gsapAction.to(".nav", { duration:0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
            $(".logo-text").css({ opacity: "1", display: "block" });
        }
      }

        //handles mouse on hover on Music player navigation icons
        handleMouseEnterBurgerLogoBackAction = () => {

            gsap.fromTo( $(".burger-wrapper, .logo-text, .back_btn"), { duration:0.5, opacity: 0.5, ease: Power2.easeInOut }, { opacity: 1 });
      
            $(".burger-wrapper, .logo-text, .back_btn").css("opacity", "1");
          }
      
          handleMouseExitBurgerLogoBackAction = () => {
      
        }

            //handles opening of the mini player playlist
    handleOpenMiniPlayer = () => {
        let gsapAction = gsap;
        
        gsapAction.to(".dim", { duration:0.5, opacity: 1, display: "block", ease: Power2.easeInOut  });
        gsapAction.fromTo( "#player", { duration:0.5, xPercent: 100 }, { xPercent: 0, display: "block", ease: Expo.easeOut } );
        gsapAction.to(".mini-player", { duration:0.5, x: 50, ease: Expo.easeOut });
      }

        //handles on mouse hover for mini player active song
        handleMouseEnterTrackInfo = () => {

            gsap.fromTo(  $(".track_info"), { duration:0.5, opacity: 0.5, ease: Power2.easeInOut },  { opacity: 1 });
      
            $(".track_info").css("opacity", "1");
          }

        handleMouseExitTrackInfo = () => {

        }

        //handles mouse hover on the mini player list
        handleMiniPlayerOnMouseEnterAction = () => {
            gsap.fromTo( $(".btn-open-player"), {duration:0.5, opacity: 0.5, ease: Power2.easeInOut }, { opacity: 1 } );
            $(".btn-open-player").css("opacity", "1");
          }
      
          handleMiniPlayerOnMouseExitAction = () => {
      
          }

        //handles stopping the dim and also retracting the navigation and other tool bar
        handlePlayerDimAction = () => {
            gsap.to(".dim", 0.5, { opacity: 0, display: "none", ease: Power2.easeInOut });
            gsap.to("#player", 0.5, { xPercent: 100, display: "none", ease: Expo.easeOut });
            gsap.to(".nav", 0.5, { xPercent: -100, display: "none", ease: Power2.easeInOut });
            gsap.to(".mini-player", 0.5, { x: 0, ease: Expo.easeOut });
          }

        // In the Music player navigation
        handleHomeClickAction = () => {
            //edit this to resume playback from initial play or start  playing..
            let homeToMain = gsap;
      
            // Hide
            $("#astronomy, #anxiety, #curator").css("display", "none");
            homeToMain.to( $(".back_btn"), 0.5, { display: "none", opacity: 0, x: 15, ease: Power2.easeInOut }, 0.5 );
            homeToMain.to( $(".wave-container"), 1, { yPercent: 0, ease: Power2.easeInOut }, 1 );
              // 	Show
            homeToMain.to(  $(".text-wrap"),  0.5,  { display: "flex", opacity: 1, y: 0, ease: Power2.easeInOut },  1.2 );
            homeToMain.to( $(".logo-text, .line"), 0.5, { display: "block", opacity: 1, y: 0, ease: Power2.easeInOut }, 1.2 );
              // 	Force to redraw by using y translate
            homeToMain.fromTo( $(".text-wrap .text"), 0.1, { y: 0.1, position: "absolute" }, { y: 0, position: "relative", ease: Power2.easeInOut }, 1.3 );
            homeToMain.to(".nav", {duration:0.5, xPercent: -100, display: "none", ease: Expo.easeOut});
      
            homeToMain.to(".dim", {duration:0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
              $(".logo-text").css("display", "block");
          }


  render() {
    return (
        <div>
            <div className="wrapper">

                {/* Weather 3D Canvas Component */}
                <div>
                  
                </div>

                {/* Waves and Audio Soectryum Visualizer Canvas Component */}
                <div>
                  <Visualizer/>
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
              
                <div className="header">
                  <div className="burger-wrapper" onClick={this.handlePlayerMenuAction} onMouseEnter={this.handleMouseEnterBurgerLogoBackAction} onMouseLeave={this.handleMouseExitBurgerLogoBackAction}>
                    <div className="burger"></div>
                  </div>
                  <div className="logo-text" onMouseEnter={this.handleMouseEnterBurgerLogoBackAction} onMouseLeave={this.handleMouseExitBurgerLogoBackAction}>Listeners Playlist</div>
                  <div className="back_btn" onClick={this.handleHomeClickAction} onMouseEnter={this.handleMouseEnterBurgerLogoBackAction} onMouseLeave={this.handleMouseExitBurgerLogoBackAction}>
                    <div className="circle"></div>
                    <div className="text">Home</div>
                  </div>
                </div>

                {/* Music Page Sub-Navbar Component */}
                <div>
                    <Navbar/>
                </div>

                {/* Mini Music */}
                <div className="mini-player">
                  <div className="track_info_wrapper">
                    <div className="track_info" onClick={this.handleOpenMiniPlayer} onMouseEnter={this.handleMouseEnterTrackInfo} onMouseLeave={this.handleMouseExitTrackInfo}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="title">Magnifico</div>
                        <div className="artist">Toroyteach</div>
                      </div>
                    </div>
                  </div>
                  <div className="mini-player_btn_wrapper"><i className="btn-prev fa fa-step-backward" aria-hidden="true"></i>
                    <div className="btn-switch">
                      <i className="btn-play fa fa-play" aria-hidden="true" onClick={this.handlePlayAction}></i>
                      <i className="btn-pause fa fa-pause" aria-hidden="true" onClick={this.handlePauseAction}></i>
                    </div>
                    <i className="btn-next fa fa-step-forward" aria-hidden="true"></i>
                    <i className="btn-open-player fa fa-list" aria-hidden="true" onClick={this.handleOpenMiniPlayer} onMouseEnter={this.handleMiniPlayerOnMouseEnterAction} onMouseLeave={this.handleMiniPlayerOnMouseExitAction}></i>
                  </div>
                </div>

              <div className="dim" onClick={this.handlePlayerDimAction}></div>

              {/* Sliding in Music Player Component */}
              <div>
                    <MainPlayer/>
              </div>

              {/* this section Online Active Listeners Component*/}
              <div>
                    <OnlineListeners/>
              </div>

              {/* this section will have the calm your anxiety pictures */}
              <div>
                    <CalmAnxiety/>
              </div>

              {/* this section will host the astronomy picture of the day */}
              <div>
                    <Astronomy/>
              </div>


            </div>
        </div>
    )
  }
}
