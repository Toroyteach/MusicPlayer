import React, { useState, useRef, useContext } from 'react'

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

//import necessary files to make state and context consistent
import appContext from '../context/appContext.js'

//import the reducer function states to make consistent states
import {

  SET_TOGGLE_PLAYING

} from '../context/appState/stateTypes';

export default function Footer() {

  // Global State
  const {
    userData: {
      username,
    },
    currentSong,
    nextMix,
    prevMix,
    playing,
    activePlaylist,
    handleEndOfMix,
    dispatch,
  } = useContext(appContext)

  const audio = useRef('audio_tag')

  //handles play pause button state
  const [isPlaying, setPlayPause] = useState(playing);

  //handles the actual playing and changing of the play pause buttons
  const togglePlaying = () => {

    if (isPlaying) {

      //playing
      setPlayPause(false)
      dispatch({ type: SET_TOGGLE_PLAYING, data: false })
      audio.current.pause()

      gsap.to($(".btn-pause"), { duration: 0.5, x: 20, opacity: 0, display: "none", scale: 0.3, ease: Power2.easeInOut });
      gsap.fromTo($(".btn-play"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut });


    } else {

      //paused
      setPlayPause(true)
      dispatch({ type: SET_TOGGLE_PLAYING, data: true })
      audio.current.play()

      gsap.to($(".btn-play"), { duration: 0.5, x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
      gsap.fromTo($(".btn-pause"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut });


    }

  }

  //toggles the audio state to playing from pause or vice
  //const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause()


  return (
    <>
      <footer className="footer py-4  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">

            <div className="col-lg-6 mb-lg-0 mb-4 col-md-6 col-sm-12">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                ©
                Created with <i className="fa fa-heart"></i> by
                <a href="https://bellenorthedynamics.com" className="font-weight-bold" target="_blank" rel="noreferrer"> Toroyteach </a>
                for a cool { username }.
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">

              <audio onEnded={handleEndOfMix} ref={audio} type="audio/mpeg" preload="true" src={activePlaylist[currentSong].fileUrl} />

              {/* Mini Music */}
              <div className="mini-player-footer">

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

                  <i className="btn-prev fa fa-step-backward" aria-hidden="true" onClick={prevMix}></i>

                  <div className="btn-switch" onClick={togglePlaying}>
                    <i className="btn-play fa fa-play" aria-hidden="true"></i>
                    <i className="btn-pause fa fa-pause" aria-hidden="true" ></i>
                  </div>

                  <i className="btn-next fa fa-step-forward" aria-hidden="true" onClick={nextMix}></i>

                </div>

                <div className='btn-VolumeIcon' >
                  <i className="cursor-pointer fa fa-volume-up" aria-hidden="true"></i>
                  <div className="volumeDropDown ">
                    <input type="range" orient="vertical" name="volBar" id="volBar" />
                  </div>
                </div>

                <div className='btn-ShazamIcon' >
                  <i className="cursor-pointer fa fa-search-plus" aria-hidden="true"></i>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* <Toast onClose={() => this.setState({ show: false })} show={this.state.show} delay={3000} autohide>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>

                <Button onClick={() => this.updateMusicToast()}>Show Toast</Button> */}

      </footer>
    </>
  )
}
