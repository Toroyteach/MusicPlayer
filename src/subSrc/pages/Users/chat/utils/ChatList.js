import { useLayoutEffect, useRef, useContext } from 'react';
import { useSelector } from 'react-redux';
// import { useAuth } from '../../hooks/useAuth';
import { useChat } from '../../../../services/hooks/chatHooks/useChat'

import appContext from '../../../../services/context/appContext';

import endpoinUrl from '../../../../services/api/base/endpointUrl';

import imageAvatar from '../../../../assets/users/img/imageavatar.png'

function ChatList({ roomId }) {
    const containerRef = useRef(null);

    // const {
    //     userData: {
    //         firebaseUid,
    //     },
    // } = useContext(appContext)

    const userData = useSelector((state) => state.user.data)

    const user = 'PvksVIX69lcl3KQKssH7784rVhC2'
    const chats = useChat(roomId);

    useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <>

            {(chats.length == 0) &&
                <>
                    <div className="alert alert-warning" role="alert">
                        Opps looks like there No Chats Yet. Be the first to Drop one.
                    </div>
                    <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </>
            }

            <div ref={containerRef}>
                {chats.map((x) => (
                    <Chat
                        key={x.id}
                        chat={x}
                        isOwnChat={x.userId === userData.firebaseUid}
                    />
                ))}
            </div>

        </>
    );
}

function Chat({ chat, isOwnChat }) {
    const { username, text, userPic } = chat;

    return (
        <>
            <div className={['chat__conversation-board__message-container', isOwnChat && 'reversed'].join(' ')}>

                <div className='chartBorder'>

                    <div className={['chat__conversation-board__message__person', isOwnChat && 'ownChat'].join(' ')}>
                        <div className="chat__conversation-board__message__person__avatar">
                            <img src={(userPic != 'imageavatar.png') ? userPic : imageAvatar} alt={username} />
                        </div>
                    </div>
                    <span className="chat__conversation-board__message__person__nickname">{username}</span>

                    <div className="chat__conversation-board__message__context">
                        {/* <h4 className="sender">{isOwnChat ? 'You' : username}</h4> */}
                        <div className="chat__conversation-board__message__bubble text-body">
                            <span>{text}</span>
                        </div>
                    </div>

                </div>


                {/* <div className="chat__conversation-board__message__options">

                    <button className="btn-icon chat__conversation-board__message__option-button option-item emoji-button">
                        <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                    </button>

                    <button className="btn-icon chat__conversation-board__message__option-button option-item more-button">
                        <svg className="feather feather-more-horizontal sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                    </button>

                </div> */}

            </div>
        </>
    );
}

export { ChatList };