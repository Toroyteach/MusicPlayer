import React, { useRef, useEffect, forwardRef, useState } from 'react'

import { Route, Routes } from 'react-router-dom';

import '../../assets/backend/css/nucleo-icons.css';
import '../../assets/backend/css/nucleo-svg.css';
import '../../assets/backend/css/material-dashboard.css?v=3.0.4';
import '../../assets/backend/css/material-dashboard.css.map';
import '../../assets/backend/css/style.css';

//application context and states for data persistence
import ApplicationState from './context/ApplicationState'

import Navbar from './components/Navbar.js';
import SubNav from './components/SubNav.js';
import Footer from './components/Footer.js';

//import AdminDashboard from './Pages/components/AdminDashboard.js';
import UserDashboard from './Pages/components/UserDashboard.js';
// import NeutralUsageStats from './Pages/components/NeutralUsageStats.js'
import Map from './Pages/Map.js'
// import AdminMessages from './Pages/components/AdminMessages.js'
import UsersMessages from './Pages/components/UsersMessages.js';
// import SingleMusic from './Pages/SingleMusic.js';
import Notifications from './Pages/Notifications.js';
//import AdminProfile from './Pages/components/AdminProfile.js';
import UserProfile from './Pages/components/UserProfile.js';
import HomePlayer from './music-app/Home.js';
//okay google

//import cookiee
import { useCookies } from 'react-cookie';

export default function Home() {

  //const ref = useRef(null);
  const [show, setShow] = useState(true);
  const [cookies, setCookie] = useCookies(['user']);

  // const WrapperClass = React.forwardRef((props, ref) => (
  //   <input ref={ref} {...props} />
  //  ));

  const setButtonCookie = () => {
    setShow(false)
    setCookie('Name', true, { path: '/' });
  }

  // useEffect(() => {

  //     if(localStorage.getItem('theme') === 'dark'){

  //       setShow(true)

  //     } else {

  //       setShow(true)

  //     }

  //   }, []
  // )

  return (
    <ApplicationState>

< div className='g-sidenav-show'>
      <Navbar />

      <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
        {/* <!-- Navbar --> */}

        <SubNav />

        <div className="container-fluid changeView" style={{ height: "85vh", overflow: "auto" }}>

          <button type="button" class="btn btn-primary buttnonChange" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => setButtonCookie()} style={{ display: show ? "block" : "none" }}>
            Click Me
          </button>

          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Thank you so much.</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p> I would like to take this modal chance and opportunity to thank you for taking this effort to come check out my Application. I have so much passion for music and love coding, i have a little
                    fan base of house music listners. i decided to reward them when this application. it twill be hosting all of my mixes. so they can access them.
                    This is only but in beta mode and soon more updates shall be made in coming versions. This application comes packed with features. You will be able to listen to my mixes and also have a little fun
                    around the entire application. I have included one house mix i finshed making recently and thought why not tease the application with a reward. note only the play pause button will be working 
                    for now. I have much development to do, and am excited to start this project and soon i know itl be function to all my features expectations
                    i intend to have the following features as a final product. you will notice some section missing content or looking odd. i intend to use this section for the same.<br/>
                    = Bars and Audio Visualizations<br/>
                    = Song recognifion on the current audio of mix you will be listening<br/>
                    = Cool endless loop video for Calm your anxiety<br/>
                    = NASA picture of the day with its description<br/>
                    and alot more. Enjoy this UX/UI demo. and soon we shall launch it. Unfortunately the UI is not ready for mobile devices. more updates shall follow soon
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/messages" element={<UsersMessages />} />
            <Route path="/music" element={<HomePlayer />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* <Route path="" element={<UploadQuiz/>}/>
                    <Route path="" element={<UploadMix/>}/>
                    <Route path="" element={<UsersList/>}/> */}
          </Routes>

        </div>

        <Footer />

      </main>
  </div>

    </ApplicationState>
  )
}
