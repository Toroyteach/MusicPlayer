import React, { useContext, useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import coverImage from './Music/music/Cover-Image.jpg'

import { useParams } from 'react-router-dom';

//import necessary files to make state and context consistent
import appContext from '../services/context/appContext.js'

import useQuery from '../services/api/base/useQuery';

import { Cookies } from "react-cookie";

import apiClient from '../services/api/base/apiClient'

//import custom coments
import Comments from "../services/comments/Comments.js"

import endpoinUrl from '../services/api/base/endpointUrl';

import endpointCoverArtUrl from '../services/api/base/endPointCoverArtUrl'

//waveform for the cool audio seek
import WaveSurfer from "wavesurfer.js";
//import WebAudio from 'wavesurfer.js/src/webaudio';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

import checkIcon from '../layouts/components/toast/toastSvg/check.svg';

import { SET_NOTIFIATION_TEXT_ITEM } from '../services/context/appState/stateTypes';
import { set_notifiation_text_item } from '../services/redux/app/reducer/appReducer';

export default function SingleMusic() {

  // Global State
  // const {
  //   userData: {
  //     firebaseUid,
  //     userImage,
  //   },
  //   audioObject,
  //   currentTime,
  //   playing,
  //   duration,
  //   stateDispatch,
  // } = useContext(appContext)

  const userData = useSelector((state) => state.user.data)
  const dispatch = useDispatch()

  let { mixId } = useParams();

  //initiate tge translator
  const { t } = useTranslation();

  const waveformRef = useRef();

  const [rating, setRating] = useState('')
  const [title, setTitle] = useState('')
  const [coverArt, setCoverArt] = useState()
  const [description, setDescription] = useState('')

  const [allowCommentsOnMix, setAllowCommentsOnMix] = useState(true)

  const { data, loading, error } = useQuery(`/comments/singleMixData/${mixId}`, 'GET');

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {

      const cookies = new Cookies();
      const accessToken = cookies.get('userToken')
      const ratingData = {
        mixId: mixId,
        rating: target.value,
        userId: userData.firebaseUid,
      }
      // Make post request to change the status
      apiClient.post('/ratings/', ratingData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(response => {

          if (response.data.status === 'success') {
            setRating(response.data.data.rating)

            let data = {
              type: t("success"),
              text: t("success-rating-mix"),
              icon: checkIcon,
              bgColour: '#5cb85c',
            }

            dispatchNotification(data)
          }

        })
        .catch(error => {

          console.log("Error")

        });

    }
  };

  const dispatchNotification = (data) => {

    const notice = {
      id: Math.floor((Math.random() * 101) + 1),
      title: data.type,
      description: data.text,
      backgroundColor: data.bgColour,
      icon: data.icon
    };

    dispatch(set_notifiation_text_item(notice))
    // stateDispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: notice });

  }

  useEffect(() => {
    if (data) {
      if (data.status === 'success') {

        setTitle(data.data.mixItemDoc.title)
        setDescription(data.data.mixItemDoc.description)
        setRating(data.data.ratingsDoc ? data.data.ratingsDoc.rating : 0)
        setCoverArt(endpointCoverArtUrl+data.data.mixItemDoc.coverArt)

        setAllowCommentsOnMix(data.data.mixItemDoc.commentsEnabled)
      }
    }

  }, [data]);


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

          {loading &&
            <div className='container text-center'>
              <span class="loader"></span>
            </div>
          }


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

                    <input className="star star-5" id="star-5" type="radio" name="star" value="5" checked={rating == 5} onChange={handleChange} />

                    <label className="star star-5" htmlFor="star-5"></label>

                    <input className="star star-4" id="star-4" type="radio" name="star" value="4" checked={rating == 4} onChange={handleChange} />

                    <label className="star star-4" htmlFor="star-4"></label>

                    <input className="star star-3" id="star-3" type="radio" name="star" value="3" checked={rating == 3} onChange={handleChange} />

                    <label className="star star-3" htmlFor="star-3"></label>

                    <input className="star star-2" id="star-2" type="radio" name="star" value="2" checked={rating == 2} onChange={handleChange} />

                    <label className="star star-2" htmlFor="star-2"></label>

                    <input className="star star-1" id="star-1" type="radio" name="star" value="1" checked={rating == 1} onChange={handleChange} />

                    <label className="star star-1" htmlFor="star-1"></label>

                  </form>

                </div>
              </div>
            </div>

          </section>


          <section className="border-bottom mb-4 py-3">

            <div className="card">
              <div className="row g-0">
                <div className="col-md-4" style={{ display: "flex" }}>
                  <img src={coverArt} className="img-responsive rounded-start" alt="Magnifico" style={{ maxWidth: "100%", maxHeight: "auto", justifyContent: "center" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-body">{description}.</p>
                  </div>
                </div>
              </div>
            </div>

          </section>


          {allowCommentsOnMix &&
            <section className="gradient-custom">
              <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">

                  <div className="col-12">
                    <div className="card">
                      <div className="card-body p-4">
                        <h4 className="text-center mb-4 pb-2">{t("liked-the-mix-leave-comment")}</h4>

                        <div className="row">
                          <div className="col">

                            <Comments currentMixName={title} currentUserId="1" currentMixId={mixId} />

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </section>
          }


        </div>

      </div>
    </>
  )
}
