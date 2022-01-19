import React from "react";
import Header from "../../Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BankToolCard from "../../BankToolCard/BankToolCard"

//importaciones para las targetas
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import { Grid } from "@mui/material";

export const BancoHerramientas = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <h2>DOCUMENTOS IMPLEMENTACIÓN</h2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
            <BankToolCard img='./images/fseguimiento.jpg' title='Formato Seguimiento'></BankToolCard>
            <BankToolCard img='./images/fseguimiento.jpg' title='1_Marco General'></BankToolCard>
            <BankToolCard img='./images/fseguimiento.jpg' title='2_Guías Noveno'></BankToolCard>  
            <BankToolCard img='./images/fseguimiento.jpg' title='3_Guías Décimo'></BankToolCard>  
            <BankToolCard img='./images/fseguimiento.jpg' title='4_Guías Once'></BankToolCard>   
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <h2>INSTRUMENTOS DE MEDICIÓN</h2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <BankToolCard img='./images/fseguimiento.jpg' title='Línea de Salida'></BankToolCard>   
              <BankToolCard img='./images/fseguimiento.jpg' title='Seguimiento Rectores'></BankToolCard> 
              <BankToolCard img='./images/fseguimiento.jpg' title='Línea Base y Seguimiento'></BankToolCard> 
              <BankToolCard img='./images/fseguimiento.jpg' title='Línea de Salida'></BankToolCard> 
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
export default BancoHerramientas;
