// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBwN7hIDoKp4ir1rOoDHLO2JSpdn12f8Lw",
    authDomain: "fir-a2c6a.firebaseapp.com",
    projectId: "fir-a2c6a",
    storageBucket: "fir-a2c6a.appspot.com",
    messagingSenderId: "488084480236",
    appId: "1:488084480236:web:8695dedd5e38c9c7aec5c9",
    measurementId: "G-QE0V4BREY3"
  };
  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth();
  export {auth, backend}