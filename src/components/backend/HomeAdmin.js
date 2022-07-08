import React, { useRef, useEffect, forwardRef } from 'react'

import { Route, Routes } from 'react-router-dom';

import '../../assets/backend/css/nucleo-icons.css';
import '../../assets/backend/css/nucleo-svg.css';
import '../../assets/backend/css/material-dashboard.css';
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

export default function Home() {

  const ref = useRef(null);

  // useEffect(
  //   () => {
  //     const sumDivs = ref.current ? [...ref.current.querySelectorAll('div:not(.sidenav) > hr')] : []

  //     console.log(sumDivs)
  //   }
  // )

  // const WrapperClass = React.forwardRef((props, ref) => (
  //   <input ref={ref} {...props} />
  //  ));

  return (
    <ApplicationState>

        <Navbar />

        <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
          {/* <!-- Navbar --> */}

          <SubNav />

          <div className="container-fluid" style={{ height: "85vh", overflow: "auto" }}>

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

    </ApplicationState>
  )
}
