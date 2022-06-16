import React, { PureComponent } from 'react'

import '../../assets/Users/style.css';
import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

export default class Listeners extends PureComponent {

    //handles mause hover for active listeners
    handleListItemOnMouseEnterAction = () => {
        gsap.to($(".item"), {duration:0.5, y: -30, ease: Power2.easeInOut });
              $(".item").children(".thumb").addClass("shadow");
              $(".item").children(".connect_btn").addClass("shadow");
              gsap.to($(".item").children(".info"), {duration:0.5, opacity: 1,	ease: Power2.easeInOut	});
  
        gsap.to($(".item"), {duration:0.5, y: 0, ease: Power2.easeInOut });
              $(".item").children(".thumb").removeClass("shadow");
              $(".item").children(".connect_btn").removeClass("shadow");
              gsap.to($(".item").children(".info"), {duration:0.5, opacity: 0,	ease: Power2.easeInOut	});
      }

    //handles the individual song list when clicked
      handleListItemOnMouseExitAction = () => {

      }


    //handles active listeners on click
    handleListnersItemClick = () => {
        var mainToPlaylist = gsap.TimelineMax({});
  
        // Hide
        mainToPlaylist.to( $("#curator"), 0.8, { display: "none", opacity: 0, scale: 1.1, ease: Power2.easeInOut }, 0);
      }

  render() {
    return (
        <>
            <div className="page" id="curator">
                <div className="curator_title_wrapper"><span>LP</span>
                  <div className="curator_line"></div>
                  <div className="curator_title">Listeners</div>
                  <div className="curator_line"></div><span>14</span>
                </div>

                <div className="curator_list">
                  <div className="curator_list_content">
                    <div className="connect_btn_wrapper item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="connect_btn">
                        <div className="connect_btn_text">Connect <br/>SoundCloud</div>
                      </div>
                    </div>

                    <div className="curator_list_content_desc">Or Select <br/>a Listener of <br/>L.P.			</div>

                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                    <div className="item" onMouseEnter={this.handleListItemOnMouseEnterAction} onMouseLeave={this.handleListItemOnMouseExitAction} onClick={this.handleListnersItemClick}>
                      <div className="thumb"></div>
                      <div className="info">
                        <div className="name">Fantasy</div>
                        <div className="desc">Sam</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
        </>
    )
  }
}
