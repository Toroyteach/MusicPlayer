
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

            <div className="card-footer text-muted justify-content-start align-items-center p-3">

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

            </div>

        </>
    );
}

export { ChatInput };