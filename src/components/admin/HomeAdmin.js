import React from 'react'

import { Route, Routes } from 'react-router-dom';

import '../../assets/backend/css/nucleo-icons.css';
import '../../assets/backend/css/nucleo-svg.css';
import '../../assets/backend/css/material-dashboard.css';
import '../../assets/backend/css/material-dashboard.css.map';
import '../../assets/backend/css/style.css';


// import '../../assets/backend/js/core/popper.min.js';
// import '../../assets/backend/js/core/bootstrap.min.js';
// import '../../assets/backend/js/plugins/perfect-scrollbar.min.js';
// import '../../assets/backend/js/plugins/smooth-scrollbar.min.js';
// import '../../assets/backend/js/material-dashboard.js';

import Navbar from './components/Navbar.js';
import SubNav from './components/SubNav.js';
import Footer from './components/Footer.js';

import AdminDashboard from './Pages/components/AdminDashboard.js';
// import UserDashboard from './Pages/components/UserDashboard.js';
// import NeutralUsageStats from './Pages/components/NeutralUsageStats.js'
import Map from './Pages/Map.js'
// import AdminMessages from './Pages/components/AdminMessages.js'
import UsersMessages from './Pages/components/UsersMessages.js';
// import SingleMusic from './Pages/SingleMusic.js';
import Notifications from './Pages/Notifications.js';
import AdminProfile from './Pages/components/AdminProfile.js';
// import UserProfile from './Pages/components/UserProfile.js';
import HomePlayer from '../../components/Home.js';

export default function Home() {
  return (
    <>

    <Navbar/>

    <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
        {/* <!-- Navbar --> */}

        <SubNav/>

        <div className="container-fluid" style={{ height: "85vh", overflow:"auto"}}>

            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/messages" element={<UsersMessages/>}/>
                <Route path="/music" element={<HomePlayer/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/profile" element={<AdminProfile/>}/>
                {/* <Route path="" element={<UploadQuiz/>}/>
                <Route path="" element={<UploadMix/>}/>
                <Route path="" element={<UsersList/>}/> */}
            </Routes>
            {/* Dashboard */}
                {/* switch betwwen when user logs in and when admin logs in */}
                {/* <AdminDashboard/> */}
                {/* <UserDashboard/> */}


            {/* Fanabase Map */}
                {/* <Map/> */}

            {/* Messages */}
                {/* users */}
                {/* <UsersMessages/> */}

                {/* Admin */}
                {/* <AdminMessages/> */}

            {/* Music */}
                {/* Music player */}

                {/* Single Item */}
                {/* <SingleMusic/> */}

            {/* Notifications */}
                {/* <Notifications/> */}

            {/* Profile */}
                {/* Admin */}
                 {/* <AdminProfile/>  */}

                {/* User */}
                {/* <UserProfile/> */}

            {/* Upload Quiz */}
                {/* <UploadQuiz/> */}

            {/* Upload Mix */}
                {/* <UploadMix/> */}

            {/* Users Admin */}
                {/* <UsersList/> */}

            {/* Sign in */}
                
            {/* Sign up */}

        </div>

        <Footer/>


    </main>
    </>
  )
}
