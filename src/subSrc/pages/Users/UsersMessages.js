import React from 'react'

import { Link } from 'react-router-dom';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

//import { chatRoomList } from './chat/chatRoomList';

import { useRoom } from '../../services/hooks/chatHooks/useRoom';

export default function UsersMessages() {

  //initiate tge translator
  const { t } = useTranslation();

  const chatRoomList = useRoom()

  return (
    <div className="container_fluid">

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-10 col-xl-10">

          <div className="card" id="chat2">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">{t("chat-rooms")}</h5>
            </div>

            <p className="card-header d-flex justify-content-between align-items-center p-3">Choose a room to join</p>

            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "60vh", overflow: "auto" }}>

              <ul className="chat-room-list">
                {chatRoomList.map((room) => (
                  <li key={room.id}>
                    <Link to={`/users/messages/room/${room.roomId}`}>{room.title}</Link>
                  </li>
                ))}
              </ul>

            </div>

          </div>


        </div>
      </div>

    </div>
  )
}
