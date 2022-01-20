import React from "react";
import "./DocGestion.css";
import { Grid } from "@mui/material";
import BankToolCard from "../../BankToolCard/BankToolCard"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AliadosMenuItem from '../../AliadosMenuItem/AliadosMenuItem'
import DocumentCard from '../../DocumentCard/DocumentCard'


const DocMetodologia = () => {
  return (
    <>
       <div className="ContainerAccordion">
       <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <h2>ARTICULACIÓN CON LAS INSTITUCIONES</h2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
            <div className="menu-item-container">
            <DocumentCard img="images/herramientas.png" title="Carta de compromisos_IE_Rector" link="BancoHerramientas"></DocumentCard>
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Carta consentimiento informado_IE_Rector"></AliadosMenuItem>
            </div> 
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <h2>DESARROLLO DE PROGRAMAS</h2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Seguimiento Rectores"></AliadosMenuItem>
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Línea Base y Seguimiento"></AliadosMenuItem>
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Línea de Salida"></AliadosMenuItem>
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Formato Metas y alcances"></AliadosMenuItem>  
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Formato Seguimiento"></AliadosMenuItem> 
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="2_Guías Noveno"></AliadosMenuItem> 
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="3_Guías Décimo"></AliadosMenuItem> 
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="4_Guías Once"></AliadosMenuItem>
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Correo Seguimiento periódico"></AliadosMenuItem> 
            </Grid>
          </AccordionDetails>
        </Accordion>
       </div>
    </>
  );
};

export default DocMetodologia;
