import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../FireBase/firebase.config';

export const UserContext = createContext(null);
const Auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const [userLoading, setUserLoading] = useState(true)
    //Register user
    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(Auth, email, password);
    }
    //Login user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(Auth, email, password);
    }

    //login with google account
    const googleLogin = () =>{
      return signInWithPopup(Auth, googleProvider);
    }

    //logout user 
    const logOut = () =>{
        return signOut(Auth);
    }

    // get login user data
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(Auth, (currentUser)=>{
        setUser(currentUser)
        setUserLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    


    const userInfo = {
        user,
        googleLogin,
        userLoading,
        registerUser,
        loginUser,
        logOut,
        googleLogin
    }
  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
