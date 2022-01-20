import React from 'react';
import "./DocumentCard.css"


const DocumentCard = (img, title, link) => {
  return <div>
              <div className="cardDocuments"> 
               <h2>{title}</h2>
               <link rel="stylesheet" href={`./${link}`} />
               <img src={`./${img}`} alt="" width="35px" height="45px" />
               </div>
  </div>;
};

export default DocumentCard;
