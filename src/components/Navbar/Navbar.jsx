//import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'; 

const MyComponent = () => {
  return (
    <div className = 'navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" className="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default MyComponent;