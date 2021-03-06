import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
  const [user]=useAuthState(auth);
  const [name,setName]=useState('');
  const [address, setAddress] = useState("");
  const [phone,setPhone]=useState('');
  const [error,setError]=useState('');

  const handleName=(event)=>{
    setName(event.target.value);

  }
  const handleAdress=(event)=>{
    setAddress(event.target.value);

  }
  const handlePhone=(event)=>{
    setPhone(event.target.value);

  }
  const handleCreateUser=(event)=>{
    event.preventDefault();
    
    const shipping={name,address,phone};
    console.log(shipping);
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Your Shipping Info</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleName} type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Address</label>
            <input
              onBlur={handleAdress}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhone}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            className="form-submit"
            type="submit"
            value="Add Shipping"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipping;