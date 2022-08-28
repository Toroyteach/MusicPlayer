import React, { useState, useRef, useContext, useEffect } from 'react'

import { Link } from 'react-router-dom';

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

//import bootstrap loading spinner for when loading audio
import Spinner from 'react-bootstrap/Spinner'

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';

//import the reducer function states to make consistent states
import {

  SET_TOGGLE_RANDOM,
  SET_TOGGLE_REPEAT,
  SET_TOGGLE_PLAYING,
  SET_CURRENT_SONG,
  SET_USER_FAVOURITE_LIST_ADD,
  SET_USER_FAVOURITE_LIST_REMOVE,
  SET_FAVOURITE_MIX_ITEM,
  SET_NOTIFIATION_TEXT_ITEM,

} from '../../../services/context/appState/stateTypes';

//import check icon to use in the custom toast icon
import checkIcon from '../../../layouts/components/toast/toastSvg/check.svg';
import PlayLoad from './loader/PlayLoad.js';

export default function MainPlayer() {

  // Global State
  const {
    SetCurrent,
    handleForward1Minute,
    handleback30,
    handleProgress,
    currentTime,
    repeat,
    duration,
    currentSong,
    playing,
    activePlaylist,
    stateDispatch,
    random,
    musicSettings: {
      playOrLoading,
      likedItem,
    },
    userData: {
      favourite: {
        favouriteItems,
      }
    }
  } = useContext(appContext)

  const VisualizerOptions = [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Bars",
      value: "bars",

    },
  ];

  const audio = useRef('audio_tag')


  //converts the tome to more understandable format
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  //handle toggling of full screen
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

  //handles the actual playing and changing of the play pause buttons
  const handlePlayPause = () => {

    stateDispatch({ type: SET_TOGGLE_PLAYING, data: playing ? false : true })

    if (playing) {

      gsap.to($(".btn-pause"), { duration: 0.5, x: 20, opacity: 0, display: "none", scale: 0.3, ease: Power2.easeInOut });
      gsap.fromTo($(".btn-play"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut });


    } else {

      gsap.to($(".btn-play"), { duration: 0.5, x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
      gsap.fromTo($(".btn-pause"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut });


    }

  }

  //handle favourite icon active or not
  //const [isLiked, setLiked] = useState(false)
  //handle when user clicks the favourite button
  const handleLikeMixItem = () => {

    //console.log(likedItem)

    if (likedItem) {

      //get the current item from active playlist and remove it from the list
      const idx = favouriteItems.find((match) => match.id === activePlaylist[currentSong].id);
      const oldList = Object.assign([], favouriteItems);
      oldList.splice(idx, 1);

      //will add a new list without this one
      stateDispatch({ type: SET_USER_FAVOURITE_LIST_REMOVE, data: oldList })

    } else {

      //get the active playlist item and add to the favourite
      const newMixItem = activePlaylist[currentSong];

      //will add to the list
      stateDispatch({ type: SET_USER_FAVOURITE_LIST_ADD, data: newMixItem })

      //show the toast of the added mix item
      let data = {
        type: 'Success',
        text: 'Successfully added ' + activePlaylist[currentSong].title + ' to your favourites list',
        icon: checkIcon,
        bgColour: '#5cb85c',
      }

      dispatchNotification(data)

    }

    //dispatch to set the current item liked or not
    stateDispatch({ type: SET_FAVOURITE_MIX_ITEM, data: likedItem ? false : true })

  }

  //handle Random icon active or not based on user action
  const handleRandomClick = () => stateDispatch({ type: SET_TOGGLE_RANDOM, data: random ? false : true })

  //handle Replay icon active or not based on user action
  const handleReplayMixItem = () => stateDispatch({ type: SET_TOGGLE_REPEAT, data: repeat ? false : true })

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


  //method to handle dispatching and handling playing the next song
  const nextMixItem = () => {


    if (currentSong === activePlaylist.length - 1) {

      //SetCurrent(0)
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

  //function to set or show cutsom toast notification
  const dispatchNotification = (data) => {

    const notice = {
      id: Math.floor((Math.random() * 101) + 1),
      title: data.type,
      description: data.text,
      backgroundColor: data.bgColour,
      icon: data.icon
    };

    stateDispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: notice });

  }


  //use effect to check the favourite states of each mix item
  useEffect(() => {

    if (likedItem) {

      gsap.to($(".btn-heartOff"), { duration: 0.5, opacity: 1, display: "none", x: 70 });
      gsap.fromTo($(".btn-heartOn"), { x: -20, opacity: 0, scale: 0.3, display: "none" }, { duration: 0.5, x: 0, opacity: 1, scale: 1, display: "block", ease: "elastic.inOut(1, 0.3)", y: 6 });

    } else {

      gsap.to($(".btn-heartOn"), { x: 0, opacity: 0, scale: 0.3, display: "none" });
      gsap.fromTo($(".btn-heartOff"), { duration: 0.2, opacity: 1, display: "none", x: 10 }, { x: 0, y: 10, duration: 0.2, opacity: 1, display: "block" });

    }

  }, [likedItem])

  return (

    <div className="player" id="player">
      {/* this section will host the sliding in media player */}

      <div className="playback_wrapper">

        <div className="playback_blur"></div>

        <Link to="/single" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Leave Comment">
          <div className="playback_thumb"></div>
        </Link>

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
              <ul class="">
                <li className='selected'><a class="dropdown-item" href="/#">Default</a></li>
                <li><a class="dropdown-item" href="/#">Favourites</a></li>
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

          <div className='dropdownV icon btn-VisualizerIcon'>
            <i className="dropdownV cursor-pointer fa fa-bar-chart" aria-hidden="true"></i>
            <div className='dropdown-content'>
              <span className="modalIntro">Choose Visualizer</span>
              <ul class="dropdown-content">
                <li className='selected modalIntro'><a class="dropdown-item">Bars</a></li>
                <li><a class="dropdown-item modalIntro">Circular</a></li>
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

          <div className="p-2 playback_timeline">
            <div className="playback_timeline_start-time">{fmtMSS(currentTime)}</div>

            <div className="playback_timeline_slider">
              <input onChange={handleProgress} value={duration ? (currentTime * 100) / duration : 0} className="cursor-pointer" type="range" name="progresBar" id="prgbar" style={{ width: "100%" }} />
            </div>

            <div className="playback_timeline_end-time">{fmtMSS(duration)}</div>
          </div>

          <div className="p-2 playback_btn_wrapper">

            <i className="btn-prev fa fa-step-backward" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous Mix" onClick={prevMixItem}></i>
            <i className="btn-prev fa fa-reply" data-bs-toggle="tooltip" data-bs-placement="top" title="Back 30sec" aria-hidden="true" onClick={handleback30}></i>

            <div className="btn-switch" onClick={handlePlayPause} data-bs-toggle="tooltip" data-bs-placement="top" title="Play Pause">

              <PlayLoad isLoading={playOrLoading} sourceButton={'main'}/>

            </div>

            <i className="btn-next fa fa-share" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward 1min" onClick={handleForward1Minute}></i>
            <i className="btn-next fa fa-step-forward" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Next Mix" onClick={nextMixItem}></i>

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

  )
}
