import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import { Grid } from "@mui/material";
import "./DocGestion.css";

const DocMetodologia = () => {
  return (
    <>
      <div className="containerCard">
        <Grid container>
          <Grid items xs={12} sm={3}>
            <Card className="cardDocs">
              <CardMedia
                component="img"
                image="./images/fseguimiento.jpeg"
                alt="Seguimiento"
              />
              <h4>Formato Seguimiento</h4>
              <Button
                className="btnPdf"
                variant="contained"
                endIcon={<PictureAsPdf />}
              >
                Descargar
              </Button>
            </Card>
          </Grid>
          <Grid items xs={12} sm={3}>
            <Card className="cardDocs">
              <CardMedia
                component="img"
                image="./images/metas.jpg"
                alt="Seguimiento"
              />
              <h4>Formato Metas y alcances</h4>
              <Button
                className="btnPdf"
                variant="contained"
                endIcon={<PictureAsPdf />}
              >
                Descargar
              </Button>
            </Card>
          </Grid>
          <Grid items xs={12} sm={3}>
            <Card className="cardDocs">
              <CardMedia
                component="img"
                image="./images/correoSeg.jpg"
                alt="Seguimiento"
              />
              <h4>Correo tipo seguimiento periódico</h4>
              <Button
                className="btnPdf"
                variant="contained"
                endIcon={<PictureAsPdf />}
              >
                Descargar
              </Button>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid items xs={12} sm={3}>
            <Card className="cardDocs">
              <CardMedia
                component="img"
                image="./images/compromisos.jpg"
                alt="Seguimiento"
              />
              <h4>Carta de compromisos_IE_Rector </h4>
              <Button
                className="btnPdf"
                variant="contained"
                endIcon={<PictureAsPdf />}
              >
                Descargar
              </Button>
            </Card>
          </Grid>
          <Grid items xs={12} sm={3}>
            <Card className="cardDocs">
              <CardMedia
                component="img"
                image="./images/consentimiento.jpg"
                alt="Seguimiento"
              />
              <h4>Carta consentimiento informado_IE_Rector</h4>
              <Button
                className="btnPdf"
                variant="contained"
                endIcon={<PictureAsPdf />}
              >
                Descargar
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DocMetodologia;
