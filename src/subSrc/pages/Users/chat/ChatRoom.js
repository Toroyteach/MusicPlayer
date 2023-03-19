import { Link, useParams, useNavigate } from 'react-router-dom';
//import { chatRoomList } from './chatRoomList';
import { useTranslation } from "react-i18next";
import { ChatInput } from './utils/ChatInput';
import { ChatList } from './utils/ChatList';

function ChatRoom() {

    //initiate tge translator
    const { t } = useTranslation();

    const navigate = useNavigate();

    const params = useParams();

    const room = params.id;
    if (!room) {
        navigate("/mising");
    }

    return (
        <>
            <div className="alert alert-primary" role="alert"> {t("welcome-to-chat-room-about")}
                {room.title}. Now chattaway
            </div>

            <div className="--dark-theme" id="chat">
                <div className="chat__conversation-board">

                    <ChatList roomId={room} />

                </div>

                <ChatInput roomId={room} />

            </div>
        </>
    );
}

export { ChatRoom };