import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComponent/Header/Navbar";
import LogoTitle from "../SharedComponent/LogoTitle";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const DataContext = createContext([]);

const Layout = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const siginIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (provider) => {
    return signInWithPopup(auth,provider);
  };

  const githubSignIn = (provider) => {
    return signInWithPopup(auth,provider);
  };
  
  const passReset =(email)=>{
   return  sendPasswordResetEmail(auth,email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const { pathname, state } = useLocation();
  pathname === "/" ? (document.title = `Dragon News | Home`) : pathname;
  pathname === "/about" || pathname === "/career"
    ? (document.title = `Dragon News ${pathname.replace("/", "|")}`)
    : pathname;
  state ? (document.title = state) : "";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/0ca9579a0ce0c420d9f8")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const AllInfo = {
    data,
    createUser,
    siginIn,
    user,
    loading,
    passReset,
    googleSignIn,
    githubSignIn
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <DataContext.Provider value={AllInfo}>
        <LogoTitle></LogoTitle>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </DataContext.Provider>
    </div>
  );
};

export default Layout;
