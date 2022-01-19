import React from "react";
import "./BancoHerramientas.css";
import { Grid } from "@mui/material";
import BankToolCard from "../../BankToolCard/BankToolCard"
import "./BancoHerramientas.css"
//importaciones para las targetas


export const BancoHerramientas = () => {
  return (
    <>
      <div className="containerCard">
          <Grid container>
              <BankToolCard img='./images/mGeneral.jpg' title='MARCO GENERAL'></BankToolCard>
              <BankToolCard img='./images/mGestion.jpg' title='MANUAL GESTIÓN E IMPLEMENTACIÓN OSO'></BankToolCard>
              <BankToolCard img='./images/includere.jpg' title='INCLUDERE'></BankToolCard>   
          </Grid>  
        </div>
    </>
  );
};
export default BancoHerramientas;
