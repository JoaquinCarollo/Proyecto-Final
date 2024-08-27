import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyBKuSbkranuxW7Lwc1f82kmo_efUuKF8tA",
  authDomain: "ultracomics-fca16.firebaseapp.com",
  projectId: "ultracomics-fca16",
  storageBucket: "ultracomics-fca16.appspot.com",
  messagingSenderId: "626365567198",
  appId: "1:626365567198:web:8c3ba68b5a5a57b171f24f",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
