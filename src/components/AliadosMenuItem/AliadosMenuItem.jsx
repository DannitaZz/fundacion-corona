import React from 'react';
import { Link } from "react-router-dom";
import "./AliadosMenuItem.css";

const AliadosMenuItem = ({link, img, text, tooltip}) => {
  return (
    <div className="menu-item tooltip">
      <Link to={`/${link}`}>
        <div className="menuItem-container">
          <img src={`./${img}`} alt="actualizar" />
          <span>{text}</span>
        </div>
      </Link>
      {tooltip ? <span class="tooltiptext">{tooltip}</span> : ''}
    </div>
  )
}

export default AliadosMenuItem;
