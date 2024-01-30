import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyBLscFpM6Yrzq3fzf4yMK1K0IHm_vOWNvk",
    authDomain: "simpleauth-4cfeb.firebaseapp.com",
    projectId: "simpleauth-4cfeb",
    storageBucket: "simpleauth-4cfeb.appspot.com",
    messagingSenderId: "154033287114",
    appId: "1:154033287114:web:8a4d75c5d9de35acd6e933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Out = document.querySelector(".sign-out");
const sideOut =document.getElementById("signOut");
// console.log(Out.textContent);
const userSignOut = async () => {
    await signOut(auth);
    window.location.assign("loginPage.html");
}
Out.addEventListener("click",userSignOut);
sideOut.addEventListener("click",userSignOut);

