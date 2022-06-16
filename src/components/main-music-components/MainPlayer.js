import React, { PureComponent } from 'react'

import '../../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo, Elastic } from 'gsap';

export default class MainPlayer extends PureComponent {


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


  render() {
    return (
      <div>
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
                                <span className="dropdown-item-text">Choose Playlist</span>
                                <ul className="">
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
                                <div className="volumeDropDown">
                                    <div className="map-slider">
                                      <div className="buttons">
                                        <span className="fa fa-plus"></span>
                                          <div className="drag-line">
                                            <div className="line"></div> 
                                            <div className="draggable-button"></div>   
                                          </div>
                                          <div className="draggable-buton"></div>   
                                        <span className="fa fa-minus"></span>
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
                                <span className="dropdown-item-text">Choose Equalizer</span>
                                <ul className="">
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
                                <span className="dropdown-item-text">Choose Visualizer</span>
                                <ul className="">
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
      </div>
    )
  }
}
