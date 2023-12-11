import React, { useContext, useEffect, useState } from 'react'

import io from 'socket.io-client';

import apiClient from '../../services/api/base/apiClient';

import useAuth from '../../services/authContext/useAuth';

import { useQuery } from 'react-query';

import endpoinUrl from '../../services/api/base/endpointUrl';
import webSocketUrl from '../../services/api/base/webSocketUrl';

import { useCookies, Cookies } from "react-cookie";
//router for navigation
import { useNavigate } from 'react-router-dom';

//sunsset image profile background
import image from '../../assets/users/img/new/apocalypticsunset_pe.png';
import profileImage from "../../assets/users/img/bruce-mars.jpg";
import imageAvatar from "../../assets/users/img/imageavatar.png";

//user details context
import appContext from '../../services/context/appContext.js';

//import cool alerts from sweetalerts
import swal from 'sweetalert';
import Swal from 'sweetalert2'
// import imgaeTest from '../../../public/avatar.jpg'
// import thanosGif from '../../../public/avatar.jpg'

import useFirstnameValidationu from '../../services/hooks/formValidation/update/useFirstnameValidationu';
import useLastnameValidationu from '../../services/hooks/formValidation/update/useLastnameValidationu';
import useEmailValidationu from '../../services/hooks/formValidation/update/useEmailValidationu';
import usePasswordValidationu from '../../services/hooks/formValidation/update/usePasswordValidationu';
import useNumberValidationu from '../../services/hooks/formValidation/update/useNumberValidationu';
import useUsernameValidationu from '../../services/hooks/formValidation/update/useUsernameValidationu';

import { PWD_REGEX } from '../../services/hooks/formValidation/update/regex';

//get the reducer types to help update the applcation states
import {
  SET_SHOW_MY_ONLINE_STATUS,
  SET_SHOW_OTHERS_COMMENTS,
  SET_ALLOW_RANDOM_QUIZ,
  SET_ARTIFICIAL_WEATHER,
  SET_SPECTRUM_TYPE,
  SET_MAIN_APP_DARKMODE,
  SET_NOTIFIATION_TEXT_ITEM,
  SET_THANOS_SNAP_ANIMATION,
  SET_USER_EMAIL,
  SET_USER_USERNAME,
  SET_USER_FIRSTNAME,
  SET_USER_LASTNAME,
  SET_USER_EXCERPT,
  SET_USER_NUMBER,
  SET_USER_USERIMAGE,
  SET_ONLINE_USERS_LIST,
} from '../../services/context/appState/stateTypes.js';

import checkIcon from '../../layouts/components/toast/toastSvg/check.svg';
import warningIcon from '../../layouts/components/toast/toastSvg/error.svg';

// import warningIcon from '../../layouts/components/toast/toastSvg/warning.svg';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

//boostrap carousel
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

//
import ModalImage from "react-modal-image";

//import thanos audio object
import thanosSnapAudioFile from '../../services/hooks/thanosAudio/thanosSnapAudioFile.mp3'

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
      userImage,
    },
    appSettings: {
      appDarkMode,
      activeSpectrum,
      thanosSnapVisible,
    },
    stateDispatch,
    activePlaylist,
    currentSong,
  } = useContext(appContext)

  //initiate tge translator
  const { t } = useTranslation();

  const [cookie, setCookie, removeCookie] = useCookies(["userToken", "userRefreshToken"]);
  const { auth, setAuth } = useAuth();
  //Online Listeners
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { firstnameu, setFirstnameu, validFirstnameu } = useFirstnameValidationu();
  const { lastnameu, setLastnameu, validLastnameu } = useLastnameValidationu();
  // const { emailu, setEmailu, validEmailu } = useEmailValidationu();
  const [password, setPassword] = useState();
  const [passwordc, setPasswordc] = useState();
  const { numberu, setNumberu, validNumberu } = useNumberValidationu();
  const { usernameu, setUsernameu, validUsernameu } = useUsernameValidationu();
  const [excerptu, setExcerptu] = useState();

  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const [error, setError] = useState('')

  //update show listeners my online status
  const updateShowMyOnlineStatus = () => {

    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')
    const onlineStatusData = {
      allowOnlineStatus: allowOnlineStatus ? false : true
    }

    setLoading(true)

    //Make post request to change the status
    apiClient.post('/profile/updateUserProfileSettings', onlineStatusData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)

        if (response.data.status === 'succes') {
          stateDispatch({ type: SET_SHOW_MY_ONLINE_STATUS, data: response.data.data.allowOnlineStatus });

          setCookie("onlineStatus", response.data.data.allowOnlineStatus, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          let data = {
            type: t("success"),
            text: t("Successfully-made-your-Online-Status") + " " + (!response.data.data.allowOnlineStatus ? t("enabled") : t("disabled")),
            icon: checkIcon,
            bgColour: '#5cb85c',
          }

          if (response.data.data.allowOnlineStatus == true) {
            handleSubscribe();
          } else {
            handleUnsubscribe()
          }

          dispatchNotification(data)
        }


      })
      .catch(error => {

        console.log(error.message)

        setLoading(false)

        let data = {
          type: t("error"),
          text: t("error-updateing-your-settings") + " " + (!allowOnlineStatus ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });
  }

  //update show other listeners my online status
  const updateShowMyComments = () => {

    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')
    const onlineStatusData = {
      allowComments: allowComments ? false : true
    }

    setLoading(true)
    //Make post request to change the status
    apiClient.post('/profile/updateUserProfileSettings', onlineStatusData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)

        if (response.data.status === 'succes') {
          stateDispatch({ type: SET_SHOW_OTHERS_COMMENTS, data: response.data.data.allowComments })

          setCookie("showOthersComment", response.data.data.allowComments, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          let data = {
            type: t("success"),
            text: t("Successfully-made-your-Comments") + " " + (!response.data.data.allowComments ? t("visible") : t("hidden")),
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
          text: t("error-updateing-your-settings") + " " + (!allowComments ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });

  }

  //update app dark mode
  const updateEnableAppDarkMode = () => {

    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')
    const onlineStatusData = {
      appDarkMode: appDarkMode ? false : true
    }

    setLoading(true)
    //Make post request to change the status
    apiClient.post('/profile/updateUserProfileSettings', onlineStatusData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)
        if (response.data.status === 'succes') {
          stateDispatch({ type: SET_MAIN_APP_DARKMODE, data: response.data.data.appDarkMode })

          setCookie("appDarkMode", response.data.data.appDarkMode, {
            path: "/",
            secure: true,
            sameSite: true,
          });

          let data = {
            type: t("success"),
            text: t("Successfully") + " " + (!response.data.data.appDarkMode ? t("enabled") : " " + t("disabled")) + " " + t("Dark-Mode"),
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
          text: t("error-updateing-your-settings") + " " + (!appDarkMode ? t("enabled") : t("disabled")),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });

  }

  const handleUpdateUserData = () => {

    const dataValue = {};

    if (password === passwordc && (password != null && passwordc != null)) {
      if (PWD_REGEX.test(password)) {
        dataValue.password = password;
      } else {
        setError(t('password-error-regex'))
        return
      }
    }

    if (validFirstnameu) {
      dataValue.firstname = firstnameu;
    }

    if (validLastnameu) {
      dataValue.lastname = lastnameu;
    }

    if (validUsernameu) {
      dataValue.username = usernameu;
    }

    if (validNumberu) {
      dataValue.phone = numberu;
    }

    if (excerptu != null) {
      dataValue.excerpt = excerptu;
    }

    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')

    //TODO stop music if playing
    setLoading(true)

    apiClient.patch(`/profile/updateUserData`, dataValue, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        if (response.data.success === true) {

          setLoading(false)

          if (validFirstnameu && response.data.data.firstname) {
            stateDispatch({ type: SET_USER_FIRSTNAME, data: response.data.data.firstname })
            setCookie("firstname", response.data.data.firstname, {
              path: "/",
              secure: true,
              sameSite: true,
            });
          }

          if (validLastnameu && response.data.data.lastname) {
            stateDispatch({ type: SET_USER_LASTNAME, data: response.data.data.lastname })
            setCookie("lastname", response.data.data.lastname, {
              path: "/",
              secure: true,
              sameSite: true,
            });
          }

          if (validUsernameu && response.data.data.username) {
            stateDispatch({ type: SET_USER_USERNAME, data: response.data.data.username })
            setCookie("username", response.data.data.username, {
              path: "/",
              secure: true,
              sameSite: true,
            });
          }

          if (validNumberu && response.data.data.phone) {
            stateDispatch({ type: SET_USER_NUMBER, data: response.data.data.phone })
            setCookie("number", response.data.data.phone, {
              path: "/",
              secure: true,
              sameSite: true,
            });
          }

          if (excerptu != null && response.data.data.excerpt) {
            stateDispatch({ type: SET_USER_EXCERPT, data: response.data.data.excerpt })
            setCookie("excerpt", response.data.data.excerpt, {
              path: "/",
              secure: true,
              sameSite: true,
            });
          }


          let data = {
            type: t("success"),
            text: t("success-updating-data"),
            icon: checkIcon,
            bgColour: '#5cb85c',
          }

          dispatchNotification(data)

        } else if (response.data.success === false) {

          let data = {
            type: 'Warning',
            text: t("Failed-updating-data"),
            icon: warningIcon,
            bgColour: '#f0ad4e',
          }

          dispatchNotification(data)

        }

      })
      .catch(error => {

        setLoading(false)
        let data = {
          type: 'Warning',
          text: t("Failed-updating-data"),
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });

  }

  const handleUpdatePassword = () => {
    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')

    setLoading(true)
    //Make post request to change the status
    apiClient.get(`/auth/updatePassword/${email}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {

        setLoading(false)

        if (response.status === 200) {

          let data = {
            type: t("success"),
            text: "Succesfully Sent Passwor Resent Link to your Email",
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
          text: "Error Sending Passwor Resent Link to your Email",
          icon: warningIcon,
          bgColour: '#f0ad4e',
        }

        dispatchNotification(data)

      });
  }

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        // Send the image to the NestJS backend

        const cookies = new Cookies();
        const accessToken = cookies.get('userToken')

        setLoading(true)

        await apiClient.post(`/profile/profileImage`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then(response => {

            setLoading(false)

            if (response.data.success === true) {

              // Handle the response, which should contain the image URL
              stateDispatch({ type: SET_USER_USERIMAGE, data: response.data.photoUrl })

              let data = {
                type: t("success"),
                text: t("success-uploading-image"),
                icon: checkIcon,
                bgColour: '#5cb85c',
              }

              dispatchNotification(data)

            } else if (response.data.success === false) {

              let data = {
                type: 'Warning',
                text: t("Failed-uploading-image"),
                icon: warningIcon,
                bgColour: '#f0ad4e',
              }

              dispatchNotification(data)

            }

          })
          .catch(error => {

            setLoading(false)

            let data = {
              type: 'Warning',
              text: t("Failed-uploading-image"),
              icon: warningIcon,
              bgColour: '#f0ad4e',
            }

            dispatchNotification(data)

          });

      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('No file selected for upload.');
    }
  };

  //handle delete users account
  //variable for the cool thanos animation disappearance effect
  const navigate = useNavigate();
  const [audio] = useState(new Audio(thanosSnapAudioFile));
  const deleteUsersAccount = () => {

    setTimeout(() => {
      navigate("/login")
    }, 18000)

    audio.play()
    stateDispatch({ type: SET_THANOS_SNAP_ANIMATION, data: true })

    return

    swal({
      title: t("are-your-sure"),
      text: t("delete-warning-text"),
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          const cookies = new Cookies();
          const accessToken = cookies.get('userToken')
          const refreshToken = cookies.get('userRefreshToken')

          //Make post request to change the status
          setLoading(true)

          apiClient.delete(`/auth/deleteAccount?refreshToken=${refreshToken}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
            .then(response => {

              setLoading(false)
              console.log(response.data)
              //TODO: PLAY thanos snap sound
              audio.play()

              setTimeout(() => {

                setAuth({})

                removeCookie("userToken", {
                  path: "/",
                  secure: true,
                  sameSite: true,
                  domain: 'localhost'
                });

                removeCookie("userRefreshToken", {
                  path: "/",
                  secure: true,
                  sameSite: true,
                  domain: 'localhost'
                });

                navigate("/login")

              }, 13000);

            })
            .catch(error => {
              setLoading(false)
            });

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

  const handleSubscribe = () => {
    const socket = io(webSocketUrl);

    const songTitle = activePlaylist && activePlaylist.length > 0 ? (activePlaylist[currentSong]?.title ?? '') : '';

    socket.emit('onlineListeners', {
      userName: username,
      activeSong: songTitle,
      displayPicUrl: userImage
    });
  }

  const handleUnsubscribe = () => {
    const socket = io(webSocketUrl);

    socket.emit('unsubscribe', {
      userName: username,
      activeSong: '',
      displayPicUrl: ''
    });
  }

  const [imageProfile, setImageProfile] = useState()
  useEffect(() => {
    if (userImage != 'imageavatar.png') {
      setImageProfile(userImage)
    } else {
      setImageProfile(imageAvatar)
    }
  }, [userImage])


  const [images, setImages] = useState([])
  const getUnsplashImages = async () => {

    const unsplashToken = 'Mf6CHASBHiRxPTZ-i6vw4NSuXEKJmjHVkDzlTXt1WdA' //process.env.REACT_APP_UNSPLASH_KEY

    const header = {
      headers: { Authorization: `Client-ID ${unsplashToken}` }
    }
    const res = await fetch(`https://api.unsplash.com/photos/`, header);
    const data = await res.json()
    return data;
  };

  const { isLoading, data } = useQuery('fetchUnsplashImage', getUnsplashImages, {
    refetchOnWindowFocus: false,
    enabled: true,
  },);

  useEffect(() => {

    if (data) {

      setImages(data.slice(0, 10));

    }

  }, [data])

  return (
    <>
      <div className="container-fluid px-0">
        <div className="page-header max-height-300 border-radius-xl mt-4">
          <img src={image} alt="profile_image" className="background_image" />
          <span className="mask  bg-gradient-primary  opacity-3"></span>
        </div>
        <div className="card card-body mx-md-1 mt-n6">
          <div className={thanosSnapVisible ? 'row gx-4 mb-2 fadeOut' : 'row gx-4 mb-2'} id="fadeOut">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative">
                <img src={imageProfile} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">
                  {username}
                </h5>
                <p className="mb-0 font-weight-normal text-sm">
                  {role}
                </p>
              </div>
            </div>
            {loading &&
              <div className='container text-center'>
                <span class="loader"></span>
              </div>
            }
          </div>
          <div className={thanosSnapVisible ? 'row fadeOutTheRest' : 'row'} id="fadeOutTheRest">
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

              <div className={thanosSnapVisible ? 'col-12 col-xl-4 fadeOutPlatformSettings' : 'col-xl-4 col-md-4 col-sm-12 col-lg-4'} id="fadeOutPlatformSettings">
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
                <div className="card card-plain h-100" style={{maxHeight: "40vh"}}>
                  <div className="card-header pb-0 p-3">
                  </div>
                  <br />
                  <Carousel fade>
                    {images.map((item, index) => (
                      <Carousel.Item key={index}>

                        {/* If you want to use a different size, you can replace 'full' with another key like 'raw', 'regular', etc. */}
                        {item.urls && item.urls.small && (
                          <ModalImage small={item.urls.raw+'&h=350&w=350&dpr=2'} alt={`Slide ${index + 1}`} />
                        )}
                      </Carousel.Item>
                    ))}
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
              {error &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  {error}
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
              <form>
                <div className="row g-3 modalIntro">
                  <div className="col-6 modalIntro">
                    <input type="text" id="orangeForm-firstname" defaultValue={firstname} onChange={(e) => setFirstnameu(e.target.value)} className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">{t("your-firstname")}</label>
                  </div>
                  <div className="col-6">
                    <input type="text" id="orangeForm-lastname" defaultValue={lastname} onChange={(e) => setLastnameu(e.target.value)} className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-lastname">{t("your-lastname")}</label>
                  </div>
                  <div className="col-6">
                    <input type="email" id="orangeForm-email" value={email} className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">{t("your-email")}</label>
                  </div>

                  <div className="col-6">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">{t("choose-image")}</label>
                  </div>

                  {/* <div className='container'>
                    <div className='row'>
                      <div className="col-6">
                        <input type="password" id="orangeForm-password" onChange={(e) => setPassword(e.target.value)} className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-password">{t("your-password")}</label>
                      </div>
                      <div className="col-6">
                        <input type="password" id="orangeForm-password" onChange={(e) => setPasswordc(e.target.value)} className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-password">{t("your-confirm-password")}</label>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-6">
                    <input type="text" id="orangeForm-username" defaultValue={username} onChange={(e) => setUsernameu(e.target.value)} className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-username">{t("username")}</label>
                  </div>

                  <div className="col-6">
                    <input type="number" id="orangeForm-phone" defaultValue={number} onChange={(e) => setNumberu(e.target.value)} className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="orangeForm-phone">{t("your-phonenumber")}</label>
                  </div>

                  <div className="col-12">
                    <textarea className="form-control" id="excert" defaultValue={excerpt} onChange={(e) => setExcerptu(e.target.value)} rows="4"></textarea>
                    <label data-error="wrong" data-success="right" htmlFor="excerp">{t("your-excerpt")}</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" onClick={handleUpdatePassword}>{t("update-password")}</button>
              <button type="button" className="btn btn-secondary" onClick={handleUpload} data-bs-dismiss="modal">{t("upload-image")}</button>
              <button type="button" className="btn btn-primary" onClick={() => { handleUpdateUserData() }}>{t("update")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
