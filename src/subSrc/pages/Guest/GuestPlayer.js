import React, { useState } from 'react';

import '../../assets/guest/style.css'
import $ from 'jquery';

import { useTranslation } from "react-i18next";
// import "../../services/localization/i18n";

import { Link } from 'react-router-dom';

export default function GuestPlayer() {

    //initiate tge translator
    const { t } = useTranslation();

    //Shows hides Playlist
    const handleToggleList = () => {
        $(".lists, .listG").toggleClass("active");
    };

    //Handles PlayPause
    const handlePlayPauseAction = () => {
        $(".play-pause").toggleClass("active");
    }

    //handles Rambomize play action
    const handleRandomAction = () => {
        $(".random").toggleClass("active");
    }

    //handles replay the playlist after finish
    const handleReplayAction = () => {
        $(".repeat").toggleClass("active");
    }

    const handleSelectedListItem = () => {
        $(".list_item").removeClass("selected");
        $(this).addClass("selected");
    }

    return (
        <div className='GuestBody'>

            <header id="header" className='header-top'>
                <div className="container">

                    <h1><a href="https://toroyteach.com">Toroyteach</a></h1>

                    <nav id="navbarg" className="navbarg">
                        <ul>
                            <li><a className="nav-link" href="/#">{t("home")}</a></li>
                            <li><a className="nav-link" href="/#">{t("about")}</a></li>
                            <li><a className="nav-link" href="/#">{t("resume")}</a></li>
                            <li><a className="nav-link" href="/#">{t("services")}</a></li>
                            <li><a className="nav-link" href="/#">{t("portfolio")}</a></li>
                            <li><a className="nav-link active" href="/#">{t("music")}</a></li>
                            <li><a className="nav-link" href="/#">{t("contact")}</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

            <section id="mixes" className="section services section-show">
                <div className="container guestContainer">
                    <div className="section-title">
                        <h2>{t("house-music-mix")}</h2>
                    </div>

                    <div className='upperBox'>
                        <div className="music-box">
                            <div className="album">
                                <div className="photo">
                                </div>
                                <div className="infos">
                                    <div className="song">
                                        <span>Intuition</span><small>Toroyteach</small>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard">
                                <div className="listG">
                                    <div className="list-btn" onClick={handleToggleList}><span></span>
                                    </div>
                                </div>
                                <div className="player">
                                    <div className="time">
                                        <small className="current">0:56</small> / <small className="duration">1:12:04</small>
                                    </div>
                                    <div className="time-rail">
                                        <div className="thumb"></div>
                                        <div className="track"></div>
                                    </div>
                                </div>
                                <div className="action-button">
                                    <a href="#about" className="prev">
                                        <i className="fa fa-step-backward"></i>
                                    </a>
                                    <a href="#about" className="play-pause" onClick={handlePlayPauseAction}>
                                        <i className="fa fa-pause"></i>
                                    </a>
                                    <a href="#about" className="next">
                                        <i className="fa fa-step-forward"></i>
                                    </a>
                                    <a href="#about" className="repeat" onClick={handleReplayAction}>
                                        <i className="fa fa-repeat"></i>
                                    </a>
                                    <a href="#about" className="volume">
                                        <i className="fa fa-volume-up"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="lists">
                                <div className="label">{t("playlist")}</div>
                                <div className="box">

                                </div>
                                <ul>
                                    <li><span>Magnifico<small>Toroyteach</small></span><em>1:13:59</em></li>
                                    <li><span>QuePasa<small>Toroyteach</small></span><em>1:13:59</em></li>
                                    <li><span>Byte<small>Toroyteach</small></span><em>1:13:59</em></li>
                                    <li><span>Mamba<small>Toroyteach</small></span><em>1:13:59</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section-title footer-title">
                        <Link to="/music">
                            <h2>{t("click-here-to-sign-in")}</h2>
                        </Link>
                    </div>

                </div>
            </section>

            <div className="credits">
                {t("designed-by")}<a href="https://bellenorthedynamics.com/"> Toroyteach</a>
            </div>



        </div>
    )
}