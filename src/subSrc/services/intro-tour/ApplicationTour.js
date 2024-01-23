import React, { useContext, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';


import appContext from '../context/appContext.js';

//import cookies to stop showing the tour
import Cookies from 'universal-cookie';

//import the reducer function states to make consistent states
import {

    SET_ASIDE_NAVIGATION_OPEN_APP_TOUR,
    SET_ENABLE_APPLICATION_TOUR,

} from '../context/appState/stateTypes';
import { t } from 'i18next';

import { useTranslation } from "react-i18next";
import '../../services/localization/i18n';
import { set_aside_navigation_open_app_tour, set_enable_application_tour } from '../redux/app/reducer/appReducer.js';


export default function ApplicationTour() {

    // const {
    //     stateDispatch,
    //     userData: {
    //         username,
    //     },
    //     appSettings: {
    //         enableApplicationTour,
    //     },
    // } = useContext(appContext)

    const userData = useSelector((state) => state.user.data)
    const appData = useSelector((state) => state.app.data)
    const dispatch = useDispatch()

    const { t } = useTranslation();

    //the steps in the application
    const steps = [
        {
            title: t("welcome") + userData.username,
            intro: t("intro-text"),
        },
        {
            element: '#wrapper',
            title: t("music-section"),
            intro: t("music-section-text"),
        },
        {
            element: '#musicSubNavIntro',
            title: t("music-section-navigation"),
            intro: t("music-section-navigation-text"),
        },
        {
            element: '#musicPlayerIntro',
            title: t("main-music-player"),
            intro: t("main-music-player-text"),
        },
        {
            element: '#shortNotificationIntro',
            title: t("quick-navigation"),
            intro: t("quick-navigation-text"),
        },
        {
            element: '#languageSelectorIntro',
            title: t("language-section"),
            intro: t("language-section-text"),
        },
        {
            element: '#footerIntro',
            title: t("footer-section"),
            intro: t("footer-section-text"),
        },
        {
            element: '#sidenav-main',
            title: t("main-navigation"),
            intro: t("main-navigation-text"),
        },
        {
            element: '#dashboardIntro',
            title: t("dashboard-page"),
            intro: t("dashboard-page-text"),
        },
        {
            element: '#messagesIntro',
            title: t("message-page"),
            intro: t("message-page-text"),
        },
        // {
        //     element: '#notificationsIntro',
        //     title: t("notifications-page"),
        //     intro: t("notifications-page-text"),
        // },
        {
            element: '#aboutIntro',
            title: t("about-page"),
            intro: t("about-page-text"),
        },
        {
            element: '#profileIntro',
            title: t("profile-page"),
            intro: t("profile-page-text"),
        },
        {
            element: '#logoutIntro',
            title: t("logout-button"),
            intro: t("logout-button-text"),
        },
        {
            title: t("lastly"),
            intro: t("lastly-text"),
        },
    ];


    //sets the intro js to disabled after finishing and exiting the tour
    const [stepsEnabled, setStepsEnabled] = useState(true)

    //cookie to check if user hase already seen the tour for a day
    const cookies = new Cookies();

    const onExit = () => {

        dispatch(set_enable_application_tour(false))
        // stateDispatch({ type: SET_ENABLE_APPLICATION_TOUR, data: false })

    };

    //check the next step so we can activate the aside if mobile device
    const checkNextItem = (nextStepIndex) => {

        switch (nextStepIndex) {
            case 6:
                //sispactch to set the navigation to true and show it
                dispatch(set_aside_navigation_open_app_tour(true))

                // stateDispatch({ type: SET_ASIDE_NAVIGATION_OPEN_APP_TOUR, data: true })
                break;

            case 14:
                //dispatch set aside navigation to false
                dispatch(set_aside_navigation_open_app_tour(false))

                // stateDispatch({ type: SET_ASIDE_NAVIGATION_OPEN_APP_TOUR, data: false })
                break;
        }
    }

    const whenTourCompleted = () => {

        const expires = new Date()

        cookies.set('showTour', 'show', { path: '/' }); // expires: expires, secure: true, sameSite: 'none'

        dispatch(set_enable_application_tour(false))

        // stateDispatch({ type: SET_ENABLE_APPLICATION_TOUR, data: false })

    }

    //default otions for the tour
    const options =
    {
        doneLabel: t("complete"),
        nextLabel: t("next"),
        prevLabel: t("back"),
        exitOnOverlayClick: false,
        overlayOpacity: 0.8,
    };


    return (
        <Steps
            enabled={appData.enableApplicationTour}
            steps={steps}
            initialStep={0}
            onExit={onExit}
            onAfterChange={checkNextItem}
            onComplete={whenTourCompleted}
            options={options}
        />
    )
}
