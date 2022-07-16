import React from 'react';
import '../../assets/Guests/style.css';
import $ from 'jquery';

export default function GuestPlayer() {

    //Shows hides Playlist
    const handleToggleList = () => {
        $(".lists, .list").toggleClass("active");
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
        <>
            <div className="music-box">
                <div className="album">
                    <div className="photo">
                    </div>
                    <div className="infos">
                        <div className="song">
                            <span>Flamingo</span><small>Oliver Heldens</small>
                        </div>
                    </div>
                </div>
                <div className="dashboard">
                    <div className="list">
                        <div className="list-btn" onClick={handleToggleList}><span></span>
                        </div>
                    </div>
                    <div className="player">
                        <div className="time">
                            <small className="current">0:56</small> / <small className="duration">3:04</small>
                        </div>
                        <div className="time-rail">
                            <div className="thumb"></div>
                            <div className="track"></div>
                        </div>
                    </div>
                    <div className="action-button">
                        <a href="#about" className="random" onClick={handleRandomAction}>
                            <i className="fa fa-random"></i>
                        </a>
                        <a href="#about" className="prev">
                            <i className="fa fa-step-backward"></i>
                        </a>
                        <a href="#about" className="play-pause" onClick={handlePlayPauseAction}>
                            <i className="fa fa-pause"></i>
                        </a>
                        <a href="#about" className="stop">
                            <i className="fa fa-stop"></i>
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
                    <div className="label">MENU</div>
                    <div className="box">

                    </div>
                    <ul>
                        <li><span>Flamingo<small>Oliver Heldens</small></span><em>3:04</em></li>
                        <li><span>Flamingo<small>Oliver Heldens</small></span><em>3:04</em></li>
                        <li><span>Flamingo<small>Oliver Heldens</small></span><em>3:04</em></li>
                        <li><span>Flamingo<small>Oliver Heldens</small></span><em>3:04</em></li>
                    </ul>
                </div>
            </div>
        </>
    )
}