
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIyNw4GqVERHvZOq-fdRqfsD3X-xU0Lc",
  authDomain: "netflix-clone-304f1.firebaseapp.com",
  projectId: "netflix-clone-304f1",
  storageBucket: "netflix-clone-304f1.appspot.com",
  messagingSenderId: "1022444536200",
  appId: "1:1022444536200:web:39c469059eb775e1fbba3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
