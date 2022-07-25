import React from 'react';
import { Route, Routes } from 'react-router-dom';

//application context and states for data persistence
import ApplicationState from './components/backend/context/ApplicationState.js'

//check auth component
import RequireAuth from './components/backend/authContext/RequireAuth.js';

//Main component
import HomeAdmin from '../src/components/backend/HomeAdmin.js'

//Guest Music Component
import GuestPlayer from './components/guest/GuestPlayer.js';

import SignIn from './components/backend/authContext/Auth/SignIn.js';
import SignUp from './components/backend/authContext/Auth/SignUp.js';

//import 404 page
import Missing from './components/backend/authContext/Auth/Missing.js';

//Components
import HomePlayer from './components/backend/music-app/Home.js';
import AdminDashboard from './components/backend/Pages/components/AdminDashboard.js';
import UsersMessages from './components/backend/Pages/components/UsersMessages.js';
import About from './components/backend/Pages/About';

import UserDashboard from './components/backend/Pages/components/UserDashboard.js';
import Map from './components/backend/Pages/Map'
// import AdminMessages from './Pages/components/AdminMessages.js'
import Notifications from './components/backend/Pages/Notifications';
import UserProfile from './components/backend/Pages/components/UserProfile';
//okay google

//import upload mix
import UploadMix from './components/backend/Pages/UploadMix';

//import upload Quiz
import UploadQuiz from './components/backend/Pages/UploadQuiz';

//import users List
import UsersList from './components/backend/Pages/UsersList';

import SingleAudio from './components/backend/Pages/SingleMusic';

// import useAuth from "./useAuth";

function MusicApplication() {

    //const { auth } = useAuth();

    return (
        <ApplicationState>

            <Routes>

                {/* Landing page for guests */}
                <Route path="/" element={<GuestPlayer />} />

                {/* Users Protected Page */}
                <Route element={<RequireAuth />}>
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
                </Route>

                {/* Auth pages */}
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path='*' element={<Missing />} />

            </Routes>


        </ApplicationState>
    )
}

export default MusicApplication