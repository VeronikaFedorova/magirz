import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3RzG56PGEsUnU4GfqFo4VTO6_SdWHDqE",
    authDomain: "magirz.firebaseapp.com",
    projectId: "magirz",
    storageBucket: "magirz.appspot.com",
    messagingSenderId: "855385267120",
    appId: "1:855385267120:web:3f8170726f3846fc71d475",
    measurementId: "G-WF81ZQJSW0"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;