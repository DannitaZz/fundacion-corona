import React from "react";
import './Footer.css'
import footerSch from '../../images/imgFooter.svg';


const Footer = () => {
  return (
    <>
    <div className="body">
      <div className="footer">
        <h3 className="inforTitle">Fundación Corona  2019 - Todos los derechos reservados</h3>
        <img className="footerImg" src={footerSch} alt=""/>
      </div>
      </div>
    </>
  );
}
export default Footer;