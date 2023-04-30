import React, { useRef } from "react";
import "./SignUp.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = (e)=>{
    e.preventDefault();
   createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }

  const signIn = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signup_gray">New to Netflix? </span> <span className="signup_link" onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
