import React from "react";
import "./BancoHerramientas.css";
import { Grid } from "@mui/material";
import BankToolCard from "../../BankToolCard/BankToolCard"
import "./BancoHerramientas.css"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
//importaciones para las targetas


export const BancoHerramientas = () => {
  return (
    <>
      <div className="containerCard">
        
            <BankToolCard img='./images/mGeneral.jpg' title='Marco general'></BankToolCard>
            <BankToolCard img='./images/mGestion.jpg' title='Gestión e implementación "OSO"'></BankToolCard>
            <BankToolCard img='./images/includere.jpg' title='Includere'></BankToolCard>
        
      </div>
    </>
  );
};
export default BancoHerramientas;
