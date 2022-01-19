import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import { Grid } from "@mui/material";

const BankToolCard = ({img, title}) => {
  return (
    <Grid items xs={12} sm={3}>
        <Card className="cardDocs">
            <CardMedia component="img" image={`./${img}`} alt="InstMedicion"/>
            <h4>{title}</h4>
            <div className='banktoolcard-btn'>
            <Button
            className="btnPdf" variant="contained" endIcon={<PictureAsPdf />}>Descargar
            </Button>
            </div>
        </Card>
    </Grid>
  )
};

export default BankToolCard;
