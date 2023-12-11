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
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    measurementId: process.env.REACT_APP_RAPID_SHAZAM_API_KEY

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