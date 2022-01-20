import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import { Grid } from "@mui/material";
import "./BankToolCard.css"

const BankToolCard = ({ img, title }) => {
  return (
    <Grid items xs={12} sm={6}>
      <Card className="cardDocs">
        <div className="imgCard">
          <CardMedia component="img" image={`./${img}`} alt="InstMedicion" />
        </div>
        
        <h3>{title}</h3>
        
        <div className='banktoolcard-btn'>
          <Button variant="contained" endIcon={<PictureAsPdf />}>Descargar
          </Button>
        </div>
      </Card>
    </Grid>
  )
};

export default BankToolCard;
