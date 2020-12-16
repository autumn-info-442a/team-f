import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from 'firebase/app';

// The core Firebase JS SDK is always required and must be listed first 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0sp2-p_gS_S16Tqksc_GrsmdkndWkprA",
    authDomain: "info442-fresh-take.firebaseapp.com",
    projectId: "info442-fresh-take",
    storageBucket: "info442-fresh-take.appspot.com",
    messagingSenderId: "218385463861",
    appId: "1:218385463861:web:0821a30bcf0e8fbdee8f7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById("root"));
