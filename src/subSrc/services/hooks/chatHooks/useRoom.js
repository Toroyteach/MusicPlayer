import { useState, useEffect } from 'react';
import { getRooms } from '../../firebase/firebase'

function useRoom() {
    const [rooms, setRoom] = useState([]);

    useEffect(() => {
        const unsubscribe = getRooms(setRoom);

        return unsubscribe;
    }, []);

    return rooms;
}

export { useRoom };