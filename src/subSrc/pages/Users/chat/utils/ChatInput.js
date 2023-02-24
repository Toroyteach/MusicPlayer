
import { useState } from 'react';
// import { useAuth } from '../../hooks/useAuth';
import { sendChat } from '../../../../services/firebase/firebase'

import { useTranslation } from "react-i18next";

function ChatInput({ roomId }) {
    //const { user } = useAuth();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendChat(roomId, 'PvksVIX69lcl3KQKssH7784rVhC2', value);
        //PvksVIX69lcl3KQKssH7784rVhC2
        //8MhNWoP6B4V0RwNmfUBadSieRIj2
        setValue('');
    };

    //initiate tge translator
    const { t } = useTranslation();

    return (
        <>

            {/* <div className="card-footer text-muted justify-content-start align-items-center p-3">

                <form onSubmit={handleSubmit} className="message-input-container">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 3" style={{ width: "40px", height: "100%" }} />

                    <input
                        type="text"
                        placeholder={t("type-message")}
                        value={value}
                        onChange={handleChange}
                        className="form-control form-control-lg message-input"
                        required
                        minLength={1}
                    />

                    <button type="submit" disabled={value < 1} className="send-message">
                        <i className="fas fa-paper-plane"></i>
                    </button>

                </form>

            </div> */}

            <div className="chat__conversation-panel">

                <form onSubmit={handleSubmit}>

                    <div className="chat__conversation-panel__container">
                        {/* <button className="chat__conversation-panel__button panel-item btn-icon add-file-button">
                            <svg className="feather feather-plus sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <button className="chat__conversation-panel__button panel-item btn-icon emoji-button">
                            <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                        </button> */}

                        <input type="text" placeholder={t("type-message")} value={value} onChange={handleChange} className="chat__conversation-panel__input panel-item border border-success" required minLength={1}/>

                        <button className="chat__conversation-panel__button panel-item btn-icon send-message-button" disabled={value < 1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="1036">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>

                </form>
            </div>

        </>
    );
}

export { ChatInput };