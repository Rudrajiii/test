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

const userEmail = document.querySelector("#Email");
const password = document.querySelector("#pass");
const submit = document.querySelector("#hello");
const username = document.querySelector("#username");
const userSignUp = async() => {
    const signUpEmail = userEmail.value;
    const signUpPassword = password.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCradential)=>{
        const user = userCradential.user;
        window.location.assign("3D_landingPage.html");
        alert(`Hey ${username.value} , Your Account has been created Successfully!!!`);
        // location.reload();
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const addUpError = (errorCode + errorMessage);
        if(addUpError ==="auth/weak-passwordFirebase: Password should be at least 6 characters (auth/weak-password)."){
           alert("Password should be at least 6 characters");
        }
        else{
            alert("Invalid email address");
        }
    })
}
submit.addEventListener('click',userSignUp);
const li = document.querySelectorAll(".popUp");
for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click',function(){
        alert("Please Login / Sign Up to your Account First!!!");
    });
}

