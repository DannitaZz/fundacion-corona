import React from 'react';
import { Link } from "react-router-dom";
import "./AliadosMenuItem.css";

const AliadosMenuItem = ({link, img, text}) => {
  return (
    <div className="menu-item">
      <Link to={`/${link}`}>
        <div className="menuItem-container">
          <img src={`./${img}`} alt="actualizar" />
          <span>{text}</span>
        </div>
      </Link>
    </div>
  )
}

export default AliadosMenuItem;
