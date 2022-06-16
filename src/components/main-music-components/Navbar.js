import React, { PureComponent } from 'react'

import '../../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo } from 'gsap';

export default class Navbar extends PureComponent {

    //handles Music player navigation on hover
    handleNavAnchorOnMouseEnterAction = () => {

      gsap.fromTo( $(".a"), { duration:0.5, opacity: 0.5, ease: Power2.easeInOut }, { opacity: 1 });

      $(".a").css("opacity", "1");
    }

    handleNavAnchorOnMouseExitAction = () => {

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

    handleListnersClickAction = () => {
      //edit this to resume playback from initial play or start  playing..
      let homeToMain = gsap;

      // Hide
      $("#astronomy, #anxiety").css("display", "none");
           $(".logo-text").css("display", "none");
      homeToMain.to( $(".line, .text-wrap"), 0.5, { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut }, 0 );
             // Background down
      homeToMain.to( $(".wave-container"), 1, { yPercent: 30, ease: Power2.easeInOut }, 0 );
             // Show
      $("#curator").css("display", "block");
      homeToMain.fromTo( $(".back_btn"), 0.8, { x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut }, 1 );
      homeToMain.fromTo( $(".curator_title_wrapper"), 0.8, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, 1 );
      homeToMain.fromTo( $(".curator_list"), 0.8, { opacity: 0, display: "none", x: 30 }, { opacity: 1, x: 0, display: "block", ease: Power2.easeInOut }, 1.2 ); 

      homeToMain.to(".nav", {duration:0.5, xPercent: -100, display: "none", ease: Expo.easeOut });

      homeToMain.to(".dim", {duration:0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
    }

    handleAnxietyClickAction = () => {
           //edit this to resume playback from initial play or start  playing..
      let homeToMain = gsap;

           // Hide
      $("#astronomy, #curator").css("display", "none");
      $(".logo-text").css("display", "none");
      homeToMain.to( $(".line, .text-wrap"), 0.5, { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut }, 0 );
             // Background down
      homeToMain.to( $(".wave-container"), 1, { yPercent: 50, ease: Power2.easeOut }, 0 );
             // Show
      homeToMain.fromTo( $(".back_btn"), 0.8, { x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut }, 1  );
                   
      homeToMain.to(".nav", {duration:0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
                    
      homeToMain.to(".dim", {duration:0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
      $("#anxiety").css("display", "block");
    }

    handleAstronomyClickAction = () => {
           //edit this to resume playback from initial play or start  playing..
      let homeToMain = gsap;

           // Hide
      $("#anxiety, #curator").css("display", "none");
      $(".logo-text").css("display", "none");
      homeToMain.to(  $(".line, .text-wrap"),  0.5,  { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut },  0 );
             // Background down
      homeToMain.to( $(".wave-container"), 1, { yPercent: 50, ease: Power2.easeOut }, 0 );
             // Show
      homeToMain.fromTo( $(".back_btn"), 0.8, { x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut }, 1 );
                   
      homeToMain.to(".nav", {duration:0.5, xPercent: -100, display: "none", ease: Expo.easeOut });
                    
      homeToMain.to(".dim", {duration:0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
      $("#astronomy").css("display", "block");
    }
    
  render() {
    return (
      <div>
                <div className="nav">
                  <ul className="nav_main">
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleHomeClickAction}>Home	</a></li>
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleListnersClickAction}>Listeners	</a></li>
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleAnxietyClickAction}>Calm Your Anxiety	</a></li>
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleAstronomyClickAction}>Astronomy Pic of Day	</a></li>
                  </ul>
                </div>
      </div>
    )
  }
}
