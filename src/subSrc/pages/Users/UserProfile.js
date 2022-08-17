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
  // SET_MUSIC_APP_DARKMODE,
  SET_ENABLE_GLOBAL_AUDIO_VISUALIZER,
  SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE,
  SET_ENABLE_GLOBAL_SHAZAM_SEARCH,
  SET_ENABLE_GLOBAL_DOWNLOAD_OPTION,
  SET_ENABLE_GLOBAL_CALM_ANXIETY,
  SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY,
  SET_NOTIFIATION_TEXT_ITEM,


} from '../../services/context/appState/stateTypes.js';

import checkIcon from '../../layouts/components/toast/toastSvg/check.svg';
import warningIcon from '../../layouts/components/toast/toastSvg/warning.svg';

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
      visualizerActive,
      astronomyActive,
      shazamActive,
      downloadActive,
      anxietyVideos,
      viewOtherUsers,
      appDarkMode,
      activeSpectrum,
    },
    stateDispatch,
  } = useContext(appContext)


  //update show listeners my online status
  const updateShowMyOnlineStatus = () => {

    stateDispatch({ type: SET_SHOW_MY_ONLINE_STATUS, data: allowOnlineStatus ? false : true });

    let data = {
      type: 'Success',
      text: 'Successfully made your Online Status ' + (!allowOnlineStatus ? 'Enabled' : 'Disabled'),
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //update show other listeners my online status
  const updateShowMyComments = () => {
    stateDispatch({ type: SET_SHOW_OTHERS_COMMENTS, data: allowComments ? false : true })

    let data = {
      type: 'Success',
      text: 'Successfully made your Comments ' + (!allowComments ? 'Visible' : 'Hidden'),
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //update allow random quizes
  const updateAllowRandomQuizes = () => {

    stateDispatch({ type: SET_ALLOW_RANDOM_QUIZ, data: allowQuize ? false : true })

    let data = {
      type: 'Success',
      text: 'Successfully ' + (!allowQuize ? 'Enabled' : 'Disabled') + ' Random Quize',
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //update eneable artificial weather
  const updateEnableArtificalWeather = () => {

    stateDispatch({ type: SET_ARTIFICIAL_WEATHER, data: allowWeather ? false : true })

    let data = {
      type: 'Success',
      text: 'Successfully ' + (!allowWeather ? 'Enabled' : 'Disabled') + ' Artifical Weather',
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)

  }

  //update app dark mode
  const updateEnableAppDarkMode = () => {

    stateDispatch({ type: SET_MAIN_APP_DARKMODE, data: appDarkMode ? false : true })

    let data = {
      type: 'Success',
      text: 'Successfully ' + (!appDarkMode ? 'Enabled' : 'Disabled') + ' Dark Mode',
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)

  }

  //handle visualizer spectrum choice
  const handleChooseVisualizer = () => {

    stateDispatch({ type: SET_SPECTRUM_TYPE, data: activeSpectrum ? false : true })

    let data = {
      type: 'Success',
      text: 'Successfully ' + (!activeSpectrum ? 'Activiated' : 'Diactivated') + ' Audio Visualizers',
      icon: checkIcon,
      bgColour: '#5cb85c',
    }

    dispatchNotification(data)
  }

  //update enable global visualizer
  const updateEnableGlobalVisualizer = () => {

    stateDispatch({ type: SET_ENABLE_GLOBAL_AUDIO_VISUALIZER, data: visualizerActive ? false : true })

    let data = {
      type: 'Warning',
      text: 'Successfully ' + (!visualizerActive ? 'Enabled' : 'Disabled') + ' Visualizers for the application',
      icon: warningIcon,
      bgColour: '#f0ad4e',
    }

    dispatchNotification(data)

  }

  //update enable global astronomy picture
  const updateEnableGlobalAstronomyPic = () => {

    stateDispatch({ type: SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE, data: astronomyActive ? false : true })

    let data = {
      type: 'Warning',
      text: 'Successfully ' + (!astronomyActive ? 'Enabled' : 'Disabled') + ' Astronomy for the application',
      icon: warningIcon,
      bgColour: '#f0ad4e',
    }

    dispatchNotification(data)

  }

  //update enable global shazam requests
  const updateEnableGlobalShazam = () => {

    stateDispatch({ type: SET_ENABLE_GLOBAL_SHAZAM_SEARCH, data: shazamActive ? false : true })

    let data = {
      type: 'Warning',
      text: 'Successfully ' + (!shazamActive ? 'Enabled' : 'Disabled') + ' Shazam for the application',
      icon: warningIcon,
      bgColour: '#f0ad4e',
    }

    dispatchNotification(data)

  }

  //update enable global dowbload option
  const updateEnableGlobalDownload = () => {

    stateDispatch({ type: SET_ENABLE_GLOBAL_DOWNLOAD_OPTION, data: downloadActive ? false : true })

    let data = {
      type: 'Warning',
      text: 'Successfully ' + (!downloadActive ? 'Enabled' : 'Disabled') + ' Download Option for the application',
      icon: warningIcon,
      bgColour: '#f0ad4e',
    }

    dispatchNotification(data)

  }

  //update enable anxiety video
  const updateEnableGlobalAnxietyVideo = () => {

    stateDispatch({ type: SET_ENABLE_GLOBAL_CALM_ANXIETY, data: anxietyVideos ? false : true })

    let data = {
      type: 'Warning',
      text: 'Successfully ' + (!anxietyVideos ? 'Enabled' : 'Disabled') + ' Anxiety video for the Entire application',
      icon: warningIcon,
      bgColour: '#f0ad4e',
    }

    dispatchNotification(data)

  }

  //update enable see other users online status
  const updateEnableGlobalUsersToViewOtherUsersOnlineActivity = () => {

    stateDispatch({ type: SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY, data: viewOtherUsers ? false : true })

    let data = {
      type: 'Warning',
      text: 'Successfully ' + (!viewOtherUsers ? 'Enabled' : 'Disabled') + ' View Online Users for the Entire application',
      icon: warningIcon,
      bgColour: '#f0ad4e',
    }

    dispatchNotification(data)

  }

  //handle delete users account
  //variable for the cool thanos animation disappearance effect
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  const deleteUsersAccount = () => {

    swal({
      title: "Are you sure?",
      text: "Once you have deleted your account theres no going back!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          swal("Poof! Your imaginary account has been deleted!", { icon: "success", });

          setVisible(true);

          //setTimeout(navigate("/login"), 13000); 

          setTimeout(() => {

            navigate("/login")

          }, 13000);

        } else {

          swal("Pheew!! Your imaginary account is safe!");

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
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-center">
                        <h6 className="mb-0">Profile Information</h6>
                      </div>
                      <div className="col-md-4 text-end cursor-pointer">
                        <a>
                          <i className="fas fa-user-edit text-secondary text-sm" data-toggle="modal" data-target="#staticBackdrop" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <p className="text-sm">
                      {excerpt}
                    </p>
                    <hr className="horizontal gray-light my-4" />
                    <ul className="list-group">
                      <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="">Full Name:</strong> &nbsp; {firstname + " " + lastname}</li>
                      <li className="list-group-item border-0 ps-0 text-sm"><strong className="">Mobile:</strong> &nbsp; {number}</li>
                      <li className="list-group-item border-0 ps-0 text-sm"><strong className="">Email:</strong> &nbsp; {email}</li>
                      <li className="list-group-item border-0 ps-0 text-sm"><strong className="">Username:</strong> &nbsp; {username}</li>
                      <li className="list-group-item border-0 ps-0 pb-0">
                        <button onClick={deleteUsersAccount} type="button" className="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">Delete My account together with data</button> &nbsp;
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={visible ? 'col-12 col-xl-4 fadeOutPlatformSettings' : 'col-12 col-xl-4'} id="fadeOutPlatformSettings">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Platform Settings</h6>
                  </div>
                  <div className="card-body p-3">
                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={appDarkMode} onChange={updateEnableAppDarkMode} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault2"> &ensp;Dark Theme</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked={allowOnlineStatus} onChange={updateShowMyOnlineStatus} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault">&ensp;Publicize my Online Activity</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" checked={allowComments} onChange={updateShowMyComments} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault1">&ensp;Publicize My Comments</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={allowQuize} onChange={updateAllowRandomQuizes} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault2">&ensp;Allow Random Music Quizes</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={allowWeather} onChange={updateEnableArtificalWeather} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault2">&ensp;Enable Artificial Weather</label>
                        </div>
                      </li>

                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault12" checked={activeSpectrum} onChange={handleChooseVisualizer} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault12">&ensp;Music Visualizer</label>
                        </div>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Application Settings</h6>
                  </div>
                  <div className="card-body p-3">
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked={visualizerActive} onChange={updateEnableGlobalVisualizer} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault">&ensp;Enable Audio Visualizer</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" checked={astronomyActive} onChange={updateEnableGlobalAstronomyPic} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault1">&ensp;Enable Astronmy Picture</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={shazamActive} onChange={updateEnableGlobalShazam} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">&ensp;Enable Shazam search</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={downloadActive} onChange={updateEnableGlobalDownload} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">&ensp;Enable Download options</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={anxietyVideos} onChange={updateEnableGlobalAnxietyVideo} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">&ensp;Enable Calm Anxiety Video</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={viewOtherUsers} onChange={updateEnableGlobalUsersToViewOtherUsersOnlineActivity} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">&ensp;Enable users to see what others are Listening</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">&ensp;Enable Direct Commenting</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal to update user details --> */}

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content modalUpdateDetails">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Update Profile</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row g-3 modalIntro">
                  <div className="col-6 modalIntro">
                    <input type="text" id="orangeForm-name" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-name">Your firstname</label>
                  </div>
                  <div className="col-6">
                    <input type="text" id="orangeForm-name" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-name">Your lastname</label>
                  </div>
                  <div className="col-6">
                    <input type="email" id="orangeForm-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
                  </div>

                  <div className="col-6">
                    <input type="number" id="orangeForm-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-email">Your number</label>
                  </div>

                  <div className="col-6">
                    <input type="text" id="orangeForm-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-email">Username</label>
                  </div>

                  <div className="col-6">
                    <input type="password" id="orangeForm-pass" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
                  </div>

                  <div className="col-12">
                    <textarea className="form-control" id="textAreaExample1" rows="4"></textarea>
                    <label data-error="wrong" data-success="right" for="orangeForm-pass">Your Excerpt</label>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
