import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    limit,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuQsxmbACpfB3M_1hZTD8DcqN_E1UMAoc",

    authDomain: "musicapplication-16b96.firebaseapp.com",

    projectId: "musicapplication-16b96",

    storageBucket: "musicapplication-16b96.appspot.com",

    messagingSenderId: "962660042151",

    appId: "1:962660042151:web:741c9c16a1e1ef671b6282",

    measurementId: "G-16JEB447WQ"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendChat(roomId, user, text, userPic, username) {
    try {

        const textObj = {
            roomId: roomId, 
            text: text, 
            timestamp: serverTimestamp(),
            userId: user,
            userPic: userPic,
            username: username
        };

        await addDoc(collection(db, 'messages', roomId, 'usersMessages'), textObj);

    } catch (error) {
        console.error(error);
    }
}

function getChats(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'messages', roomId, 'usersMessages'),
            orderBy('timestamp', 'asc'), limit(50)
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}

function getRooms(callback) {
    return onSnapshot(
        query(
            collection(db, 'messages')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}

export { sendChat, getChats, getRooms };