
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9QXgNq2MlHL71b8dwZLHMDzfFoKydN0Q",
  authDomain: "react-netflix-clone-ec26e.firebaseapp.com",
  projectId: "react-netflix-clone-ec26e",
  storageBucket: "react-netflix-clone-ec26e.appspot.com",
  messagingSenderId: "1017440402197",
  appId: "1:1017440402197:web:6d535644dc69374f2b071c",
  measurementId: "G-22GFC276S4"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
