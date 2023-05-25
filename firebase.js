// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB9FdQx3cBSe3_3eJ3wFF7nm1QcmgREBNA",
	authDomain: "reactnativeauthexample-aab7c.firebaseapp.com",
	projectId: "reactnativeauthexample-aab7c",
	storageBucket: "reactnativeauthexample-aab7c.appspot.com",
	messagingSenderId: "133478942465",
	appId: "1:133478942465:web:e31e5c745f113e161ebd00",
};

// Initialize Firebase
let app;

if (getApps.length === 0) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApp();
}

const auth = getAuth();

export { auth };
