import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
    GithubAuthProvider,createUserWithEmailAndPassword ,sendEmailVerification,signInWithEmailAndPassword
    ,updateProfile} from "firebase/auth";
import { useState, useEffect } from 'react';


import {useHistory} from "react-router-dom";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const UseFirebase = () => {

    let  [userlocation,setLocation]=useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [useremail, setuserEmail] = useState("");
    const [userpassword, setuserPassword] = useState("");


    const auth = getAuth();
    const getName = e =>{
        setName(e.target.value);
    }

    const getEmail = e =>{
        setEmail(e.target.value);
    }

    const getPassword = e =>{
        setPasword(e.target.value);
    }

    const userEmail = e => {
        setuserEmail(e.target.value)
    }

    const userPassword = e => {
        setuserPassword(e.target.value)
    }
    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
    }

    const userRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(email.length === 0){
            setError("Please enter your email")
            return;
        }
        if(password.length === 0){
            setError("Please enter a password");
            return;
        }
        if(password.length < 6){
            setError("Password should be at least 6 charecters");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserInfo();
                verifyEmail();
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    //login with email
    const signInWithEmail = e => {
        e.preventDefault();
        if(useremail.length === 0){
            setError("Please give your email")
            return;
        }
        if(userpassword.length === 0){
            setError("Please give your password")
            return;
        }
        signInWithEmailAndPassword(auth, useremail, userpassword)
            .then(result => {
                const user = result.user;
                console.log(user);

                setUser(result.user)
                setError('');
                setLocation(true);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
//verify email address
    //verifying email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    //log in with google
    const singInwithGoogle=(location,history)=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
            .then(result=>{
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
                
            })
            .finally(() => setIsLoading(false));



    }
    //log in with github

    const singInWithGithub=(location,history)=>{
        const githubProvider=new GithubAuthProvider();
        setIsLoading(true);
        signInWithPopup(auth,githubProvider)
            .then(result=>{
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
               
            })
            .finally(() => setIsLoading(false));
    }



    //adding login user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false);

        });
    },[])

    //logout


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error)=> {
                setError(error.message)
            })
    }


    //returnig functions
    return {
        singInwithGoogle,
        singInWithGithub,
        user, error, userRegistration,
        getName, getEmail, getPassword,
        userEmail, userPassword, signInWithEmail,
        logOut,isLoading,setLocation
    }
};

export default UseFirebase;