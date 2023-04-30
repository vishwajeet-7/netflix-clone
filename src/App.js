import React, { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./routes/All.Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/screen/Login";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {!user ? <Login/> : <AllRoutes/>}
    </div>
  );
}

export default App;
