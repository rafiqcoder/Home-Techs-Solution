
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBIQDEO3L8xENWCCvZQstjWlx8U08VIJGE",
    authDomain: "hometechbd.firebaseapp.com",
    projectId: "hometechbd",
    storageBucket: "hometechbd.appspot.com",
    messagingSenderId: "370873270268",
    appId: "1:370873270268:web:4bad7b9a7cb611c377bc79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);