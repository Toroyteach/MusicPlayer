import React, { useState, useEffect, useRef, useContext } from 'react'

import '../../../../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2, Expo, Elastic } from 'gsap';

//import necessary files to make state and context consistent
import appContext from '../../context/appContext'

export default function MainPlayer() {

  // Global State
  const {
    currentSong,
    songs,
    nextMix,
    prevMix,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEndOfMix,
    activePlaylist,
    SetCurrent,
  } = useContext(appContext)

  const audio = useRef('audio_tag')

  // self State
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  //converts the tome to more understandable format
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  //toggles the audio state to playing from pause or vice
  const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause()

  //handles and enables moving the seek to move the audio to desired timeline
  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

  //handle go back 30sec
  const handleback30 = () => {

    let time = audio.current.currentTime - 30
    setCurrentTime(time)
    audio.current.currentTime = time

  }

  //handle forward 1 minute
  const handleForward1Minute = () => {

    let time = audio.current.currentTime + 60
    setCurrentTime(time)
    audio.current.currentTime = time

  }

  //handle toggling of full screen
  const [fullscreen, setFullscreen] = useState(false);
  //const fullscreenIcon = useRef(fullscreenIcon);
  const handleGoingFullScreen = () => {

    var element = document.querySelector("#wrapper");

    if (element.requestFullscreen()) {

      element.requestFullscreen()
        .then(function () {
          // element has entered fullscreen mode successfully
        })
        .catch(function (error) {
          // element could not enter fullscreen mode
          // error message
          console.log(error.message);
        });

    } else {

      element.exitFullscreen()
        .then(function () {
          // element has entered fullscreen mode successfully
        })
        .catch(function (error) {
          // element could not enter fullscreen mode
          // error message
          console.log(error.message);
        });

    }
  }

  //handles play pause button state
  const [isPlaying, setPlayPause] = useState(playing);
  //handles the actual playing and changing of the play pause buttons
  const handlePlayPause = () => {

    if (isPlaying) {

      //playing
      setPlayPause(false)
      //dispatch({ type: SET_TOGGLE_PLAYING, data: false })
      //togglePlaying()
      audio.current.pause()

      gsap.to($(".btn-pause"), { duration: 0.5, x: 20, opacity: 0, display: "none", scale: 0.3, ease: Power2.easeInOut });
      gsap.fromTo($(".btn-play"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut });


    } else {

      //paused
      setPlayPause(true)
      //dispatch({ type: SET_TOGGLE_PLAYING, data: true })
      //togglePlaying()
      audio.current.play()

      gsap.to($(".btn-play"), { duration: 0.5, x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
      gsap.fromTo($(".btn-pause"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut });


    }

  }

  //handle favourite icon active or not
  const [isLiked, setLiked] = useState(false)
  //handle when user clicks the favourite button
  const handleLikeMixItem = () => {

    if (isLiked) {

      setLiked(false)
      gsap.to($(".btn-heartOn"), { x: 0, opacity: 0, scale: 0.3, display: "none" });
      gsap.fromTo($(".btn-heartOff"), { duration: 0.2, opacity: 1, display: "none", x: 10 }, { x: 0, y: 10, duration: 0.2, opacity: 1, display: "block" });

    } else {

      setLiked(true)
      gsap.to($(".btn-heartOff"), { duration: 0.5, opacity: 1, display: "none", x: 70 });
      gsap.fromTo($(".btn-heartOn"), { x: -20, opacity: 0, scale: 0.3, display: "none" }, { duration: 0.5, x: 0, opacity: 1, scale: 1, display: "block", ease: "elastic.inOut(1, 0.3)", y: 6 });

    }
  }

  //handle Random icon active or not
  const [isRandom, setRandom] = useState(random)
  //handle when user clicks the Random button
  const handleRandomClick = () => {

    if (isRandom) {
      setRandom(false)
    } else {
      setRandom(true)
    }

    toggleRandom()
  }

  //handle Replay icon active or not
  const [isReplay, setReplay] = useState(repeat)
  //handle when user clicks the Replay button
  const handleReplayMixItem = () => {

    if (isReplay) {
      setReplay(false)
    } else {
      setReplay(true)
    }

    toggleRepeat()
  }

  //handle when user wants to change the playlist
  const [isFavPlaylist, setFavPlaylist] = useState("default")
  //handle when user clicks the Select Playlist button
  const handleChooseFavPlaylist = () => {

    if (isFavPlaylist != "default") {

      setFavPlaylist('default')

    } else {

      setFavPlaylist('fav')

    }
  }

  //handle visualizer spectrum choice
  const [isVisualizer, setVisualizer] = useState("default")
  //handle when user clicks the Select Playlist button
  const handleChooseVisualizer = () => {

    if (isFavPlaylist != "default") {

      setVisualizer('default')

    } else {

      setVisualizer('bars')

    }
  }



  useEffect(() => {
    audio.current.volume = statevolum
    if (playing) {
      toggleAudio()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])

  return (
    <div>
      {/* this section will host the sliding in media player */}
      <div className="player" id="player">

        <div className="playback_wrapper">

          <div className="playback_blur"></div>
          <div className="playback_thumb"></div>

          <div className="playback_extras text_center">

            <div className='icon btn-RepeatIcon'>
              <i className={'cursor-pointer fa fa-repeat ' + (repeat ? 'activeIcons' : '')} aria-hidden="true" onClick={handleReplayMixItem}></i>
            </div>

            <div className='icon btn-ShuffleIcon'>
              <i className={'cursor-pointer fa fa-random ' + (random ? 'activeIcons' : '')} aria-hidden="true" onClick={handleRandomClick}></i>
            </div>

            <div className='icon btn-PlaylistIcon dropdown-toggle' data-toggle="dropdown">
              <i className="cursor-pointer fa fa-list-ol" aria-hidden="true"></i>
              <div className='dropdown-menu playliststyle'>
                <span className="dropdown-item-text">Choose Playlist</span>
                <ul className="">
                  <li className='dropdown-item allow-focus selected' >
                    <label>
                      <option value="1">Default</option>
                    </label>
                  </li>
                  <li className='dropdown-item allow-focus' >
                    <label>
                      <option value="1">Favourites</option>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className='icon btn-LikeIcon' onClick={handleLikeMixItem}>
              <i className="cursor-pointer btn-heartOn fa fa-heart" aria-hidden="true"></i>
              <i className="cursor-pointer btn-heartOff fa fa-heart-o" aria-hidden="true"></i>
            </div>

            <div className='icon btn-EqualizerIcon  '>
              <i className="cursor-pointer fa fa-expand" aria-hidden="true" onClick={handleGoingFullScreen}></i>
            </div>

            <div className='icon btn-VisualizerIcon dropdown-toggle' data-toggle="dropdown">
              <i className="cursor-pointer fa fa-bar-chart" aria-hidden="true"></i>
              <div className='dropdown-menu visualizerstyle'>
                <span className="dropdown-item-text">Choose Visualizer</span>
                <ul class="">
                  <li className='selected'><a class="dropdown-item" href="#">Default</a></li>
                  <li><a class="dropdown-item" href="#">Bars</a></li>
                </ul>
              </div>
            </div>

            <div className='icon btn-DownloadIcon'>
              <i className="cursor-pointer fa fa-download" aria-hidden="true"></i>
            </div>

          </div>

          <div className="playback_info">
            <div className="title">{activePlaylist[currentSong].title}</div>
            <div className="artist">{activePlaylist[currentSong].artistName}</div>
          </div>

          <div className="">

            <audio onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
              onCanPlay={(e) => setDur(e.target.duration)}
              onEnded={handleEndOfMix}
              ref={audio}
              type="audio/mpeg"
              preload="true"
              src={activePlaylist[currentSong].fileUrl}
            />

            <div className="p-2 playback_timeline">
              <div className="playback_timeline_start-time">{fmtMSS(currentTime)}</div>

              <div className="playback_timeline_slider">
                <input onChange={handleProgress} value={dur ? (currentTime * 100) / dur : 0} type="range" name="progresBar" id="prgbar" style={{ width: "100%" }} />
              </div>

              <div className="playback_timeline_end-time">{fmtMSS(dur)}</div>
            </div>

            <div className="p-2 playback_btn_wrapper">

              <i className="btn-prev fa fa-step-backward" aria-hidden="true" onClick={prevMix}></i>
              <i className="btn-prev fa fa-reply" aria-hidden="true" onClick={handleback30}></i>

              <div className="btn-switch" onClick={handlePlayPause}>
                <i className="btn-play fa fa-play" aria-hidden="true"></i>
                <i className="btn-pause fa fa-pause" aria-hidden="true"></i>
              </div>

              <i className="btn-next fa fa-share" aria-hidden="true" onClick={handleForward1Minute}></i>
              <i className="btn-next fa fa-step-forward" aria-hidden="true" onClick={nextMix}></i>

            </div>

          </div>

        </div>

        <div className="list_wrapper">
          <ul className="list">

            {activePlaylist.map((song, i) => (
              <li className={'list_item ' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { SetCurrent(i) }} >

                <div className="thumb"> </div>
                <div className="info">
                  <div className="title">{song.title}</div>
                  <div className="artist">{song.artistName}</div>
                </div>

              </li>
            ))}

          </ul>
        </div>

      </div>
    </div>
  )
}
