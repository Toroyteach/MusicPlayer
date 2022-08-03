import React from 'react';
import { Route, Routes } from 'react-router-dom';

//application context and states for data persistence
import ApplicationState from './subSrc/services/context/ApplicationState.js'

//check auth component
import RequireAuth from './subSrc/services/authContext/RequireAuth.js';

//Main component
import HomeAdmin from './subSrc/layouts/mainlayout/main/Home.js';

//Guest Music Component
import GuestPlayer from './subSrc/pages/Guest/GuestPlayer.js';

import SignIn from './subSrc/services/authContext/Auth/SignIn.js';
import SignUp from './subSrc/services/authContext/Auth/SignUp.js';

//import 404 page
import Missing from './subSrc/services/authContext/Auth/Missing.js';

//Components
import HomePlayer from './subSrc/pages/Music/Music.js';
import AdminDashboard from './subSrc/pages/Admin/AdminDashboard.js';
import UsersMessages from './subSrc/pages/Users/UsersMessages.js';
//import AdminMessages from './subSrc/pages/Admin/AdminMessages.js';
import About from './subSrc/pages/About';

// import UserDashboard from './subSrc/pages/Users/UserDashboard.js';
import Map from './subSrc/pages/Admin/Map.js'
import Notifications from './subSrc/pages/Notifications.js';
import UserProfile from './subSrc/pages/Users/UserProfile.js';
//okay google

//import upload mix
import UploadMix from './subSrc/pages/Admin/UploadMix.js';

//import upload Quiz
import UploadQuiz from './subSrc/pages/Admin/UploadQuiz.js';

//import users List
import UsersList from './subSrc/pages/Admin/UsersList.js';

import SingleAudio from './subSrc/pages/SingleMusic.js';

// import useAuth from "./useAuth";

function MusicApplication() {

    //const { auth } = useAuth();

    return (
        <ApplicationState>

            <Routes>

                {/* Landing page for guests */}
                <Route path="/" element={<GuestPlayer />} />

                {/* Users Protected Page */}
                {/* <Route element={<RequireAuth />}> */}
                    <Route element={<HomeAdmin />}>
                        <Route path="/dashboard" element={<AdminDashboard />} />
                        <Route path="/messages" element={<UsersMessages />} />
                        <Route path="/music" element={<HomePlayer />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/single" element={<SingleAudio />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/map" element={<Map />} />
                        <Route path="/add-mix" element={<UploadMix />} />
                        <Route path="/add-quiz" element={<UploadMix />} />
                        <Route path="/comments" element={<UploadQuiz />} />
                        <Route path="/users" element={<UsersList />} />
                    </Route>
                {/* </Route> */}

                {/* Auth pages */}
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path='*' element={<Missing />} />

            </Routes>


        </ApplicationState>
    )
}

export default MusicApplication