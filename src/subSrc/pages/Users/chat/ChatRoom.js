import { Link, useParams } from 'react-router-dom';
//import { chatRoomList } from './chatRoomList';
import { useTranslation } from "react-i18next";
import { ChatInput } from './utils/ChatInput';
import { ChatList } from './utils/ChatList';

function ChatRoom() {

    //initiate tge translator
    const { t } = useTranslation();

    const params = useParams();

    const room = params.id;
    if (!room) {
        // TODO: 404
    }

    return (
        <>
            <div className="container_fluid">

                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-10 col-xl-10">

                        <div className="card" id="chat2">
                            <div className="card-header d-flex justify-content-between align-items-center p-3">
                                <h5 className="mb-0">{t("chat-rooms")}</h5>
                            </div>


                            <div className=''>
                                <div className="card-header d-flex justify-content-between align-items-center p-3">
                                    <h5 className="mb-0"><h2>{room.title}</h2></h5>
                                </div>

                                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "68vh", overflow: "auto" }}>

                                    <div>
                                        <Link to="/users/messages">⬅️ Back to Rooms</Link>
                                    </div>

                                    <div className="messages-container">
                                        <ChatList roomId={room} />
                                        <ChatInput roomId={room} />
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}

export { ChatRoom };