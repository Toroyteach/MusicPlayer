import React from 'react'

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

export default function OnlineListeners() {


  // //handles mause hover for active listeners
  const onEnter = ({ currentTarget }) => {
    gsap.to($(".item"), { duration: 0.5, y: -30, ease: Power2.easeInOut });
    $(".item").children(".thumb").addClass("shadow");
    $(".item").children(".connect_btn").addClass("shadow");
    gsap.to($(".item").children(".info"), { duration: 0.5, opacity: 1, ease: Power2.easeInOut });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to($(".item"), { duration: 0.5, y: 0, ease: Power2.easeInOut });
    $(".item").children(".thumb").removeClass("shadow");
    $(".item").children(".connect_btn").removeClass("shadow");
    gsap.to($(".item").children(".info"), { duration: 0.5, opacity: 0, ease: Power2.easeInOut });
  };


  return (
    <>
      <div className="page" id="curator">
        <div className="curator_title_wrapper"><span>LP</span>
          <div className="curator_line"></div>
          <div className="curator_title">Online Listeners</div>
          <div className="curator_line"></div><span>14</span>
        </div>

        <div className="curator_list">
          <div className="curator_list_content">
            <div className="connect_btn_wrapper item" onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div className="connect_btn">
                <div className="connect_btn_text">Toroyteach</div>
              </div>
            </div>

            <div className="curator_list_content_desc">Other <br />Listeners</div>

            <div className="item" onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div className="thumb"></div>
              <div className="info">
                <div className="name">Kiplaget</div>
                <div className="desc">Mamba</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
