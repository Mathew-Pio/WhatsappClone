// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCDLx8XhupzBCpb90dkFnwVFfd_YL_GE98",
    authDomain: "whatsapp-clone-44e4f.firebaseapp.com",
    projectId: "whatsapp-clone-44e4f",
    storageBucket: "whatsapp-clone-44e4f.appspot.com",
    messagingSenderId: "1085395750929",
    appId: "1:1085395750929:web:c3d3a681b34cbd2cf061b0",
    measurementId: "G-RFFQRRH7DV"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);