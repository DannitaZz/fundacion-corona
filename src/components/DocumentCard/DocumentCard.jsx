import React from "react";
import "./DocumentCard.css";

const DocumentCard = ({ img, title, link }) => {
  return (
    <div className="containerDoc">
      <div className="cardDocuments">
        <img src={`./${img}`} alt="" width="35px" height="45px" />
        <h5>{title}</h5>
        <a target="_blank" href={link}>
          Descargar
        </a>
      </div>
    </div>
  );
};

export default DocumentCard;
