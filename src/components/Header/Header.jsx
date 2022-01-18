import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="brand">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="logout">
          <span>x</span>
        </div>
      </header>
    </div>
  )
}

export default Header;
