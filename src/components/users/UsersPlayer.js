import React from 'react';
import '../../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo, Elastic } from 'gsap';

class UsersPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      menus:['Home', 'Listners', 'Calm Your Anxiety', 'Astronomy Pic Day']
    }
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

    //handles opening of the mini player playlist
    handleOpenMiniPlayer = () => {
      let gsapAction = gsap;
      
      gsapAction.to(".dim", { duration:0.5, opacity: 1, display: "block", ease: Power2.easeInOut  });
      gsapAction.fromTo( "#player", { duration:0.5, xPercent: 100 }, { xPercent: 0, display: "block", ease: Expo.easeOut } );
      gsapAction.to(".mini-player", { duration:0.5, x: 50, ease: Expo.easeOut });
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

    //handles on mouse hover for mini player active song
    handleMouseEnterTrackInfo = () => {

      gsap.fromTo(  $(".track_info"), { duration:0.5, opacity: 0.5, ease: Power2.easeInOut },  { opacity: 1 });

      $(".track_info").css("opacity", "1");
    }

    handleMouseExitTrackInfo = () => {

    }

    //handles mouse on hover on Music player navigation icons
    handleMouseEnterBurgerLogoBackAction = () => {

      gsap.fromTo( $(".burger-wrapper, .logo-text, .back_btn"), { duration:0.5, opacity: 0.5, ease: Power2.easeInOut }, { opacity: 1 });

      $(".burger-wrapper, .logo-text, .back_btn").css("opacity", "1");
    }

    handleMouseExitBurgerLogoBackAction = () => {

    }
    

    //handles Music player navigation on hover
    handleNavAnchorOnMouseEnterAction = () => {

      gsap.fromTo( $(".a"), { duration:0.5, opacity: 0.5, ease: Power2.easeInOut }, { opacity: 1 });

      $(".a").css("opacity", "1");
    }

    handleNavAnchorOnMouseExitAction = () => {

    }

    //handles mause hover for active listeners
    handleListItemOnMouseEnterAction = () => {
      gsap.to($(".item"), {duration:0.5, y: -30, ease: Power2.easeInOut });
			$(".item").children(".thumb").addClass("shadow");
			$(".item").children(".connect_btn").addClass("shadow");
			gsap.to($(".item").children(".info"), {duration:0.5, opacity: 1,	ease: Power2.easeInOut	});

      gsap.to($(".item"), {duration:0.5, y: 0, ease: Power2.easeInOut });
			$(".item").children(".thumb").removeClass("shadow");
			$(".item").children(".connect_btn").removeClass("shadow");
			gsap.to($(".item").children(".info"), {duration:0.5, opacity: 0,	ease: Power2.easeInOut	});
    }

    handleListItemOnMouseExitAction = () => {

    }

    //handles the individual song list when clicked
    handleListItemClick = () => {
      $(".list_item").removeClass("selected");
      $(this).addClass("selected");
    }

    //handles active listeners on click
    handleListnersItemClick = () => {
      var mainToPlaylist = gsap.TimelineMax({});

      // Hide
      mainToPlaylist.to( $("#curator"), 0.8, { display: "none", opacity: 0, scale: 1.1, ease: Power2.easeInOut }, 0);
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

    //handling Shuffle, Replay, Volume, Equalizer, Visualizer, Like, Playlist and Download
    handleShuffleOnClickAction = () => {

    }

    handleReplayOnClickAction = () => {

    }

    handleToggleLikeOnClickAction = () => {
      //gsap.to($(".btn-heartOff"), 0.2, {  x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
      gsap.to($(".btn-heartOff"), { duration: 0.5, opacity: 1, ease: "back.out(1.7)", display: "none", x: 70 });
      gsap.fromTo( $(".btn-heartOn"), { x: -20, opacity: 0, scale: 0.3, display: "none" }, { duration: 0.5, x: 0, opacity: 1, scale: 1, display: "block", ease: "elastic.inOut(1, 0.3)", y: 6 } );
    }

    handlePlaylistOnClickAction = () => {

    }

    handleVolumeOnClickAction = () => {

    }

    handleEqualizerOnClickAction = () => {

    }

    handleVisualizerOnClickAction = () => {

    }

    handleDownloadOnClickAction = () => {

    }

    render(){
      return(
          <>
              <div className="wrapper">
                <div className="wave-container">
                  <div className="wave -one"></div>
                  <div className="wave -two"></div>
                  <div className="wave -three"></div>
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

                <div className="nav">
                  <ul className="nav_main">
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleHomeClickAction}>Home	</a></li>
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleListnersClickAction}>Listeners	</a></li>
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleAnxietyClickAction}>Calm Your Anxiety	</a></li>
                    <li> <a href="#anchor" className="nav_link a" onMouseEnter={this.handleNavAnchorOnMouseEnterAction} onMouseLeave={this.handleNavAnchorOnMouseExitAction} onClick={this.handleAstronomyClickAction}>Astronomy Pic of Day	</a></li>
                  </ul>
                </div>

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

              {/* this section will host the sliding in media player */}
              <div className="player" id="player">

                <div className="playback_wrapper">
                  
                  <div className="playback_blur"></div>
                  <div className="playback_thumb"></div>

                  <div className="playback_extras text_center">
                    <div className='icon btn-RepeatIcon'>
                      <i className="fa fa-repeat" aria-hidden="true" onClick={this.handleShuffleOnClickAction}></i>
                    </div>

                    <div className='icon btn-ShuffleIcon'>
                      <i className="fa fa-random" aria-hidden="true" onClick={this.handleReplayOnClickAction}></i>
                    </div>

                    <div className='icon btn-PlaylistIcon dropdown-toggle' data-toggle="dropdown">
                      <i className="fa fa-list-ol" aria-hidden="true"></i>
                      <div className='dropdown-menu playliststyle'>
                        <span class="dropdown-item-text">Choose Playlist</span>
                        <ul class="">
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Cheese
                            </label>
                          </li>
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Burger
                            </label>
                          </li>
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Pizza
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='icon btn-VolumeIcon dropleft dropdown-toggle' data-toggle="dropdown">
                      <i className="fa fa-volume-up" aria-hidden="true"></i>
                        <div class="volumeDropDown">
                            <div class="map-slider">
                              <div class="buttons">
                                <span class="fa fa-plus"></span>
                                  <div class="drag-line">
                                    <div class="line"></div> 
                                    <div class="draggable-button"></div>   
                                  </div>
                                  <div class="draggable-buton"></div>   
                                <span class="fa fa-minus"></span>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className='icon btn-LikeIcon'>
                      <i className="btn-heartOn fa fa-heart" aria-hidden="true"></i>
                      <i className="btn-heartOff fa fa-heart-o" aria-hidden="true" onClick={this.handleToggleLikeOnClickAction}></i>
                    </div>

                    <div className='icon btn-EqualizerIcon dropdown-toggle' data-toggle="dropdown">
                      <i className="fa fa-music" aria-hidden="true"></i>
                      <div className='dropdown-menu equalizerstyle'>
                        <span class="dropdown-item-text">Choose Equalizer</span>
                        <ul class="">
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Rock
                            </label>
                          </li>
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Bass
                            </label>
                          </li>
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Dance
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='icon btn-VisualizerIcon dropdown-toggle' data-toggle="dropdown">
                      <i className="fa fa-bar-chart" aria-hidden="true"></i>
                      <div className='dropdown-menu visualizerstyle'>
                        <span class="dropdown-item-text">Choose Visualizer</span>
                        <ul class="">
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Bars
                            </label>
                          </li>
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Circle
                            </label>
                          </li>
                          <li className='dropdown-item allow-focus' >
                            <label>
                              <input type="checkbox"/> Box
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='icon btn-DownloadIcon'>
                      <i className="fa fa-download" aria-hidden="true"></i>
                    </div>

                  </div>

                  <div className="playback_info">
                    <div className="title">Magnifico</div>
                    <div className="artist">Toroyteach</div>
                  </div>

                  <div className="">

                    <div className="p-2 playback_timeline">
                      <div className="playback_timeline_start-time">00:31</div>
                      <div className="playback_timeline_slider">
                        <div className="slider_base"></div>
                        <div className="slider_progress"></div>
                        <div className="slider_handle"></div>
                      </div>
                      <div className="playback_timeline_end-time">03:11</div>
                    </div>

                    <div className="p-2 playback_btn_wrapper">
                      <i className="btn-prev fa fa-step-backward" aria-hidden="true"></i>
                      <i className="btn-prev fa fa-reply" aria-hidden="true"></i>

                      <div className="btn-switch">
                        <i className="btn-play fa fa-play" aria-hidden="true" onClick={this.handlePlayAction}></i>
                        <i className="btn-pause fa fa-pause" aria-hidden="true" onClick={this.handlePauseAction}></i>
                      </div>

                      <i className="btn-next fa fa-share" aria-hidden="true"></i>
                      <i className="btn-next fa fa-step-forward" aria-hidden="true"></i>
                      <i className="btn-next fa fa-stop" aria-hidden="true"></i>
                    </div>

                  </div>

                </div>

                <div className="list_wrapper">
                  <ul className="list"> 
                    <li className="list_item selected" onClick={this.handleListItemClick}> 
                      <div className="thumb"> </div>
                      <div className="info"> 
                        <div className="title">QuePasa</div>
                        <div className="artist">Toroyteach</div>
                      </div>
                    </li>
                    <li className="list_item" onClick={this.handleListItemClick}> 
                      <div className="thumb"> </div>
                      <div className="info"> 
                        <div className="title">SwitchBack</div>
                        <div className="artist">Toroyteach</div>
                      </div>
                    </li>
                    <li className="list_item" onClick={this.handleListItemClick}> 
                      <div className="thumb"> </div>
                      <div className="info"> 
                        <div className="title">Mamba</div>
                        <div className="artist">Toroyteach</div>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>

              {/* this section will show active users listening */}
              <div className="page" id="curator">
                <div className="curator_title_wrapper"><span>LP</span>
                  <div className="curator_line"></div>
                  <div className="curator_title">Listeners</div>
                  <div className="curator_line"></div><span>14</span>
                </div>

                <div className="curator_list">
                  <div className="curator_list_content">
                    <div className="connect_btn_wrapper item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="connect_btn">
                        <div className="connect_btn_text">Connect <br/>SoundCloud</div>
                      </div>
                    </div>

                    <div className="curator_list_content_desc">Or Select <br/>a Listener of <br/>L.P.			</div>

                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* this section will have the calm your anxiety pictures */}
              <div className="anxiety" id="anxiety">

                <video loop autoPlay width="100%" height="auto" controls>
                  <source src="https://www.datocms-assets.com/22581/1603987602-videezy-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>

              {/* this section will host the astronomy picture of the day */}
              <div className='astronomy' id='astronomy'>

              </div>

            </div>
          </>
      );
    }
}

export default UsersPlayer;