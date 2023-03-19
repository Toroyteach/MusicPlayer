import React, { useContext, useEffect, useState } from 'react'

import { Link, useMatch, useResolvedPath, Outlet, useLocation, Navigate, } from 'react-router-dom';

//use auth for logout
import useAuth from '../../../services/authContext/useAuth.js';//'../backend/authContext/useAuth.js';

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';

//notification images
import messageImage from '../../../assets/users/img/team-2.jpg';
import noticeImage from "../../../assets/users/img/small-logos/logo-spotify.svg";
import animeImg from '../../../assets/users/animeHeadphones.png'
//sunsset image profile background
import image from '../../../assets/users/img/logo-ct.png';

//import the footer section of the application
import Footer from '../../components/footer/Footer.js';

//import custom toast component and its assets
import CustomToast from '../../components/toast/CustomToast.js';

//import languages list
import LanguageList from '../../../services/localization/LanguageList.js';
import LocalizeTypes from '../../../services/localization/localizeTypes.js'

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import ApplicationTour from '../../../services/intro-tour/ApplicationTour.js';

export default function Home() {

  //Global State
  const {
    userData: {
      username,
    },
    appSettings: {
      notificationText,
      asideNavigation,
      thanosSnapVisible,
    },
    // stateDispatch,
  } = useContext(appContext)

  //initiate tge translator
  const { t } = useTranslation();

  //use this to allow users to change the current active localisation language
  const handleChangeLanguage = (value) => {

    console.log('here')

    //stateDispatch({ type: SET_GLOBAL_LANGUAGE, data: e.target.value }) 

    //change to the new language
    i18n.changeLanguage(value)

  }

  //use to set the nav active or not on mobile view
  const [isActive, setIsActive] = useState(false);
  const openNavBar = (e) => {
    e.preventDefault();
    setIsActive(current => !current)
  }
  //set timeout function to take back navigation anchor back
  const navigationTimeOut = () => {

    setTimeout(() => {

      setIsActive(current => !current)

    }, 100);

  }

  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const logout = () => {
    //unset cookie

    //setAuth({});

    //console.log(auth);
    //const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === 'warning');
    //stateDispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: toastProperties });

  }

  //toast texts and description
  const [list, setList] = useState([]);

  useEffect(() => {

    if (notificationText.length != 0) {

      setList([...list, notificationText]);

    }

  }, [notificationText]);

  //use effect to check state changes in the Application tour to launch/remove Aside Navigation state
  useEffect(() => {

    asideNavigation ? setIsActive(true) : setIsActive(false)

  }, [asideNavigation])

  const language = (LocalizeTypes || []).map((language, idx) => (
    <LanguageList key={idx} style={language.stype} name={language.name} handleOnClick={() => { handleChangeLanguage(language.value) }} />
  ))


  return (
    <div className={isActive ? 'g-sidenav-show g-sidenav-pinned' : 'g-sidenav-show'}>

      <ApplicationTour />

      <CustomToast toastList={list} position="top-right" autoDelete={true} autoDeleteTime={3000} />

      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">

        <div className={thanosSnapVisible ? 'fadeOutMainNav' : 'row'} id='fadeOutMainNav'>
          <div className="sidenav-header">
            <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
            <div className="navbar-brand m-0">
              <img src={image} className="navbar-brand-img h-100" alt="main_logo" />
              <span className="ms-1 font-weight-bold text-white">Toroyteach Exp</span>
            </div>
          </div>
          <hr className="horizontal light mt-0 mb-2" />
          <div className="collapse navbar-collapse  w-auto" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item" id='dashboardIntro'>
                <CustomLink to="/users/dashboard" onClick={navigationTimeOut} >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">{t("dashboard")}</span>
                </CustomLink>
              </li>
              <li className="nav-item" id='musicIntro'>
                <CustomLink to="/music" onClick={navigationTimeOut}>
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">library_music</i>
                  </div>
                  <span className="nav-link-text ms-1">{t("music")}</span>
                </CustomLink>
              </li>
              <li className="nav-item" id='messagesIntro'>
                <CustomLink to="/users/messages" onClick={navigationTimeOut}>
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">receipt_long</i>
                  </div>
                  <span className="nav-link-text ms-1">{t("message")}</span>
                </CustomLink>
              </li>
              <li className="nav-item" id='notificationsIntro'>
                <CustomLink to="/notifications" onClick={navigationTimeOut}>
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">notifications</i>
                  </div>
                  <span className="nav-link-text ms-1">{t("notifications")}</span>
                </CustomLink>
              </li>
              <li className="nav-item" id='aboutIntro'>
                <CustomLink to="/about" onClick={navigationTimeOut}>
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">info</i>
                  </div>
                  <span className="nav-link-text ms-1">{t("about")}</span>
                </CustomLink>
              </li>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">{t("account")}</h6>
              </li>
              <li className="nav-item" id='profileIntro'>
                <CustomLink to="/profile" onClick={navigationTimeOut}>
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <span className="nav-link-text ms-1">{t("profile")}</span>
                </CustomLink>
              </li>
              <li className="nav-item" onClick={logout} id='logoutIntro'>
                <a className="nav-link text-white ">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">logout</i>
                  </div>
                  <span className="nav-link-text ms-1">{t("logout")}</span>
                </a>
              </li>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Admin Pages</h6>
              </li>
              <li className="nav-item">
                <CustomLink to="/admin/dashboard" onClick={navigationTimeOut}>
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </CustomLink>
              </li>
              {/* <li className="nav-item">
              <CustomLink to="/admin/messages" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Messages</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/admin/users" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">people</i>
                </div>
                <span className="nav-link-text ms-1">Users</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/admin/add-quiz" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">add</i>
                </div>
                <span className="nav-link-text ms-1">Add Quiz</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/admin/add-mix" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">add</i>
                </div>
                <span className="nav-link-text ms-1">Add Mix</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/admin/comments" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">assignment</i>
                </div>
                <span className="nav-link-text ms-1">Comments</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/admin/map" onClick={navigationTimeOut}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">people</i>
                </div>
                <span className="nav-link-text ms-1">FanBase</span>
              </CustomLink>
            </li> */}
            </ul>
          </div>

          <div className="sideNavAside">
            <img src={animeImg} className="card-img-top" alt="..." />
          </div>

        </div>
      </aside>

      <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg " id='main-section'>
        {/* <!-- Navbar --> */}

        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-auto">
                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="/#">{t("welcome")}</a></li>
                <li className="breadcrumb-item text-sm active modalIntro" aria-current="page">{username}</li>
              </ol>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              </div>
              <ul className="navbar-nav  justify-content-end">

                <li className="nav-item d-flex align-items-center" id='languageSelectorIntro'>
                  <div className="sl-nav">
                    <ul>
                      <li>
                        <i className="fa fa-language cursor-pointer"></i>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>

                        <div className="triangle"></div>

                        <ul>

                          {language}

                        </ul>


                      </li>
                    </ul>

                  </div>
                </li>

                <li className="nav-item dropdown pe-2 d-flex align-items-center" id='shortNotificationIntro' aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Notifications">
                  <a href="/#" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-bell cursor-pointer"></i>
                  </a>
                  <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="/#">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img src={messageImage} className="avatar avatar-sm  me-3 " alt="" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">{t("new-message-from")}</span> Anthony
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="/#">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img src={noticeImage} alt="" className="avatar avatar-sm bg-gradient-dark  me-3 " />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">{t("new-mix-by")}</span> Toroyteach
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1"></i>
                              1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item d-xl-none ps-3 d-flex align-items-center" onClick={openNavBar}>
                  <a href="/#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid changeView">

          <Outlet />


        </div>

        <div id='footerIntro'>
          <Footer />
        </div>

      </main>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  const location = useLocation();

  if (isActive) {

    return (
      <Link className='active bg-gradient-primary nav-link text-white' to={to} {...props}>
        {children}
      </Link>
    )

  } else if ((to == location['pathname'].slice(0, 15)) || (to == location['pathname'].slice(0, 6))) {

    return (
      <Link className='active bg-gradient-primary nav-link text-white' to={to} {...props}>
        {children}
      </Link>
    )

  } else {

    return (
      <Link className='nav-link text-white ' to={to} {...props}>
        {children}
      </Link>
    )

  }

}
