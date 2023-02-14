import { useState, useEffect } from 'react';
import { getChats } from '../../firebase/firebase'

function useChat(roomId) {
    const [chats, setChat] = useState([]);

    useEffect(() => {
        const unsubscribe = getChats(roomId, setChat);

        return unsubscribe;
    }, [roomId]);

    return chats;
}

export { useChat };