import React from 'react'
import db, { auth, googleProvider } from '../firebase'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login({setUser}) {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        auth
        .signInWithPopup(googleProvider)
        .then((result)=>{
            const newUser = {
                fullname: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }
            navigate("/");
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            db.collection("users").doc(result.user.email).set(newUser);
        })
        .catch((err) => alert(err.message));

    };
    /*-en proceso-*/
    const signInWithTwitter = () => {
        auth
        .signInWithPopup(googleProvider)
        .then((result)=>{
            const newUser = {
                fullname: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }
            navigate("/");
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            db.collection("users").doc(result.user.email).set(newUser);
        })
        .catch((err) => alert(err.message));

    };
    /*-en proceso-*/
    const signInWithFacebook = () => {
        auth
        .signInWithPopup(googleProvider)
        .then((result)=>{
            const newUser = {
                fullname: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }
            navigate("/");
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            db.collection("users").doc(result.user.email).set(newUser);
        })
        .catch((err) => alert(err.message));
    };
  return (
    <div className="login">
        <div className="login-container">
            <img className="login-logo" src="./chat-logo2.png" alt =""/>
            <p className="login-name">Chat-Web</p>
            <button className="login-btn" onClick={signInWithGoogle}>
                <img src="./google-logo.png" alt=""/>
                Login with Google
            </button>
            <button className="login-btn" onClick={signInWithTwitter}>
                <img src="./twitter-logo.png" alt=""/>
                Login with Twitter
            </button>
            <button className="login-btn" onClick={signInWithFacebook}>
                <img src="./facebook-logoo.png" alt=""/>
                Login with facebook
            </button>
        </div>
    </div>
  )
}

export default Login