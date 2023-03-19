import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

//import { chatRoomList } from './chat/chatRoomList';

import { useRoom } from '../../services/hooks/chatHooks/useRoom';

export default function UsersMessages() {

  //initiate tge translator
  const { t } = useTranslation();

  const chatRoomList = useRoom()

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chatRoomList.length == 0) {
      setLoading(false)
    }
  }, [chatRoomList])

  return (
    <div className="container-fluid" style={{ "position":"relative;", "top":"50px;" }}>

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-10 col-xl-10">

          <div className="card" id="chat2">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">{t("chat-rooms")}</h5>
            </div>

            <p className="card-header d-flex justify-content-between align-items-center p-3">{t("choose-room-to-join")}</p>

            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "60vh", overflow: "auto" }}>

              {loading &&
                <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              }

              {!loading &&
                <ul className="chat-room-list">
                  {chatRoomList.map((room) => (
                    <li key={room.id}>
                      <Link to={`/users/messages/room/${room.roomId}`} className="text-message-list">{room.title}</Link>
                    </li>
                  ))}
                </ul>
              }

            </div>

          </div>


        </div>
      </div>

    </div>
  )
}
