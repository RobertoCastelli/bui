// REACT
import { useState, useEffect, createContext } from "react"

//ROUTER
import { useNavigate } from "react-router-dom"

// FIREBASE
import { auth, db } from "../firebase/firebaseConfig"

// FIREBASE --> DB
import { collection, query, getDocs } from "firebase/firestore"

// FIREBASE --> AUTH
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

// CONTEXT
export const DataContext = createContext() //

/*  _______   ______ 
|   ____| /      |
|  |__   |  ,----'
|   __|  |  |     
|  |     |  `----.
|__|      \______| */

const ContextProvider = (props) => {
  // get year
  const year = new Date().getFullYear()
  // get date
  const time = new Date().toLocaleDateString()
  // navigate
  const navigate = useNavigate()
  // firebase query
  const q = query(collection(db, "budget"))
  // states
  const [user, setUser] = useState({ email: "", password: "" })
  const [userName, setUserName] = useState()
  const [database, setDatabase] = useState()

  /*
     ___      __    __  .___________. __    __  
    /   \    |  |  |  | |           ||  |  |  | 
   /  ^  \   |  |  |  | `---|  |----`|  |__|  | 
  /  /_\  \  |  |  |  |     |  |     |   __   | 
 /  _____  \ |  `--'  |     |  |     |  |  |  | 
/__/     \__\ \______/      |__|     |__|  |__|  */

  // get user name if logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUserName(user.email?.split("@")[0]) : setUserName("ospite")
    })
  }, [user])

  // get email and password
  const handleEmailAndPassword = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // clear fields on focus
  const handleFocus = (e) => (e.target.value = "")

  // sign in
  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        setUserName(user.email?.split("@")[0]) // <--<< FIX IT!!!
      })
      .then(() => navigate("/dashboard"))
      .catch((err) => alert(`Oops! there is an ERROR: ${err.message}`))
  }

  // sign out
  const handleSignOut = () => {
    // no log out if user is not logged
    if (userName !== "ospite") {
      if (window.confirm("press OK to log out")) {
        signOut(auth)
          .then(() => navigate("/"))
          .catch((err) =>
            console.log(`Oops! there is an ERROR: ${err.message}`)
          )
          .finally(() => setUserName("ospite"))
      } else {
        return
      }
    }
  }

  /* 
 _______  .______   
|       \ |   _  \  
|  .--.  ||  |_)  | 
|  |  |  ||   _  <  
|  '--'  ||  |_)  | 
|_______/ |______/   */

  // get DB
  /*   useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setDatabase(doc.data().budget)
      })
    }
    getData().catch(console.error)
  }, [q]) */

  // RENDER
  return (
    <DataContext.Provider
      value={{
        /* globals */
        year,
        time,

        /* auth */
        userName,
        handleFocus,
        handleSignIn,
        handleSignOut,
        handleEmailAndPassword,

        /* database */
        database,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default ContextProvider
