import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignIn = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPAssword]=useState("");
  const [error,setError]=useState("");
  const [createUserWithEmailAndPassword, user] =
   useCreateUserWithEmailAndPassword(auth);
   const navigate=useNavigate();


  const handleSignupEmail=(event)=>{
    setEmail(event.target.value);
    
  }
  const handleSignupPassword=(event)=>{
    setPassword(event.target.value);

  }
  const handleSignupConfirmPassword=(event)=>{
    setConfirmPAssword(event.target.value);

  }
  if(user){
    navigate("/shop");
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(password !== confirmPassword){
      setError('Password did not matched');
      return;
    }
    if(password.length <6){
      setError('Password should not be less than 6 charecters');
      return;
    }
    createUserWithEmailAndPassword(email,password);


  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleSignupEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handleSignupPassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleSignupConfirmPassword}
              type="password"
              name="confirm-password"
              id=""
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            className="form-submit"
            type="submit"
            value="Sign Up"
            required
          />
        </form>
        <p>
          Already Have an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;