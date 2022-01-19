import React from 'react';
import "./Header.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="brand">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="logout">
        <ExitToAppIcon />
        </div>
      </header>
    </div>
  )
}

export default Header;
