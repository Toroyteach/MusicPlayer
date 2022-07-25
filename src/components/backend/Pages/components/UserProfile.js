import React, { useContext, useState } from 'react'

//sunsset image profile background
import image from "../../../../assets/backend/img/new/apocalypticsunset_pe.png";
import profileImage from "../../../../assets/backend/img/bruce-mars.jpg"

//user details context
import appContext from '../../context/appContext'

//import cool alerts from sweetalerts
import swal from 'sweetalert';

//import bootstrap toast
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

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


} from '../../context/appState/stateTypes';

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
      // appDarkMode,
      // musicAppDarkMode,
      role,
      username,
      // activeSpectrum,
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
      appSettings,
    },
    stateDispatch,
  } = useContext(appContext)

  //set the states to the toast to stack them
  const [show, setShow] = useState(false);
  //const [position, setPosition] = useState('top-start');

  //update show listeners my online status
  const updateShowMyOnlineStatus = () => {

    stateDispatch({ type: SET_SHOW_MY_ONLINE_STATUS, data: allowOnlineStatus ? false : true });

    setShow(true);
  }

  //update show other listeners my online status
  const updateShowMyComments = () => stateDispatch({ type: SET_SHOW_OTHERS_COMMENTS, data: allowComments ? false : true })

  //update allow random quizes
  const updateAllowRandomQuizes = () => stateDispatch({ type: SET_ALLOW_RANDOM_QUIZ, data: allowQuize ? false : true })

  //update eneable artificial weather
  const updateEnableArtificalWeather = () => stateDispatch({ type: SET_ARTIFICIAL_WEATHER, data: allowWeather ? false : true })

  //update app dark mode
  const updateEnableAppDarkMode = () => stateDispatch({ type: SET_MAIN_APP_DARKMODE, data: appDarkMode ? false : true })

  //handle visualizer spectrum choice
  const handleChooseVisualizer = () => stateDispatch({ type: SET_SPECTRUM_TYPE, data: activeSpectrum ? false : true })

  //update enable global visualizer
  const updateEnableGlobalVisualizer = () => stateDispatch({ type: SET_ENABLE_GLOBAL_AUDIO_VISUALIZER, data: visualizerActive ? false : true })

  //update enable global astronomy picture
  const updateEnableGlobalAstronomyPic = () => stateDispatch({ type: SET_ENABLE_GLOBAL_ASTRONOMY_PICTURE, data: astronomyActive ? false : true })

  //update enable global shazam requests
  const updateEnableGlobalShazam = () => stateDispatch({ type: SET_ENABLE_GLOBAL_SHAZAM_SEARCH, data: shazamActive ? false : true })

  //update enable global dowbload option
  const updateEnableGlobalDownload = () => stateDispatch({ type: SET_ENABLE_GLOBAL_DOWNLOAD_OPTION, data: downloadActive ? false : true })

  //update enable anxiety video
  const updateEnableGlobalAnxietyVideo = () => stateDispatch({ type: SET_ENABLE_GLOBAL_CALM_ANXIETY, data: anxietyVideos ? false : true })

  //update enable see other users online status
  const updateEnableGlobalUsersToViewOtherUsersOnlineActivity = () => stateDispatch({ type: SET_ENABLE_GLOBAL_ALLOW_USERS_SEE_OTHERS_ONLINE_ACTIVITY, data: viewOtherUsers ? false : true })

  //handle delete users account
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
          swal("Poof! Your imaginary account has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Pheew!! Your imaginary account is safe!");
        }
      });

  }


  return (
    <>
      <div className='toastUpdateNotification'>
        <ToastContainer position="top-end" className="p-3">
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto toastNotification">Information</strong>
            </Toast.Header>
            <Toast.Body><p className=''>You have set the Setting to True:False</p></Toast.Body>
          </Toast>
        </ToastContainer>
      </div>

      <div className="container-fluid px-0">
        <div className="page-header max-height-300 border-radius-xl mt-4">
          <img src={image} alt="profile_image" className="background_image" />
          <span className="mask  bg-gradient-primary  opacity-3"></span>
        </div>
        <div className="card card-body mx-md-4 mt-n6">
          <div className="row gx-4 mb-2">
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
          <div className="row">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-center">
                        <h6 className="mb-0">Profile Information</h6>
                      </div>
                      <div className="col-md-4 text-end">
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
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Platform Settings</h6>
                  </div>
                  <div className="card-body p-3">
                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked={allowOnlineStatus} onChange={updateShowMyOnlineStatus} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault">Show other Listeners my online status</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" checked={allowComments} onChange={updateShowMyComments} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault1">Show others my comment on Mix Item</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={allowQuize} onChange={updateAllowRandomQuizes} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault2">Allow Random Music Quizes</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={allowWeather} onChange={updateEnableArtificalWeather} />
                          <label className="form-check-label text-body text-truncate mb-0" for="flexSwitchCheckDefault2">Enable Artificial Weather</label>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0">
                        <div className="row">

                          <div className="col-6">
                            <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application Dark Theme</h6>
                            <div className="form-check form-switch ps-0">
                              <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" checked={appDarkMode} onChange={updateEnableAppDarkMode} />
                            </div>
                          </div>
                          <div className="col-6">
                            <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Music Player Visualization</h6>
                            <div className="form-check form-switch ps-0">

                              <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" checked={activeSpectrum} onChange={handleChooseVisualizer} />

                            </div>
                          </div>

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
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault">Enable Audio Visualizer</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" checked={astronomyActive} onChange={updateEnableGlobalAstronomyPic} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault1">Enable Astronmy Picture</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={shazamActive} onChange={updateEnableGlobalShazam} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">Enable Shazam search</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={downloadActive} onChange={updateEnableGlobalDownload} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">Enable Download options</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={anxietyVideos} onChange={updateEnableGlobalAnxietyVideo} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">Enable Calm Anxiety Video</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked={viewOtherUsers} onChange={updateEnableGlobalUsersToViewOtherUsersOnlineActivity} />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">Enable users to see what others are Listening</label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" />
                          <label className="form-check-label text-body text-truncatemb-0" for="flexSwitchCheckDefault2">Enable Direct Commenting</label>
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
                    <input type="email" id="orangeForm-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-email">Your number</label>
                  </div>

                  <div className="col-6">
                    <input type="email" id="orangeForm-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-email">Username</label>
                  </div>

                  <div className="col-6">
                    <input type="password" id="orangeForm-pass" className="form-control validate" />
                    <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
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
