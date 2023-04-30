import React, { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './routes/All.Routes';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth )=>{
      if(userAuth){
        //Logged in
        console.log(userAuth)
      }
      else{
        //logged out
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="app">
      <AllRoutes/>
    </div>
  );
}

export default App;
