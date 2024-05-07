
import { FirebaseError, initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCNyE88xC2JdXK-0CoZQkps2E8UxMqYxFI",
  authDomain: "moringaflix.firebaseapp.com",
  projectId: "moringaflix",
  storageBucket: "moringaflix.appspot.com",
  messagingSenderId: "999224675216",
  appId: "1:999224675216:web:12dd583fe6b6a667170115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password)=>{
    try {
        const res= await createUserWithEmailAndPassword(auth, email, password); 
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    }  catch (error) {
        if(err instanceof FirebaseError){
            console.log("reached catch")
            console.log(err);
            toast.error(err.code.split('/')[1].split('-').join(" "));
        } else{
            alert("Unexpected error")
        }
  }
}

const logout = async()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout}