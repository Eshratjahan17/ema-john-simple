import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <nav className="header-nav">
      <img src={logo} alt="" />
      <div>
        
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Log in</Link>
        
      </div>
    </nav>
  );
};

export default Header;