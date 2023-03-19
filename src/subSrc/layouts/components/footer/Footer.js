import React, { useContext } from 'react'

import { Link } from 'react-router-dom';

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';//'../context/appContext.js'

import '../../../assets/users/css/style.css';

//import shazam icon
import { TbBrandShazam } from 'react-icons/tb';

//import cool alerts from sweetalerts
import swal from 'sweetalert';

//import axios for the shazam api
import axios from 'axios';

//import the reducer function states to make consistent states
import {

  SET_TOGGLE_PLAYING,
  SET_CURRENT_SONG,
  SET_VOLUME

} from '../../../services/context/appState/stateTypes';
import PlayLoad from '../../../pages/Music/components/loader/PlayLoad.js';
import { t } from 'i18next';

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
    musicSettings: {
      playOrLoading
    },
    appSettings: {
      thanosSnapVisible,
    },
  } = useContext(appContext)

  //handles the actual playing and changing of the play pause buttons
  // const [showSpinner, setShowSpinner] = useState(false)
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


  //shazam details to send to rapid api
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'text/plain',
  //     'X-RapidAPI-Key': 'e2c7ca4b6amshd3130528089f43cp1a6adbjsn3e37ffb98f27',
  //     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  //   },
  //   body: '"Generate one on your own for testing and send the body with the content-type as text/plain"'
  // };


  const handleShazam = () => {
    swal({
      text: 'Search for a movie. e.g. "Dark Knight".',
      content: "input",
      button: {
        text: "Search!",
        closeModal: false,
      },
    }).then(name => {

      if (!name) throw null;

      return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);

    }).then(results => {

      return results.json();

    }).then(json => {

      const movie = json.results[0];

      if (!movie) {
        return swal("No movie was found!");
      }

      const name = movie.trackName;
      const imageURL = movie.artworkUrl100;

      swal({
        title: "Top result:",
        text: name,
        icon: imageURL,
      });

    }).catch(err => {

      if (err) {
        swal("Oh noes!", "The AJAX request failed!", "error");
      } else {
        swal.stopLoading();
        swal.close();
      }

    });

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    
    // fetch("https://shazam.p.rapidapi.com/auto-complete?term=kiss%20the&locale=en-US", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": "e2c7ca4b6amshd3130528089f43cp1a6adbjsn3e37ffb98f27",
    //     "x-rapidapi-host": "shazam.p.rapidapi.com"
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

  //   fetch('https://shazam.p.rapidapi.com/songs/v2/detect?timezone=America%2FChicago&locale=en-US', options)
	// .then(response => response)
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
  }


  return (
    <footer className={thanosSnapVisible ? 'footer py-4 fadeOut' : 'footer py-4'} id="fadeOut">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">

          <div className="col-lg-6 mb-lg-0 mb-4 col-md-6 col-sm-12">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              ©
              {t("created-with")} <i className="fa fa-heart"></i> {t("by")}
              <a href="https://toroyteach.com" className="font-weight-bold" target="_blank" rel="noreferrer"> Toroyteach </a>
              {t("for-a-cool-fan-like-you")} {username}.
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">

            {/* Mini Music */}
            <div className="mini-player-footer">

              <Link to="/music/single">
                <div className="track_info_wrapper" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title={t("leave-comment")}>
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

                <i className="btn-prev fa fa-step-backward footerPlayer" data-bs-toggle="tooltip" data-bs-placement="top" title={t("previous")} aria-hidden="true" onClick={prevMixItem}></i>

                <div className="btn-switch" onClick={playAndPause} data-bs-toggle="tooltip" data-bs-placement="top" title={t("play-pause")}>


                  <PlayLoad isLoading={playOrLoading} sourceButton={'footer'} />

                </div>

                <i className="btn-next fa fa-step-forward footerPlayer" data-bs-toggle="tooltip" data-bs-placement="top" title={t("next")} aria-hidden="true" onClick={nextMixItem}></i>

              </div>

              <div className='btn-VolumeIcon' >
                <i className="cursor-pointer fa fa-volume-up" aria-hidden="true"></i>
                <div className="volumeDropDown ">
                  <input type="range" orient="vertical" name="volBar" id="volBar" value={Math.round(volume * 100)} onChange={(e) => handleVolume(e.target.value / 100)} />
                </div>
              </div>

              <div className='btn-ShazamIcon' >
                {/* <i className="cursor-pointer fa fa-search-plus" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Identify"></i> */}
                <h3 className='cursor-pointer' onClick={handleShazam} aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title={t("click-to-identify")}><TbBrandShazam /></h3>
              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
