import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
const [signInWithEmailAndPassword, user, loading , error] =
  useSignInWithEmailAndPassword(auth);


  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }
const handleSubmit=(event)=>{
  event.defaultPrevented();
  signInWithEmailAndPassword(email,password);

}
  
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>

          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-John?
          <Link className="form-link" to="/signin">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;