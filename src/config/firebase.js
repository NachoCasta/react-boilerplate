import firebase from "firebase";

// Firebase config
const config = {
	apiKey: "AIzaSyAuh4h6iyvkVtAPN4flykBP2ITpsanH3Dw",
	authDomain: "react-boilerplate-nachocasta.firebaseapp.com",
	databaseURL: "https://react-boilerplate-nachocasta.firebaseio.com",
	projectId: "react-boilerplate-nachocasta",
	storageBucket: "react-boilerplate-nachocasta.appspot.com",
	messagingSenderId: "635335499477",
	appId: "1:635335499477:web:65fba81a37c48b8b"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
