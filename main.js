import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'


const FirebaseConfig = {
    apiKey: "AIzaSyA2VH9s-D3FUrhhxPER1tmzCnYYZL83gLo",
    authDomain: "unity-ff7cc.firebaseapp.com",
    databaseURL: "https://unity-ff7cc-default-rtdb.firebaseio.com",
    projectId: "unity-ff7cc",
    storageBucket: "unity-ff7cc.appspot.com",
    messagingSenderId: "177895607834",
    appId: "1:177895607834:web:da017a0139fde1c29a4ba3",
    measurementId: "G-7P93VSKKXL"
  };


const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);



