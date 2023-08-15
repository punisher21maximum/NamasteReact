import { useState, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState([false]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {isLoggedIn ? <li>Welcome Vishal {onlineStatus ? "🟢" : "🔴"}</li> : <li>See you soon</li>}
          <button className="login-btn" onClick={()=>(setIsLoggedIn(!isLoggedIn))}>
            {isLoggedIn ? <li>Logout</li> : <li>Login</li>}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;