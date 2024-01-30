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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector("#Email");
const password = document.querySelector("#pass");
const submit = document.querySelector("#hello");
const userSignIn = async() => {
    const signInEmail = userEmail.value;
    const signInPassword = password.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCradential)=>{
        const user = userCradential.user;
        alert("Successfully signed in!!!");
        window.location.assign("3D_landingPage.html");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        alert("Something went wrong , Please try again!!!");
    })
}
submit.addEventListener('click',userSignIn);
const li = document.querySelectorAll(".popUp");
for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click',function(){
        alert("Please Login / Sign Up to your Account First!!!");
    });
}

