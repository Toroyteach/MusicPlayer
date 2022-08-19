import React, { useContext } from 'react'

import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';


import appContext from '../context/appContext.js';


export default function ApplicationTour() {

    const {
        userData: {
            username,
        },
    } = useContext(appContext)


    //the steps in the application
    const steps = [
        {
            title: 'Welcome ' + username,
            intro: 'I am so happy to see you here. Theres a lot Exciting things in-store for you. Please take this tour for it will appear once on initial load.',
        },
        {
            element: '#wrapper',
            title: 'Music Page',
            intro: 'This is the main reason you are here, the music section of the application. Apart from interructing with the audio controls of the music player you will also be able to have other cool stuff to play around with. Check out the about section to read a more detailed description of all features.',
        },
        {
            element: '#musicSubNavIntro',
            title: 'Music Section Navigation',
            intro: 'This is the sub Navigation inside the music section that you can use to explore other sections inside this section.',
        },
        {
            element: '#musicPlayerIntro',
            title: 'Main Music Player',
            intro: 'Here you will be able to launch and view the main music player which has even more selection of features for the music mix items and the playlist.',
        },
        {
            element: '#sidenav-main',
            title: 'Main Navigation',
            intro: 'This is the side Navigation to help you move around the entire application.',
        },
        {
            element: '#shortNotificationIntro',
            title: 'Quick Nitifications',
            intro: 'Here you will be briefed on the top latest notifications on any new events that occur in the application.',
        },
        {
            element: '#languageSelectorIntro',
            title: 'Language Selector',
            intro: 'Here you will be able to select your favourite language to use in the application. More languages shall follow in later updates.',
        },
        {
            element: '#footerIntro',
            title: 'Footer Section',
            intro: 'In here the Footer you will be able to use a couple of extra features among quick music controls, Song recognition engine and volume of the mix item playing.',
        },
        {
            element: '#dashboardIntro',
            title: 'Dashboard',
            intro: 'In here you will be able to see your usage statistics in the application.',
        },
        {
            element: '#messagesIntro',
            title: 'Messages Page',
            intro: 'In here you will be able to communicate directly with me. Note this is not Social Application you wont chat with other users, atleast not yet.',
        },
        {
            element: '#notificationsIntro',
            title: 'Notifications Page',
            intro: 'In here you will be able to read any new and past notifications on any events that come up in the application.',
        },
        {
            element: '#aboutIntro',
            title: 'About Page',
            intro: 'Here you can read more about this application and the intricasies that came into its design and development. Also includes an explanation of what to expect in the application.',
        },
        {
            element: '#profileIntro',
            title: 'Profile Page',
            intro: 'Here you will be able to change and update your personal profile upto including deleting your entire application with any data collected.',
        },
        {
            element: '#logoutIntro',
            title: 'Logout Button',
            intro: 'Well this is self explanatory hahah.',
        },
        {
            title: 'Lastly',
            intro: 'Take your time and enjoy this master piece i have created for you. Have a great time and Shout me out whenever and wherever you can.',
        },
    ];


    const onExit = () => { };


    return (
        <Steps enabled={true} steps={steps} initialStep={0} onExit={onExit} />
    )
}
