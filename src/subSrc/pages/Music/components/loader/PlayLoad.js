import React from "react";

//import bootstrap loading spinner for when loading audio
import Spinner from 'react-bootstrap/Spinner'

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

const PlayLoad = (props) => {

    
    let { isLoading, sourceButton, isPlaying } = props;


    // if (!isPlaying) {

    //     gsap.to($(".btn-pause"), { duration: 0.5, x: 20, opacity: 0, display: "none", scale: 0.3, ease: Power2.easeInOut });
    //     gsap.fromTo($(".btn-play"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut });
  
  
    //   } else {
  
    //     gsap.to($(".btn-play"), { duration: 0.5, x: 20, opacity: 0, scale: 0.3, display: "none", ease: Power2.easeInOut });
    //     gsap.fromTo($(".btn-pause"), { duration: 0.2, x: -20, opacity: 0, scale: 0.3, display: "none" }, { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut });
  
  
    //   }

    if (isLoading) {

        if (sourceButton === 'footer') {

            return (
                <>
                    <Spinner className='footerPlayerSpinner' size="sm" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </>
            )

        } else {

            return (
                <>
                    <Spinner className='mainPlayerSpinner' size="sm" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </>
            )

        }


    } else {

        if (!isPlaying) {

            return (
                <>
                    <i className="btn-play fa fa-play footerPlayer" aria-hidden="true"></i>
                    <i className="btn-pause fa fa-pause footerPlayer" aria-hidden="true" ></i>
                </>
            )

        } else {

            return (
                <>
                    <i className="btn-play fa fa-play footerPlayer" aria-hidden="true"></i>
                    <i className="btn-pause fa fa-pause footerPlayer" aria-hidden="true" ></i>
                </>
            )

        }

    }
};

export default PlayLoad;
