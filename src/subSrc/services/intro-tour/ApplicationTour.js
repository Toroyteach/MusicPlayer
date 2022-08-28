import React, { useContext, useEffect, useState } from 'react'

import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';


import appContext from '../context/appContext.js';

//import cookies to stop showing the tour
import Cookies from 'universal-cookie';

//import the reducer function states to make consistent states
import {

    SET_ASIDE_NAVIGATION_OPEN_APP_TOUR,

} from '../context/appState/stateTypes';


export default function ApplicationTour() {

    const {
        stateDispatch,
        userData: {
            username,
        },
        appSettings: {
            enableApplicationTour,
        },
    } = useContext(appContext)

    //the steps in the application
    const steps = [
        {
            title: 'Welcome ' + username,
            intro: 'I am so happy to see you. Theres a lot of Exciting things in-store for you here. Please take this tour for its quite informative and will appear once on initial loading.',
        },
        {
            element: '#wrapper',
            title: 'Music Page',
            intro: 'This is the main reason you are here, the music section of the application. Apart from interructing with the audio controls of the music player you will also be able to have other cool stuff to play around with. Check out the about section to read a more detailed description of all features.',
        },
        {
            element: '#musicSubNavIntro',
            title: 'Music Section Navigation',
            intro: 'This is the sub Navigation inside the music section that you can use to explore other cool sections inside it.',
        },
        {
            element: '#musicPlayerIntro',
            title: 'Main Music Player',
            intro: 'Here you will be able to launch and view the main music player which has even more selection of controls for the mix items and its playlist.',
        },
        {
            element: '#shortNotificationIntro',
            title: 'Quick Notifications',
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
            intro: 'In here the Footer section you will be able to use a couple of extra features among quick music controls, Song recognition engine and volume of the mix item playing.',
        },
        {
            element: '#sidenav-main',
            title: 'Main Navigation',
            intro: 'This is the side Navigation to help you move around the entire application. This can be launched from the top Launcher in Mobile View',
        },
        {
            element: '#dashboardIntro',
            title: 'Dashboard Page',
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
            title: 'Log Out Button',
            intro: 'Well this is self explanatory hahah.',
        },
        {
            title: 'Lastly',
            intro: 'Take your time and enjoy this master piece i have created for you. Have a great time and Shout me out whenever and wherever you can. Saisere!!',
        },
    ];


    //sets the intro js to disabled after finishing and exiting the tour
    const [stepsEnabled, setStepsEnabled] = useState(true)

    //cookie to check if user hase already seen the tour for a day
    const cookies = new Cookies();

    const onExit = () => {

    };

    //check the next step so we can activate the aside if mobile device
    const checkNextItem = (nextStepIndex) => {

        switch (nextStepIndex) {
            case 6:
                //sispactch to set the navigation to true and show it
                stateDispatch({ type: SET_ASIDE_NAVIGATION_OPEN_APP_TOUR, data: true })
                break;

            case 14:
                //dispatch set aside navigation to false
                stateDispatch({ type: SET_ASIDE_NAVIGATION_OPEN_APP_TOUR, data: false })
                break;
        }
    }

    const whenTourCompleted = () => {

        //console.log('tour has been completed')
        //Set cookie so that the next time the tour does not load
        //setEnabled(false)
        let expires = new Date()
        cookies.set('showTour', 'show', { path: '/', expires: expires });
        console.log('completed tour and set cookie to', cookies.get('showTour'))

    }

    //default otions for the tour
    const options =
    {
        doneLabel: "Complete",
        exitOnOverlayClick: false,
        overlayOpacity: 0.8,
    };


    return (
        <Steps
            enabled={enableApplicationTour}
            steps={steps}
            initialStep={0}
            onExit={onExit}
            onAfterChange={checkNextItem}
            onComplete={whenTourCompleted}
            options={options}
        />
    )
}
