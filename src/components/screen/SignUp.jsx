import React from "react";
import "./SignUp.css";

const SignUp = () => {
  const register = (e)=>{
    e.preventDefault();
  }

  const signIn = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signup_gray">New to Netflix? </span> <span className="signup_link" onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
