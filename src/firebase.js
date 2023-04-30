import {initializeApp} from 'firebase/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCw97-Ozw9xq8g1d3mKaIQ9gEJeImVjVeI",
  authDomain: "netflix-clone-c77aa.firebaseapp.com",
  projectId: "netflix-clone-c77aa",
  storageBucket: "netflix-clone-c77aa.appspot.com",
  messagingSenderId: "28833093367",
  appId: "1:28833093367:web:df384ba8e5f367afb6e5f2"
};

  //initializing the application
  const firebaseApp = initializeApp(firebaseConfig)

  // creating the Firestore instance
  const db = getFirestore(firebaseApp);

// // creating a collection reference
//   const userDetails = collection(db, "userDetails");

  // initializing the authentication service
  const auth = getAuth(firebaseApp)


  export {auth}
  export default db;

  