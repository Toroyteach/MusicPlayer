import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

//import css here to have one source for all components
import './subSrc/assets/users/css/nucleo-icons.css';
import './subSrc/assets/users/css/nucleo-svg.css';
import './subSrc/assets/users/css/material-dashboard.css?v=3.0.4';
import './subSrc/assets/users/css/material-dashboard.css.map';
import './subSrc/assets/users/css/style.css';
import './subSrc/assets/users/mediaQ.css';
import './subSrc/assets/users/style.css';

//application context and states for data persistence
import ApplicationState from './subSrc/services/context/ApplicationState.js'

//check auth component
import RequireAuth from './subSrc/services/authContext/RequireAuth.js';

//Main Landing Component
import Home from './subSrc/layouts/mainlayout/main/Home.js';

// Admin pages
import Comments from './subSrc/pages/Admin/Comments.js';
import UsersList from './subSrc/pages/Admin/UsersList.js';
import UploadMix from './subSrc/pages/Admin/UploadMix.js';
import UploadQuiz from './subSrc/pages/Admin/UploadQuiz.js';
import Map from './subSrc/pages/Admin/Map.js'
import Notifications from './subSrc/pages/Notifications.js';
import AdminMessages from './subSrc/pages/Admin/AdminMessages.js';
import AdminDashboard from './subSrc/pages/Admin/AdminDashboard.js';


// Users pages
import UsersMessages from './subSrc/pages/Users/UsersMessages.js';
import UsersDashboard from './subSrc/pages/Users/UserDashboard.js';
import { ChatRoom } from './subSrc/pages/Users/chat/ChatRoom';


// Nuetral pages
import Profile from './subSrc/pages/Users/UserProfile.js';
import SingleAudio from './subSrc/pages/SingleMusic.js';
import About from './subSrc/pages/About';
import MusicPlayer from './subSrc/pages/Music/Music.js';
import SignIn from './subSrc/services/authContext/Auth/SignIn.js';
import SignUp from './subSrc/services/authContext/Auth/SignUp.js';
import Missing from './subSrc/services/authContext/Auth/Missing.js';
import GuestPlayer from './subSrc/pages/Guest/GuestPlayer.js';

// import useAuth from "./useAuth";

function MusicApplication() {

    //const { auth } = useAuth();

    //warn the user before unloading or closing tab of the application
    useEffect(() => {
        
        window.addEventListener('beforeunload', alertUser)

        return () => {
            window.removeEventListener('beforeunload', alertUser)
        }

    }, [])

    const alertUser = e => {
        e.preventDefault()
        e.returnValue = ''
    }

    return (
        <ApplicationState>

            <Routes>

                {/* Landing page for guests */}
                <Route path="/" element={<GuestPlayer />} />

                {/* Users Protected Page */}
                {/* <Route element={<RequireAuth />}> */}
                <Route element={<Home />}>

                    {/* NEUTRAL PAGES */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/music" element={<MusicPlayer />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/music/single" element={<SingleAudio />} />
                    <Route path="/about" element={<About />} />

                    {/* USERS PAGES */}
                    <Route path="/users/dashboard" element={<UsersDashboard />} />
                    <Route path="/users/messages" element={<UsersMessages />} />
                    <Route path="/users/messages/room/:id" element={<ChatRoom />} />


                    {/* ADMIN PAGES */}
                    <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/messages" element={<AdminMessages />} />
                    <Route path="/admin/map" element={<Map />} />
                    <Route path="/admin/add-mix" element={<UploadMix />} />
                    <Route path="/admin/add-quiz" element={<UploadQuiz />} />
                    <Route path="/admin/comments" element={<Comments />} />
                    <Route path="/admin/users" element={<UsersList />} />

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