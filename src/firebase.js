import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDd_nZmq2hdU_5wKEXjK7xmB8TI4r2hrq0",
    authDomain: "stylenhomes.firebaseapp.com",
    projectId: "stylenhomes",
    storageBucket: "stylenhomes.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456",
    measurementId: "G-ABCDEFGH"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { database, storage, auth };

