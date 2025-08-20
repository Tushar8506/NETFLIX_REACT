import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDtOFNYNqwUfQLFg-_-MoLwIIlS4jwmE8Y",
  authDomain: "netflix-clone-72bec.firebaseapp.com",
  projectId: "netflix-clone-72bec",
  storageBucket: "netflix-clone-72bec.firebasestorage.app",
  messagingSenderId: "883302194677",
  appId: "1:883302194677:web:84b901f9dcd1e21ba494bc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async(name,email,password)=>{
try {
    const res =await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user;
    await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
    })
} catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
}
}

const login = async(email,password)=>{
   try {
     await signInWithEmailAndPassword(auth,email,password)
   } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}

const logout = async()=>{
    signOut(auth)
}

export{auth,db,login,signup,logout}