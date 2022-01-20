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
            <DocumentCard img="images/letter.png" title="Carta de compromisos IE-Rector" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20gestion%2FCarta%20de%20compromisos_IE_Rector.pdf?alt=media&token=4485df36-8d7e-463b-932b-3a0031f212d1'></DocumentCard>
            <DocumentCard img="images/letter.png" title="Carta consentimiento informado_IE_Rector" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20gestion%2FCarta%20consentimiento%20informado_IE_Rector.pdf?alt=media&token=0c0c0ec0-d6f0-4edc-b6b0-7b5947ee0555'></DocumentCard>
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
              <div className="menu-item-container">
              <DocumentCard img="images/segRectores.png" title="Seguimiento Rectores" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/instrumentos%20de%20medicion%2FInstrumento%20de%20seguimiento%20Rectores.pdf?alt=media&token=270b8f08-9f2b-4499-83d4-30bcd7a8fc43'></DocumentCard>
            <DocumentCard img="images/lbase.png" title="Línea Base y Seguimiento" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/instrumentos%20de%20medicion%2FInstrumento%20L%C3%ADnea%20Base%20y%20Seguimiento.pdf?alt=media&token=566f8383-eeff-4104-9d6f-0b4fdada15ff'></DocumentCard>
            <DocumentCard img="images/lsalida.png" title="Línea de Salida" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/instrumentos%20de%20medicion%2FInstrumento%20L%C3%ADnea%20Salida.pdf?alt=media&token=92ace810-984b-44c0-aafa-922247be0c92'></DocumentCard>
            <DocumentCard img="images/logros.png" title="Formato Metas y alcances" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20gestion%2FFormato%20de%20metas%20y%20alcances%20aliados%20OSO.xlsx?alt=media&token=65b256f7-2375-4c80-ac3c-3e91c2198967'></DocumentCard>
            <DocumentCard img="images/seguimiento.png" title="Formato Seguimiento" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20gestion%2FFormato%20seguimiento.xlsx?alt=media&token=d0b6b82d-1c94-4a5f-9fac-3ba225fe6695'></DocumentCard>
            <DocumentCard img="images/guia.png" title="2_Guías Noveno" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20implementacion%2F2_GUIAS_NOVENO.pdf?alt=media&token=a20a3ad5-b03e-4d67-93bc-af54ef55c614'></DocumentCard>
            <DocumentCard img="images/guiaD.png" title="3_Guías Décimo" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20implementacion%2F3_GUIAS_DECIMO.pdf?alt=media&token=6a947b43-047f-47f1-b5c8-052997d82d02'></DocumentCard>
            <DocumentCard img="images/guiaO.png" title="4_Guías Once" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20implementacion%2F4_GUIAS_ONCE.pdf?alt=media&token=1691bc39-992e-4741-90fb-f3386eb97547'></DocumentCard>
            <DocumentCard img="images/seguimiento.png" title="correo Seguimiento periódico" link='https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/documentos%20de%20gestion%2Fcorreo%20tipo%20-%20seguimiento%20periodico.docx?alt=media&token=d505564e-28ea-4d60-8083-b7ddceed2a09'></DocumentCard>
              </div>
            </Grid>
          </AccordionDetails>
        </Accordion>
       </div>
    </>
  );
};

export default DocMetodologia;
