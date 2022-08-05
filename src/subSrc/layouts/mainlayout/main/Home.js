import React, { useContext, useEffect, useState } from 'react'

import { Link, useMatch, useResolvedPath, Outlet, useLocation, Navigate, } from 'react-router-dom';


import Select from 'react-select'

import '../../../assets/users/css/nucleo-icons.css';
import '../../../assets/users/css/nucleo-svg.css';
import '../../../assets/users/css/material-dashboard.css?v=3.0.4';
import '../../../assets/users/css/material-dashboard.css.map';
import '../../../assets/users/css/style.css';

//use auth for logout
import useAuth from '../../../services/authContext/useAuth.js';//'../backend/authContext/useAuth.js';

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';
// import {

//   SET_NOTIFIATION_TEXT_ITEM,

// } from './context/appState/stateTypes';

//notification images
import messageImage from '../../../assets/users/img/team-2.jpg';
import noticeImage from "../../../assets/users/img/small-logos/logo-spotify.svg";
import musicNote from '../../../assets/users/anime.svg';
//sunsset image profile background
import image from '../../../assets/users/img/logo-ct.png';

//import the footer section of the application
import Footer from '../../components/footer/Footer.js';

//import cookiee
import { useCookies } from 'react-cookie';
// import About from './Pages/About';

//import flag images
// import AU from '../../assets/backend/img/icons/flags/AU.png'
// import BR from '../../assets/backend/img/icons/flags/BR.png'
// import DE from '../../assets/backend/img/icons/flags/DE.png'
// import GB from '../../assets/backend/img/icons/flags/GB.png'
// import US from '../../assets/backend/img/icons/flags/US.png'

//import custom toast component and its assets
import CustomToast from '../../components/toast/CustomToast.js';
// import checkIcon from './toastComponent/toastSvg/check.svg';
// import errorIcon from './toastComponent/toastSvg/error.svg';
// import infoIcon from './toastComponent/toastSvg/info.svg';
// import warningIcon from './toastComponent/toastSvg/warning.svg';

export default function Home() {

  //Global State
  const {
    userData: {
      username,
    },
    appSettings: {
      notificationText,
    },
    // stateDispatch,
  } = useContext(appContext)

  //language choices
  const languageOtions = [
    {
      label: "EN",
      value: "En",
    },
    {
      label: "FR",
      value: "Fr",

    },
  ];

  //const ref = useRef(null);
  const [show, setShow] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['darkMode']);

  // const WrapperClass = React.forwardRef((props, ref) => (
  //   <input ref={ref} {...props} />
  //  ));

  const setButtonCookie = () => {
    setShow(false)


  }

  //use to set the nav active or not on mobile view
  const [isActive, setIsActive] = useState(false);
  const openNavBar = (e) => {
    e.preventDefault();
    setIsActive(current => !current)
  }

  //toast texts and description
  const [list, setList] = useState([]);

  //use this to allow users to change the current active localisation language
  //const handleChangeLanguage = (e) => stateDispatch({ type: SET_GLOBAL_LANGUAGE, data: e.target.value })

  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const logout = () => {
    //unset cookie

    removeCookie("user");
    //setAuth({});

    //console.log(auth);
    //const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === 'warning');
    //stateDispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: toastProperties });

  }

  useEffect(() => {

    if (notificationText.length != 0) {

      setList([...list, notificationText]);

    }

  }, [notificationText]);


  return (
    <div className={isActive ? 'g-sidenav-show g-sidenav-pinned' : 'g-sidenav-show'}>

      <CustomToast toastList={list} position="top-right" autoDelete={true} autoDeleteTime={3000} />

      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <Link className="navbar-brand m-0" to="/dashboard">
            <img src={image} className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Toroyteach Exp</span>
          </Link>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse  w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <CustomLink to="/dashboard" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/music" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">library_music</i>
                </div>
                <span className="nav-link-text ms-1">Music</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/messages" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Messages</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/notifications" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Notifications</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/about" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">info</i>
                </div>
                <span className="nav-link-text ms-1">About</span>
              </CustomLink>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account</h6>
            </li>
            <li className="nav-item">
              <CustomLink to="/profile" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </CustomLink>
            </li>
            <li className="nav-item" onClick={logout}>
              <a className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">logout</i>
                </div>
                <span className="nav-link-text ms-1">Log Out</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Admin Pages</h6>
            </li>
            <li className="nav-item">
              <CustomLink to="/users" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">people</i>
                </div>
                <span className="nav-link-text ms-1">Users</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/add-quiz" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">add</i>
                </div>
                <span className="nav-link-text ms-1">Add Quiz</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/add-mix" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">add</i>
                </div>
                <span className="nav-link-text ms-1">Add Mix</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/comments" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">assignment</i>
                </div>
                <span className="nav-link-text ms-1">Comments</span>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/map" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">people</i>
                </div>
                <span className="nav-link-text ms-1">FanBase</span>
              </CustomLink>
            </li>
          </ul>
        </div>

        <div className="">
          <img src={musicNote} class="card-img-top" alt="..." />
        </div>

      </aside>

      <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
        {/* <!-- Navbar --> */}

        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="/#">Welcome</a></li>
                <li className="breadcrumb-item text-sm active modalIntro" aria-current="page">{username}</li>
              </ol>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              </div>
              <ul className="navbar-nav  justify-content-end">

                <li className="nav-item d-flex align-items-center">
                  {/* <a href="/#" className="nav-link text-body p-3" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-language cursor-pointer"></i>
                  </a> */}
                  {/* <Select className='dropdown-item allow-focus ' options={languageOtions} /> */}
                  <div className="sl-nav">
                    {/* <i className="fa fa-language cursor-pointer"></i> */}
                    <ul>
                      <li>
                        <i className="fa fa-language cursor-pointer"></i>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <div className="triangle"></div>
                        <ul>
                          <li><i className="sl-flag flag-de"><div id="germany"></div></i> <span>Deutsch</span></li>
                          <li><i className="sl-flag flag-gb"><div id="germany"></div></i> <span>Englisch</span></li>
                          <li><i className="sl-flag flag-au"><div id="germany"></div></i> <span>Australia</span></li>
                          <li><i className="sl-flag flag-usa"><div id="germany"></div></i> <span>USA</span></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item dropdown pe-2 d-flex align-items-center" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Notifications">
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
                              <span className="font-weight-bold">New message</span> from Anthony
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
                              <span className="font-weight-bold">New Mix</span> by Toroyteach
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
        <div className="container-fluid changeView" style={{ height: "85vh", overflow: "auto" }}>

          <button type="button" className="btn btn-primary buttnonChange" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => setButtonCookie()} style={{ display: show ? "block" : "none" }}>
            Click Me
          </button>
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title modalIntro" id="exampleModalCenterTitle">Thank you so much.</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className='modalIntro'> I would like to take this modal chance and opportunity to thank you for taking this effort to come check out my Application. I have great passion for music and like coding, i have a little
                    fan base of house music listners and i decided to reward them with this application. it will be hosting all of my mixes. so they can access them together with any new listners. Its all about spreading love.
                    This application is still in beta mode and soon more updates shall be made in coming versions which also comes packed with features. You will be able to listen to my mixes and also have a little fun
                    around the entire application. I have included one house mix i finshed making recently and thought why not tease the application with a reward. note only the play pause button will be working
                    for now. I have much development to do, and am excited to start this project and soon i know itl be function to all my features expectations
                    i intend to have the following features as a final product. you will notice some section missing content or looking odd. i intend to use this section for the same.<br />
                    Enjoy this UX/UI demo. and soon we shall launch it. More updates shall follow soon
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          <Outlet />


        </div>

        <Footer />

      </main>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link className={isActive ? 'active bg-gradient-primary nav-link text-white' : 'nav-link text-white '} to={to} {...props}>
      {children}
    </Link>
  )

}
