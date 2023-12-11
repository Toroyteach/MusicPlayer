import React, { useState, useContext, useEffect } from 'react'

import { Link } from 'react-router-dom';

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

import { useCookies, Cookies } from "react-cookie";

import apiClient from '../../../services/api/base/apiClient.js';

import useQuery from '../../../services/api/base/useQuery.js';

import endpointCoverArtUrl from '../../../services/api/base/endPointCoverArtUrl.js';

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';

import musicContext from '../../../services/music/musicContext.js';

import GenreList from '../music/GenreList.js';
import genreTypes from '../music/genreTypes.js';

//import the reducer function states to make consistent states
import {
  SET_USER_FAVOURITE_LIST_ADD,
  SET_USER_FAVOURITE_LIST_REMOVE,
  SET_NOTIFIATION_TEXT_ITEM,
} from '../../../services/context/appState/stateTypes';

import {
  SET_TOGGLE_RANDOM,
  SET_TOGGLE_REPEAT,
  SET_TOGGLE_PLAYING,
  SET_CURRENT_SONG,
  SET_FAVOURITE_MIX_ITEM,
  SET_ACTIVE_PLAYLIST_ARRAY,
  SET_MUSIC_PLAYING_STATUS
} from '../../../services/music/musicState/musicStateTypes';

//import check icon to use in the custom toast icon
import checkIcon from '../../../layouts/components/toast/toastSvg/check.svg';
import PlayLoad from './loader/PlayLoad.js';

import warningIcon from '../../../layouts/components/toast/toastSvg/error.svg';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

export default function MainPlayer() {

  // Global State
  const {
    stateDispatch,
    userData: {
      firebaseUid,
      favourite: {
        favouriteItems,
      }
    }
  } = useContext(appContext)

  const {
    handleForward1Minute,
    handleback30,
    handleProgress,
    currentTime,
    duration,
    currentSong,
    playing,
    activePlaylist,
    musicStateDispatch,
    random,
    playNextItem,
    SetCurrent,
    repeat,
    musicSettings: {
      playOrLoading,
      likedItem,
      mixList,
      playingStatus,
    },
  } = useContext(musicContext)

  //initiate tge translator

  const { t } = useTranslation();

  const cookies = new Cookies();
  const accessToken = cookies.get('userToken')
  const [cookie, setCookie] = useCookies(["userToken", "userRefreshToken"]);

  const [loading, setLoading] = useState(false);

  const [playPauseBtn, setPlayPauseBtn] = useState(false)

  //converts the tome to more understandable format
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  const handleAddFavourite = (dataIdToAdd) => {

    setLoading(true)
    //Make post request to change the status
    apiClient.post('/music/addUserFavourite', dataIdToAdd, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)
        if (response.data.status === 'succes') {

          musicStateDispatch({ type: SET_FAVOURITE_MIX_ITEM, data: likedItem ? false : true })


          let data = {
            type: 'Success',
            text: t("successfully-added ") + activePlaylist[currentSong].title + t("to-your-favourites-list"),
            icon: checkIcon,
            bgColour: '#5cb85c',
          }

          dispatchNotification(data)
        }


      })
      .catch(error => {

        setLoading(false)
        let data = {
          type: t("error"),
          text: t("error-updateing-your-settings") + " " + (!repeat ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });
  };

  const handleRemoveFavourite = (dataIdToAdd) => {
    const favData = {
      userFavourite: dataIdToAdd
    }

    const id = dataIdToAdd.mixId

    setLoading(true)
    //Make post request to change the status
    apiClient.delete(`/music/deleteUserFavourite/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)
        if (response.data.status === 'succes') {

          musicStateDispatch({ type: SET_FAVOURITE_MIX_ITEM, data: false })

        }

      })
      .catch(error => {

        setLoading(false)
        let data = {
          type: t("error"),
          text: t("error-updateing-your-settings") + " " + (!repeat ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });
  };

  const getRecentFavList = () => {
    apiClient.get(`/profile/getUserFavouriteList/${firebaseUid}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(response => {

      if (response.data.status === 'success') {

        stateDispatch({ type: SET_USER_FAVOURITE_LIST_ADD, data: response.data.data.favourite.favouriteData ?? [] })

      }

    }).catch(error => {

    });
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

    if (currentSong === null) {
      let data = {
        type: t("error"),
        text: "Please Select an Item before moving forward",
        icon: warningIcon,
        bgColour: '#f0ad4e',
      }

      dispatchNotification(data)

      return
    }

    const chanegPlayState = () => {
      if (playing) {
        gsap.to($(".btn-pause"), { duration: 0.5, x: 20, opacity: 0, display: "none", scale: 0.3, ease: Power2.easeInOut });
        gsap.fromTo($(".btn-play"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut });
      } else {
        gsap.to($(".btn-play"), { duration: 0.5, x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
        gsap.fromTo($(".btn-pause"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut });

      }
    }

    if (!playingStatus) {
      playNextItem()
      chanegPlayState()
      musicStateDispatch({ type: SET_TOGGLE_PLAYING, data: playing ? false : true })
      musicStateDispatch({ type: SET_MUSIC_PLAYING_STATUS, data: true })
    } else {
      chanegPlayState()
      musicStateDispatch({ type: SET_TOGGLE_PLAYING, data: playing ? false : true })
    }

  }

  //handle favourite icon active or not
  //const [isLiked, setLiked] = useState(false)
  //handle when user clicks the favourite button
  const handleLikeMixItem = () => {

    if (activePlaylist.length == 0) {
      return
    }

    if (currentSong === null) {
      let data = {
        type: t("error"),
        text: "Please Select an Item before moving forward",
        icon: warningIcon,
        bgColour: '#f0ad4e',
      }

      dispatchNotification(data)

      return
    }

    const newMixItem = {
      title: activePlaylist[currentSong].title,
      artist: activePlaylist[currentSong].genre,
      mixId: activePlaylist[currentSong].mixId,
    };

    if (likedItem) {

      // oldList.splice(idx, 1);
      handleRemoveFavourite(newMixItem)

    } else {

      //get the active playlist item and add to the favourite
      handleAddFavourite(newMixItem)

    }

    setTimeout(() => {
      getRecentFavList()
    }, 4000)
  }

  //handle Random icon active or not based on user action
  const handleRandomClick = () => {
    const randomPlaybackData = {
      randomPlayback: random ? false : true
    }

    setLoading(true)
    //Make post request to change the status
    apiClient.post('/profile/updateUserProfileSettings', randomPlaybackData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)

        if (response.data.status === 'succes') {
          musicStateDispatch({ type: SET_TOGGLE_RANDOM, data: response.data.data.randomPlayback })
          setCookie("randomPlayback", response.data.data.randomPlayback, {
            path: "/",
            secure: true,
            sameSite: true,
          });


          let data = {
            type: t("success"),
            text: t("Successfully") + " " + (!response.data.data.randomPlayback ? t("enabled") : " " + t("disabled")) + " " + t("Dark-Mode"),
            icon: checkIcon,
            bgColour: '#5cb85c',
          }

          dispatchNotification(data)
        }


      })
      .catch(error => {

        setLoading(false)
        let data = {
          type: t("error"),
          text: t("error-updateing-your-settings") + " " + (!random ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });

  }

  //handle Replay icon active or not based on user action
  const handleReplayMixItem = () => {

    const replybackData = {
      replayPlayback: repeat ? false : true
    }

    setLoading(true)
    //Make post request to change the status
    apiClient.post('/profile/updateUserProfileSettings', replybackData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)
        if (response.data.status === 'succes') {
          musicStateDispatch({ type: SET_TOGGLE_REPEAT, data: response.data.data.replayPlayback })
          setCookie("repeatPlayback", response.data.data.replayPlayback, {
            path: "/",
            secure: true,
            sameSite: true,
          });


          let data = {
            type: t("success"),
            text: t("Successfully") + " " + (!response.data.data.replayPlayback ? t("enabled") : " " + t("disabled")) + " " + t("Dark-Mode"),
            icon: checkIcon,
            bgColour: '#5cb85c',
          }

          dispatchNotification(data)
        }


      })
      .catch(error => {

        setLoading(false)
        let data = {
          type: t("error"),
          text: t("error-updateing-your-settings") + " " + (!repeat ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });
  }

  //handle when user wants to change the playlist
  //const [isFavPlaylist, setFavPlaylist] = useState("default")
  //handle when user clicks the Select Playlist button
  const handleChooseFavPlaylist = (v) => {

    const listChoice = v

    let newPlaylist = [];

    if (listChoice == 'favourite') {

      // Generic helper function that can be used for the three operations:        
      const operation = (list1, list2, isUnion = false) => list1.filter(a => isUnion === list2.some(b => a.mixId === b.mixId));

      newPlaylist = operation(mixList, favouriteItems, true)

    } else {

      newPlaylist = mixList

    }

    const activePlaylistData = {
      activePlaylist: listChoice
    }

    setLoading(true)
    //Make post request to change the status
    apiClient.post('/profile/updateUserProfileSettings', activePlaylistData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)

        if (response.data.status === 'succes') {

          musicStateDispatch({ type: SET_ACTIVE_PLAYLIST_ARRAY, data: newPlaylist })
          setCookie("activePlaylist", response.data.data.activePlaylist, {
            path: "/",
            secure: true,
            sameSite: true,
          });


          let data = {
            type: t("success"),
            text: t("Successfully") + " " + (!response.data.data.randomPlayback ? t("enabled") : " " + t("disabled")) + " " + t("Dark-Mode"),
            icon: checkIcon,
            bgColour: '#5cb85c',
          }

          dispatchNotification(data)
        }


      })
      .catch(error => {

        setLoading(false)
        let data = {
          type: t("error"),
          text: t("error-updateing-your-settings") + " " + (!random ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });



  }

  const genrePlaylist = (genreTypes || []).map((list, idx) => (
    <GenreList key={idx} className={list.class} name={list.name} handleOnClick={() => handleChooseFavPlaylist(list.name)} />
  ))

  //method to handle dispatching and handling playing the next song
  const nextMixItem = () => {


    if (currentSong === activePlaylist.length - 1) {

      musicStateDispatch({ type: SET_CURRENT_SONG, data: 0 })

    } else if (random) {

      musicStateDispatch({ type: SET_CURRENT_SONG, data: Math.floor(Math.random() * activePlaylist.length) })

    } else {

      musicStateDispatch({ type: SET_CURRENT_SONG, data: currentSong + 1 })

    }

  }

  //function to handle dispatching previous song
  const prevMixItem = () => {

    if (currentSong === 0) {

      musicStateDispatch({ type: SET_CURRENT_SONG, data: activePlaylist.length - 1 })

    } else {

      musicStateDispatch({ type: SET_CURRENT_SONG, data: currentSong - 1 })

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

  useEffect(() => {

    if (playing) {

      //setPlayPauseBtn(true)

    } else {
      setPlayPauseBtn(playOrLoading)
    }

  }, [playOrLoading])

  return (

    <div className="player" id="player">
      {/* this section will host the sliding in media player */}

      <div className="playback_wrapper">

        <div className="playback_blur"></div>

        {
          typeof currentSong === 'number' ? (
            <Link to={`/music/single/${activePlaylist[currentSong]?.mixId}`} aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title={t("leave-comment")}>
              <div className="playback_thumb" style={{ backgroundImage: `url(${endpointCoverArtUrl+activePlaylist[currentSong]?.coverArt})`}}></div>
            </Link>
          ) : (
            <div className="playback_thumb_none">
              <span className="loaderNoMusicChosen"></span>
              <div className="alert alert-success" role="alert">
                Select an Item to continue
              </div>
            </div>
          )
        }


        <div className="playback_extras text_center">
          {/* handle repeat the current mix */}
          <div className='icon btn-RepeatIcon'>
            <i className={'cursor-pointer fa fa-repeat ' + (repeat ? 'activeIcons' : '')} aria-hidden="true" onClick={handleReplayMixItem}></i>
          </div>

          {/* handle shuffle mix list items */}
          <div className='icon btn-ShuffleIcon'>
            <i className={'cursor-pointer fa fa-random ' + (random ? 'activeIcons' : '')} aria-hidden="true" onClick={handleRandomClick}></i>
          </div>

          {/* select current active playlist */}
          <div className='icon btn-PlaylistIcon  custom-dropdown' >
            <i className="cursor-pointer fa fa-list-ol custom-dropbtn" aria-hidden="true"></i>

            <div className='custom-dropdown-content playliststyle'>
              <span className="text-dark" >{t("choose-playlist")}</span>
              <ul >
                <li className="text-dark" onClick={() => handleChooseFavPlaylist("default")}>{t("default")}</li>
                <li className="text-dark" onClick={() => handleChooseFavPlaylist("favourite")}>Favouite</li>
              </ul>
            </div>
          </div>


          {/* handle make a mix item liked or not */}
          <div className='icon btn-LikeIcon' onClick={handleLikeMixItem}>
            <i className="cursor-pointer btn-heartOn fa fa-heart" aria-hidden="true"></i>
            <i className="cursor-pointer btn-heartOff fa fa-heart-o" aria-hidden="true"></i>
          </div>

          <div className='icon btn-EqualizerIcon  '>
            <i className="cursor-pointer fa fa-expand" aria-hidden="true" onClick={() => handleChooseFavPlaylist('ragga')}></i>
          </div>

          {/* handle choose audio visualizer */}

          {/* handle download the mix item */}
          <div className='icon btn-DownloadIcon'>
            <i className="cursor-pointer fa fa-download" aria-hidden="true"></i>
          </div>

        </div>

        <div className="playback_info">
          <div className="title">{typeof currentSong === 'number' ? activePlaylist[currentSong]?.title : ''}</div>
          <div className="artist">{typeof currentSong === 'number' ? activePlaylist[currentSong]?.genre : ''}</div>
        </div>

        <div className="">

          <div className="p-2 playback_timeline">
            <div className="playback_timeline_start-time">{fmtMSS(currentTime)}</div>

            <div className="playback_timeline_slider">
              <input onMouseUp={handleProgress} className="cursor-pointer" type="range" name="progresBar" id="prgbar" style={{ width: "100%" }} />
            </div>

            <div className="playback_timeline_end-time">{fmtMSS(duration)}</div>
          </div>

          <div className="p-2 playback_btn_wrapper">

            <i className="btn-prev fa fa-step-backward" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title={t("previous")} onClick={prevMixItem}></i>
            {/* <i className="btn-prev fa fa-reply" data-bs-toggle="tooltip" data-bs-placement="top" title={t("back-30sec")} aria-hidden="true" onClick={handleback30}></i> */}

            <div className="btn-switch" onClick={handlePlayPause} data-bs-toggle="tooltip" data-bs-placement="top" title={t("play-pause")}>

              <PlayLoad isLoading={playPauseBtn} isPlaying={playing} sourceButton={'main'} />

            </div>

            {/* <i className="btn-next fa fa-share" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title={t("forwad-30sec")} onClick={handleForward1Minute}></i> */}
            <i className="btn-next fa fa-step-forward" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title={t("next")} onClick={nextMixItem}></i>

          </div>

        </div>
        {loading && <div className="spinner-grow text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>}
      </div>

      <div className="list_wrapper">

        {(!activePlaylist || activePlaylist.length === 0) ? (
          <div className="alert alert-warning">
            The playlist is empty. Please add some songs.
          </div>
        ) : (
          <ul className="list">

            {(activePlaylist || []).map((song, i) => (
              <li className={'list_item ' + (currentSong === i ? 'selected' : '')} key={i}>

                <div className="thumb" style={{ backgroundImage: `url(${endpointCoverArtUrl+song.coverArt})`}}> </div>
                <div className="info" onClick={() => { SetCurrent(i) }}>
                  <div className="title">{song.title}</div>
                  <div className="artist">{song.genre}</div>
                </div>

              </li>
            ))}

          </ul>
        )}



      </div>


      <ul className="list">
        {genrePlaylist}
      </ul>
    </div>

  )
}
