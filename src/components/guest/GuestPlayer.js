import React from 'react';
import '../../assets/Guests/style.css';
import $ from 'jquery';

class GuestPlayer extends React.Component {
    
    //Shows hides Playlist
    handleToggleList = () => {
        $(".lists, .list").toggleClass("active");
    };

    //Handles PlayPause
    handlePlayPauseAction = () => {
        $(".play-pause").toggleClass("active");
    }

    //handles Rambomize play action
    handleRandomAction = () => {
        $(".random").toggleClass("active");
    }

    //handles replay the playlist after finish
    handleReplayAction = () => {
        $(".repeat").toggleClass("active");
    }

    handleSelectedListItem = () => {
        $(".list_item").removeClass("selected");
        $(this).addClass("selected");
    }
    
    render(){
      return(
        <>
            <input type="text" id="date"/>
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
                        <div className="list-btn" onClick={this.handleToggleList}><span></span>
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
                        <a href="#about" className="random" onClick={this.handleRandomAction}>
                            <i className="fa fa-random"></i>
                        </a>
                        <a href="#about" className="prev">
                            <i className="fa fa-step-backward"></i>
                        </a>
                        <a href="#about" className="play-pause" onClick={this.handlePlayPauseAction}>
                            <i className="fa fa-pause"></i>
                        </a>
                        <a href="#about" className="stop">
                            <i className="fa fa-stop"></i>
                        </a>
                        <a href="#about" className="next">
                            <i className="fa fa-step-forward"></i>
                        </a>
                        <a href="#about" className="repeat" onClick={this.handleReplayAction}>
                            <i className="fa fa-repeat"></i>
                        </a>
                        <a href="#about" className="volume">
                            <i className="fa fa-volume-up"></i>
                        </a>
                    </div>
                </div>
                <div className="lists" ref={this.listRef}>
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
      );
    }
}

export default GuestPlayer;