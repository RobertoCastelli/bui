import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDIiF9G3x5lbmU-9XNMJaZ0TPGVAodeeo",
  authDomain: "budget-interventi.firebaseapp.com",
  projectId: "budget-interventi",
  storageBucket: "budget-interventi.appspot.com",
  messagingSenderId: "411363794475",
  appId: "1:411363794475:web:bac6ddcdbb23ecd3ba546e",
}

// initialize firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
