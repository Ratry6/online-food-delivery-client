import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();


const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoader, setIsLoader] = useState(true);
    
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();



//google sign in
const signInUsingGoogle = ()=>{
   return  signInWithPopup(auth, googleProvider);
  
    
}

//sign out
const logOut = () =>{
    signOut(auth)
    .then(()=>{
            setUser({});
    })
}

//whether user auth state changed or not
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            
            setUser(user);
        }
        else {
            setUser({});
        }
        setIsLoader(false);

        
    });
    return () => unsubscribe;
}, [])

return{
    signInUsingGoogle,
    user,
    logOut,
    isLoader
}

}

export default useFirebase;

