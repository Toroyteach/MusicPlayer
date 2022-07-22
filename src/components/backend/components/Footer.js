import React, { useState, useRef, useContext } from 'react'

import { Link } from 'react-router-dom';

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

//import necessary files to make state and context consistent
import appContext from '../context/appContext.js'

import '../../../assets/backend/css/style.css';

//import the reducer function states to make consistent states
import {

  SET_TOGGLE_PLAYING,
  SET_CURRENT_SONG,
  SET_VOLUME

} from '../context/appState/stateTypes';

export default function Footer() {

  // Global State
  const {
    userData: {
      username,
    },
    currentSong,
    playing,
    activePlaylist,
    stateDispatch,
    random,
    volume,
  } = useContext(appContext)

  //handles the actual playing and changing of the play pause buttons
  const playAndPause = () => {

    stateDispatch({ type: SET_TOGGLE_PLAYING, data: playing ? false : true })

    if (playing) {

      //sets the pause button to show
      gsap.to($(".btn-pause"), { duration: 0.5, x: 20, opacity: 0, display: "none", scale: 0.3, ease: Power2.easeInOut });
      gsap.fromTo($(".btn-play"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut });


    } else {

      //sets the play button to show
      gsap.to($(".btn-play"), { duration: 0.5, x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
      gsap.fromTo($(".btn-pause"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut });

    }

  }

  //method to handle dispatching and handling playing the next song
  const nextMixItem = () => {

    if (currentSong === activePlaylist.length - 1) {

      stateDispatch({ type: SET_CURRENT_SONG, data: 0 })

    } else if (random) {

      stateDispatch({ type: SET_CURRENT_SONG, data: Math.floor(Math.random() * activePlaylist.length) })

    } else {

      stateDispatch({ type: SET_CURRENT_SONG, data: currentSong + 1 })
    }

  }

  //function to handle dispatching previous song
  const prevMixItem = () => {

    if (currentSong === 0) {

      stateDispatch({ type: SET_CURRENT_SONG, data: activePlaylist.length - 1 })

    } else {

      stateDispatch({ type: SET_CURRENT_SONG, data: currentSong - 1 })

    }

  }

  // self State
  const handleVolume = (e) => stateDispatch({ type: SET_VOLUME, data: e })


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
                for a cool {username}.
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">

              {/* Mini Music */}
              <div className="mini-player-footer">

                <Link to="/single">
                  <div className="track_info_wrapper">
                    <div className="track_info">
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="title ">{activePlaylist[currentSong].title}</div>
                        <div className="artist ">{activePlaylist[currentSong].artistName}</div>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="mini-player_btn_wrapper">

                  <i className="btn-prev fa fa-step-backward footerPlayer" aria-hidden="true" onClick={prevMixItem}></i>

                  <div className="btn-switch" onClick={playAndPause}>
                    <i className="btn-play fa fa-play footerPlayer" aria-hidden="true"></i>
                    <i className="btn-pause fa fa-pause footerPlayer" aria-hidden="true" ></i>
                  </div>

                  <i className="btn-next fa fa-step-forward footerPlayer" aria-hidden="true" onClick={nextMixItem}></i>

                </div>

                <div className='btn-VolumeIcon' >
                  <i className="cursor-pointer fa fa-volume-up" aria-hidden="true"></i>
                  <div className="volumeDropDown ">
                    <input type="range" orient="vertical" name="volBar" id="volBar" value={Math.round(volume * 100)} onChange={(e) => handleVolume(e.target.value / 100)} />
                  </div>
                </div>

                <div className='btn-ShazamIcon' >
                  <i className="cursor-pointer fa fa-search-plus" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Identify"></i>
                </div>

              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
