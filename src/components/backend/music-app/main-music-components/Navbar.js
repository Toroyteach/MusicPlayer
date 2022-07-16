import React from 'react'

import '../../../../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo } from 'gsap';

export default function Navbar() {

  // In the Music player navigation
  const handleHomeClickAction = ({ currentTarget }) => {
    //edit this to resume playback from initial play or start  playing..
    let homeToMain = gsap;

    // Hide
    $("#astronomy, #anxiety, #curator").css("display", "none");
    homeToMain.to($(".back_btn"), { display: "none", opacity: 0, x: 15, ease: Power2.easeInOut, duration: 0.2 });

    homeToMain.to($(".wave-container"), 1, { yPercent: 0, ease: Power2.easeInOut }, 1);
    // 	Show
    homeToMain.to($(".text-wrap"), 0.5, { display: "flex", opacity: 1, y: 0, ease: Power2.easeInOut }, 2.2);

    homeToMain.to($(".logo-text, .line"), 0.5, { display: "block", opacity: 1, y: 0, ease: Power2.easeInOut }, 1.2);
    // 	Force to redraw by using y translate
    homeToMain.fromTo($(".text-wrap .text"), { y: 0.1, position: "absolute" }, { y: 0, position: "relative", ease: Power2.easeInOut, duration: 2.3 });

    homeToMain.to(".nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });

    homeToMain.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
    $(".logo-text").css("display", "block");
  }

  const handleListnersClickAction = ({ currentTarget }) => {
    //edit this to resume playback from initial play or start  playing..
    let homeToMain = gsap;

    // Hide
    $("#astronomy, #anxiety").css("display", "none");
    //$(".logo-text").css("display", "none");
    homeToMain.to($(".line, .text-wrap, .logo-text"), 0.5, { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut }, 0);
    // Background down
    homeToMain.to($(".wave-container"), 1, { yPercent: 30, ease: Power2.easeInOut }, 0);
    // Show
    $("#curator").css("display", "block");
    homeToMain.fromTo($(".back_btn"), { opacity: 0, x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut, duration: 2.0 });

    homeToMain.fromTo($(".curator_title_wrapper"), { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut, duration: 2.0 });

    homeToMain.fromTo($(".curator_list"), { opacity: 0, display: "none", x: 30 }, { opacity: 1, x: 0, display: "block", ease: Power2.easeInOut, duration: 2.0 });

    homeToMain.to(".nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });

    homeToMain.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
  }

  const handleAnxietyClickAction = ({ currentTarget }) => {
    //edit this to resume playback from initial play or start  playing..
    let homeToMain = gsap;

    // Hide

    homeToMain.to($(".line, .text-wrap, .logo-text"), 0.5, { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut }, 0);
    // Background down
    homeToMain.to($(".wave-container"), 1, { yPercent: 50, ease: Power2.easeOut }, 0);
    // Show
    homeToMain.fromTo($(".back_btn"), { x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut, duration: 1 });

    homeToMain.to(".nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });

    homeToMain.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });

    //homeToMain.to( $("#astronomy, #curator"),{ duration:0.2, display: "none", opacity: 0, y: -20, ease: Power2.easeInOut });

    // homeToMain.to( $("#anxiety"), {duration:5, display: "block", ease: Power2.easeInOut });

    $("#astronomy, #curator").css("display", "none");

    $("#anxiety").css("display", "block");
  }

  const handleAstronomyClickAction = ({ currentTarget }) => {
    //edit this to resume playback from initial play or start  playing..
    let homeToMain = gsap;

    // Hide
    $("#anxiety, #curator").css("display", "none");
    $(".logo-text").css("display", "none");
    homeToMain.to($(".line, .text-wrap"), 0.5, { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut }, 0);
    // Background down
    homeToMain.to($(".wave-container"), 1, { yPercent: 50, ease: Power2.easeOut }, 0);
    // Show
    homeToMain.fromTo($(".back_btn"), { x: 15 }, { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut, duration: 1 });

    homeToMain.to(".nav", { duration: 0.5, xPercent: -100, display: "none", ease: Expo.easeOut });

    homeToMain.to(".dim", { duration: 0.5, opacity: 0, display: "none", ease: Power2.easeInOut });
    $("#astronomy").css("display", "block");
  }

  return (
    <div className="nav">
      <ul className="nav_main">
        <li> <a href="#anchor" className="nav_link a" onClick={handleHomeClickAction}>Home	</a></li>
        <li> <a href="#anchor" className="nav_link a" onClick={handleListnersClickAction}>Listeners	</a></li>
        <li> <a href="#anchor" className="nav_link a" onClick={handleAnxietyClickAction}>Calm Your Anxiety	</a></li>
        <li> <a href="#anchor" className="nav_link a" onClick={handleAstronomyClickAction}>Astronomy Pic of Day	</a></li>
      </ul>
    </div>
  )
}
