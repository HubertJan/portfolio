import { User } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDqZ7ji-vcivMOQsIpNVsTP-h7QfLhjyT0",
    authDomain: "hubertjan-b21e5.firebaseapp.com",
    projectId: "hubertjan-b21e5",
    storageBucket: "hubertjan-b21e5.appspot.com",
    messagingSenderId: "1045878903974",
    appId: "1:1045878903974:web:051e6e6bbd325d64c25067"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export async function postFirebaseMessage(messageData: { email: string, name: string, message: string }) {
    console.log( await firestore.collection('messages').doc().set(
        messageData
    ));
}