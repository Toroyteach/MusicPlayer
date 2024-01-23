import React, { useContext } from 'react'

import { useSelector } from 'react-redux';

import appContext from '../../../services/context/appContext';

import endpoinUrl from '../../../services/api/base/endpointUrl';

import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

export default function OnlineListeners() {

  // const {
  //   userData: {
  //     username,
  //     userImage,
  //     allowOnlineStatus,
  //   },
  //   appSettings: {
  //     onlineList,
  //   },
  // } = useContext(appContext)

  //initiate tge translator
  const { t } = useTranslation();

  const userDta = useSelector((state) => state.user.data)
  const appData = useSelector((state) => state.app.data)

  // //handles mause hover for active listeners
  const onEnter = (event) => {
    const item = event.currentTarget;

    gsap.to(item, { duration: 0.5, y: -30, ease: Power2.easeInOut });
    $(item).children(".thumb").addClass("shadow");
    $(item).children(".connect_btn").addClass("shadow");
    gsap.to($(item).children(".info"), { duration: 0.5, opacity: 1, ease: Power2.easeInOut });
  };

  const onLeave = (event) => {
    const item = event.currentTarget;

    gsap.to(item, { duration: 0.5, y: 0, ease: Power2.easeInOut });
    $(item).children(".thumb").removeClass("shadow");
    $(item).children(".connect_btn").removeClass("shadow");
    gsap.to($(item).children(".info"), { duration: 0.5, opacity: 0, ease: Power2.easeInOut });
  };


  return (
    <>
      <div className="page" id="curator">
        <div className="curator_title_wrapper"><span>LP</span>
          <div className="curator_line"></div>
          <div className="curator_title">{t("online-listeners")}</div>
          <div className="curator_line"></div><span>14</span>
        </div>

        <div className="curator_list">
          <div className="curator_list_content row">

            <div className="connect_btn_wrapper item col" onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div className="connect_btn">
                <div className="connect_btn_text">
                  <img src={userDta.userImage} width={"100%"} class="rounded-circle" alt="Cinque Terre" />
                  <div>{userDta.username}</div>
                </div>
              </div>
            </div>

            <div className="curator_list_content_desc col"><br /> Other Listners</div>

            {userDta.allowOnlineStatus &&
              <>
                {(appData.onlineList || []).map((user, index) => {
                  if (user.userName === userDta.username) {
                    // Condition to check if the user's name is equal to 'username'
                    return;

                  } else {

                    return (
                      // Your custom JSX for this user
                      <div key={index} className="item col" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <div className="thumb"><img src={user.displayPicUrl} alt="User Pic" width={"100%"} class="rounded-circle" /></div>
                        <div className="info">
                          <div className="name">{user.userName}</div>
                          <div className="desc">{user.activeSong}</div>
                        </div>
                      </div>


                    );
                  }
                })}
              </>
            }

          </div>

        </div>
      </div>
    </>
  )
}
