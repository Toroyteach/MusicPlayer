import React, { useContext, useState } from 'react'

//router for navigation
import { useNavigate } from 'react-router-dom';

//sunsset image profile background
import image from '../../assets/users/img/new/apocalypticsunset_pe.png';
import profileImage from "../../assets/users/img/bruce-mars.jpg"

//user details context
import appContext from '../../services/context/appContext.js';

//import cool alerts from sweetalerts
import swal from 'sweetalert';

//get the reducer types to help update the applcation states
import {
  SET_SHOW_MY_ONLINE_STATUS,
  SET_SHOW_OTHERS_COMMENTS,
  SET_ALLOW_RANDOM_QUIZ,
  SET_ARTIFICIAL_WEATHER,
  SET_SPECTRUM_TYPE,
  SET_MAIN_APP_DARKMODE,
  SET_NOTIFIATION_TEXT_ITEM,
} from '../../services/context/appState/stateTypes.js';

import checkIcon from '../../layouts/components/toast/toastSvg/check.svg';
// import warningIcon from '../../layouts/components/toast/toastSvg/warning.svg';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

//boostrap carousel
import Carousel from 'react-bootstrap/Carousel';

export default function UserProfile() {

  // Global State variable
  const {
    userData: {
      firstname,
      lastname,
      email,
      excerpt,
      number,
      allowQuize,
      allowWeather,
      allowComments,
      allowOnlineStatus,
      role,
      username,
    },
    appSettings: {
      appDarkMode,
      activeSpectrum,
    },
    stateDispatch,
  } = useContext(appContext)

  //initiate tge translator
  const { t } = useTranslation();

  //update show listeners my online status
  const updateShowMyOnlineStatus = () => {

    stateDispatch({ type: SET_SHOW_MY_ONLINE_STATUS, data: allowOnlineStatus ? false : true });

    let data = {
      type: t("success"),
      text: t("Successfully-made-your-Online-Status") + " " + (!allowOnlineStatus ? t("enabled") : t("disabled")),
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //update show other listeners my online status
  const updateShowMyComments = () => {
    stateDispatch({ type: SET_SHOW_OTHERS_COMMENTS, data: allowComments ? false : true })

    let data = {
      type: t("success"),
      text: t("Successfully-made-your-Comments") + " " + (!allowComments ? t("visible") : t("hidden")),
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //update allow random quizes
  const updateAllowRandomQuizes = () => {

    stateDispatch({ type: SET_ALLOW_RANDOM_QUIZ, data: allowQuize ? false : true })

    let data = {
      type: t("success"),
      text: t("Successfully") + (!allowQuize ? t("enabled") : t("disabled")) + ' Random Quize',
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //update eneable artificial weather
  const updateEnableArtificalWeather = () => {

    stateDispatch({ type: SET_ARTIFICIAL_WEATHER, data: allowWeather ? false : true })

    let data = {
      type: t("success"),
      text: t("Successfully") + (!allowWeather ? t("enabled") : t("disabled")) + ' Artifical Weather',
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)

  }

  //update app dark mode
  const updateEnableAppDarkMode = () => {

    stateDispatch({ type: SET_MAIN_APP_DARKMODE, data: appDarkMode ? false : true })

    let data = {
      type: t("success"),
      text: t("Successfully") + " " + (!appDarkMode ? t("enabled") : " " + t("disabled")) + " " + t("Dark-Mode"),
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)

  }

  //handle visualizer spectrum choice
  const handleChooseVisualizer = () => {

    stateDispatch({ type: SET_SPECTRUM_TYPE, data: activeSpectrum ? false : true })

    let data = {
      type: t("success"),
      text: t("Successfully") + " " + (!activeSpectrum ? t("activated") : t("deactivated")) + " " + t("audio-visualizer"),
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //handle delete users account
  //variable for the cool thanos animation disappearance effect
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  const deleteUsersAccount = () => {

    swal({
      title: t("are-your-sure"),
      text: t("delete-warning-text"),
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          swal(t("success-deleted-text"), { icon: "success", });

          setVisible(true);

          //setTimeout(navigate("/login"), 13000); 

          setTimeout(() => {

            navigate("/login")

          }, 13000);

        } else {

          swal(t("success-canceled-text"));

        }
      });

  }

  //dispatch all notiifcations from on place
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

  return (
    <>
      <div className="container-fluid px-0">
        <div className="page-header max-height-300 border-radius-xl mt-4">
          <img src={image} alt="profile_image" className="background_image" />
          <span className="mask  bg-gradient-primary  opacity-3"></span>
        </div>
        <div className="card card-body mx-md-1 mt-n6">
          <div className={visible ? 'row gx-4 mb-2 fadeOut' : 'row gx-4 mb-2'} id="fadeOut">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative">
                <img src={profileImage} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">
                  {lastname}
                </h5>
                <p className="mb-0 font-weight-normal text-sm">
                  {role}
                </p>
              </div>
            </div>
          </div>
          <div className={visible ? 'row fadeOutTheRest' : 'row'} id="fadeOutTheRest">
            <div className="row">

              <div className="col-xl-3 col-md-3 col-sm-12 col-lg-3">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-center">
                        <h6 className="mb-0">{t("profile-information")}</h6>
                      </div>
                      <div className="col-md-4 text-end cursor-pointer">
                        <a>
                          <i className="fas fa-user-edit text-secondary text-sm" data-toggle="modal" data-target="#staticBackdrop" data-bs-toggle="tooltip" data-bs-placement="top" title={t("edit-profile")}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <p className="text-sm text-secondary">
                      {excerpt}
                    </p>
                    <hr className="horizontal gray-light my-4" />
                    <ul className="list-group">
                      <li className="list-group-item border-0 ps-0 pt-0 text-sm text-secondary"><strong className="">{t("fullname")}:</strong> &nbsp; {firstname + " " + lastname}</li>
                      <li className="list-group-item border-0 ps-0 text-sm text-secondary"><strong className="">{t("mobile")}:</strong> &nbsp; {number}</li>
                      <li className="list-group-item border-0 ps-0 text-sm text-secondary"><strong className="">{t("email")}:</strong> &nbsp; {email}</li>
                      <li className="list-group-item border-0 ps-0 text-sm text-secondary"><strong className="">{t("username")}:</strong> &nbsp; {username}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={visible ? 'col-12 col-xl-4 fadeOutPlatformSettings' : 'col-xl-4 col-md-4 col-sm-12 col-lg-4'} id="fadeOutPlatformSettings">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">{t("platform-settings")}</h6>
                  </div>
                  <div className="card-body p-3">
                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">{t("account")}</h6>
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefaultapptheme" checked={appDarkMode} onChange={updateEnableAppDarkMode} />
                          <label className="form-check-label text-body text-truncate mb-0" htmlFor="flexSwitchCheckDefaultapptheme"> &ensp;{t("application-theme")}</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefaultonlinestatus" checked={allowOnlineStatus} onChange={updateShowMyOnlineStatus} />
                          <label className="form-check-label text-body text-truncate mb-0" htmlFor="flexSwitchCheckDefaultonlinestatus">&ensp;{t("show-other-listeners-my-online-status")}</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefaultcomments" checked={allowComments} onChange={updateShowMyComments} />
                          <label className="form-check-label text-body text-truncate mb-0" htmlFor="flexSwitchCheckDefaultcomments">&ensp;{t("show-other-users-my-comments")}</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 ps-0 pb-0">
                        <button onClick={deleteUsersAccount} type="button" className="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">{t("delete-my-account-together-with-data")}</button> &nbsp;
                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div className='col-xl-5 col-md-5 col-sm-12 col-lg-5' id="fadeOutPlatformSettings">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Your AI Generated Images</h6>
                  </div>
                  <br />
                  <Carousel fade>
                    <Carousel.Item>
                      <img className="d-block w-100" src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" alt="First slide" />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-block w-100" src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="Second slide" />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-block w-100" src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" alt="Third slide" />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal to update user details --> */}

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content modalUpdateDetails">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{t('update-profile')}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-3 modalIntro">
                  <div className="col-6 modalIntro">
                    <input type="text" id="orangeForm-firstname" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">{t("your-firstname")}</label>
                  </div>
                  <div className="col-6">
                    <input type="text" id="orangeForm-lastname" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-lastname">{t("your-lastname")}</label>
                  </div>
                  <div className="col-6">
                    <input type="email" id="orangeForm-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">{t("your-email")}</label>
                  </div>

                  <div className="col-6">
                    <input type="number" id="orangeForm-phone" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-phone">{t("your-phonenumber")}</label>
                  </div>

                  <div className="col-6">
                    <input type="text" id="orangeForm-username" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-username">{t("username")}</label>
                  </div>

                  <div className="col-6">
                    <input type="password" id="orangeForm-password" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-password">{t("your-password")}</label>
                  </div>

                  <div className="col-12">
                    <textarea className="form-control" id="excert" rows="4"></textarea>
                    <label data-error="wrong" data-success="right" htmlFor="excerp">{t("your-excerpt")}</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t("close")}</button>
              <button type="button" className="btn btn-primary">{t("update")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
