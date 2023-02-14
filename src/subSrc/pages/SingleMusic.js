import React, { useContext, useRef, useEffect, useState } from 'react'

import coverImage from './Music/music/Cover-Image.jpg'

//import necessary files to make state and context consistent
import appContext from '../services/context/appContext.js'

//import custom coments
import Comments from "../services/comments/Comments.js"

//waveform for the cool audio seek
import WaveSurfer from "wavesurfer.js";
//import WebAudio from 'wavesurfer.js/src/webaudio';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";


export default function SingleMusic() {

  // Global State
  const {
    audioObject,
    currentTime,
    playing,
    duration,
  } = useContext(appContext)

  //initiate tge translator
  const { t } = useTranslation();

  const waveformRef = useRef();

  useEffect(() => {

    const waveSurfer = WaveSurfer.create({
      container: waveformRef.current,
      barWidth: 2,
      barHeight: 1, // the height of the wave
      barGap: null,
      responsive: true,
      splitChannels: false,
      waveColor: "#7a0909",
      interact: false
    });

    if (waveformRef.current) {

      //check if audio is null
      if (Object.keys(audioObject).length != 0) {

        waveSurfer.load(audioObject)

        //set volume to 0
        waveSurfer.setVolume(0)

        //set mute to true
        waveSurfer.setMute(true)

      }
    }

    waveSurfer.on('ready', function () {

      //set the wave surfer to play
      let newTime = (currentTime / duration)
      waveSurfer.seekTo(newTime)
      waveSurfer.seekAndCenter(newTime)
      // console.log('audio time on ready state and playing', (currentTime / duration))

    });

    return () => waveSurfer.destroy()
  }, []);


  return (
    <>
      <div className="row container_fluid">

        <section>
          <div className="card-body">
            <h4 className="card-title">{t("comments")}</h4>
          </div>
        </section>

        <div className="mb-4">

          <section className="border-bottom mb-4">

            <div className='container_fluid'>
              <div ref={waveformRef}></div>
            </div>

          </section>


          <section className="text-center border-top border-bottom py-3 mb-4 card">

            <div className="row">
              <div className="col-md-4 col-sm-12">
                <p><strong>{t("share-with-friends")}:</strong></p>

                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: "#3b5998" }}>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: "#55acee" }}>
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: " ##bc2a8d" }}>
                  <i className="fab fa-instagram"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: " #25D366" }}>
                  <i className="fab fa-whatsapp"></i>
                </button>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="stars">

                  <form action="">

                    <input className="star star-5" id="star-5" type="radio" name="star" />

                    <label className="star star-5" htmlFor="star-5"></label>

                    <input className="star star-4" id="star-4" type="radio" name="star" />

                    <label className="star star-4" htmlFor="star-4"></label>

                    <input className="star star-3" id="star-3" type="radio" name="star" />

                    <label className="star star-3" htmlFor="star-3"></label>

                    <input className="star star-2" id="star-2" type="radio" name="star" />

                    <label className="star star-2" htmlFor="star-2"></label>

                    <input className="star star-1" id="star-1" type="radio" name="star" />

                    <label className="star star-1" htmlFor="star-1"></label>

                  </form>

                </div>
              </div>
            </div>

          </section>


          <section className="border-bottom mb-4 py-3">

            <div className="card">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={coverImage} className="img-responsive rounded-start" alt="Magnifico" style={{ maxWidth: "80%", maxHeight: "auto" }} />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Magnifico</h5>
                    <p className="card-text">I dont have any good descrioption to talk about this mix. While i was creating it i had thought of the word TNT to mean that it is an exploseive mix tape but
                      later on i came to change it to Magnifico which would come to hit me that i have named this mix item as some spectacular and am not so sure how the viewers or
                      the fans are going to persieve it if not enjoy it haha. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                  </div>
                </div>
              </div>
            </div>

          </section>


          <section className="gradient-custom">
            <div className="container my-5 py-5">
              <div className="row d-flex justify-content-center">

                <div className="col-md-12 col-lg-10 col-xl-10">
                  <div className="card">
                    <div className="card-body p-4">
                      <h4 className="text-center mb-4 pb-2">{t("liked-the-mix-leave-comment")}</h4>

                      <div className="row">
                        <div className="col">

                          <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1" />

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>

      </div>
    </>
  )
}
