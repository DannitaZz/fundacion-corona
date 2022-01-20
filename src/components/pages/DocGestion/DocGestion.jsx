import React from "react";
import "./DocGestion.css";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DocumentCard from '../../DocumentCard/DocumentCard'


const DocMetodologia = () => {
  return (
    <>
       <div className="ContainerAccordion">
       <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <h2>DOCUMENTOS DE ARTICULACIÓN CON LAS INSTITUCIONES</h2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container className="ContainerCard">
            <div className="menu-item-container">
            <DocumentCard img="images/letter.png" title="Carta de compromisos IE-Rector" link=''></DocumentCard>
            <DocumentCard img="images/letter.png" title="Carta consentimiento informado_IE_Rector" link=''></DocumentCard>
            <DocumentCard img="images/encuesta.png" title="Encuesta Rectores" link=''></DocumentCard>
            </div> 
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <h2>DOCUMENTOS PARA EL DESARROLLO DEL PROGRAMA</h2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container className="ContainerCard">
            <DocumentCard img="images/segRectores.png" title="Seguimiento Rectores" link=''></DocumentCard>
            <DocumentCard img="images/lbase.png" title="Línea Base y Seguimiento" link=''></DocumentCard>
            <DocumentCard img="images/lsalida.png" title="Línea de Salida" link=''></DocumentCard>
            <DocumentCard img="images/logros.png" title="Formato Metas y alcances" link=''></DocumentCard>
            <DocumentCard img="images/seguimiento.png" title="Formato Seguimiento" link=''></DocumentCard>
            <DocumentCard img="images/guia.png" title="2_Guías Noveno" link=''></DocumentCard>
            <DocumentCard img="images/guiaD.png" title="3_Guías Décimo" link=''></DocumentCard>
            <DocumentCard img="images/guiaO.png" title="4_Guías Once" link=''></DocumentCard>
            <DocumentCard img="images/herramientas.png" title="correo Seguimiento periódico" link=''></DocumentCard>
            </Grid>
          </AccordionDetails>
        </Accordion>
       </div>
    </>
  );
};

export default DocMetodologia;
