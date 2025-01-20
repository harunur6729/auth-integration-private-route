// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaOHoZU5XhlgoXOog5wqKsVo60fbe4Nug",
  authDomain: "authintegrationandprivat-bd176.firebaseapp.com",
  projectId: "authintegrationandprivat-bd176",
  storageBucket: "authintegrationandprivat-bd176.firebasestorage.app",
  messagingSenderId: "688602177232",
  appId: "1:688602177232:web:c87136ff8439e4dfb808d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 
export default auth;