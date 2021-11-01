import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.config";


const initializeAuthentication =()=>{
    initializeApp(firebaseConfig);

}
export  default initializeAuthentication;
