import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1AshxUYR-BNzqXesDQKnVZrj07L2YYrE",
    authDomain: "registr-f8bc7.firebaseapp.com",
    projectId: "registr-f8bc7",
    storageBucket: "registr-f8bc7.appspot.com",
    messagingSenderId: "952163966497",
    appId: "1:952163966497:web:531598f12e5debdfd10d60",
    measurementId: "G-4H3XTQJ8CB"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function logout() {
    return signOut(auth);
}
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}