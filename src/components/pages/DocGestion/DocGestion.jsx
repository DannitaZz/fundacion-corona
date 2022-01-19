import React from "react";
import "./DocGestion.css";
import { Grid } from "@mui/material";
import BankToolCard from "../../BankToolCard/BankToolCard"


const DocMetodologia = () => {
  return (
    <>
      <div className="containerCard">
        <Grid container>
        <BankToolCard img='./images/fseguimiento.jpg' title='Formato Seguimiento'></BankToolCard>
        <BankToolCard img='./images/metas.jpg' title='Formato Metas y alcances'></BankToolCard>
        <BankToolCard img='./images/correoSeg.jpg' title='Correo Seguimiento periódico'></BankToolCard>  
        </Grid>  
        <Grid container>
        <BankToolCard img='./images/compromisos.jpg' title='Carta de compromisos_IE_Rector'></BankToolCard>
        <BankToolCard img='./images/consentimiento.jpg' title='Carta consentimiento informado_IE_Rector'></BankToolCard>
        </Grid>
      </div>
    </>
  );
};

export default DocMetodologia;
