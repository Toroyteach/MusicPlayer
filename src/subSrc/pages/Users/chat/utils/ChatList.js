import { useLayoutEffect, useRef } from 'react';
// import { useAuth } from '../../hooks/useAuth';
import { useChat } from '../../../../services/hooks/chatHooks/useChat'

function ChatList({ roomId }) {
    const containerRef = useRef(null);
    //const { user } = useAuth();
    const user = 'PvksVIX69lcl3KQKssH7784rVhC2'
    const chats = useChat(roomId);

    useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {chats.map((x) => (
                    <Chat
                        key={x.id}
                        chat={x}
                        isOwnChat={x.userId === user}
                    />
                ))}
            </ul>
        </div>
    );
}

function Chat({ chat, isOwnChat }) {
    const { username, text } = chat;

    return (
        <li className={['message', isOwnChat && 'own-message'].join(' ')}>

            <div className='row'>
                <div className='col-2'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 3" style={{ width: "80px", height: "100%", position:"relative", right:"10px" }} />
                </div>
                <div className='col-10'>
                    <h4 className="sender">{isOwnChat ? 'You' : username}</h4>
                    <div>{text}</div>
                </div>
            </div>

        </li>
    );
}

export { ChatList };