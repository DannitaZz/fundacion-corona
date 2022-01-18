import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './InfoColegio.css';
import Header from '../../Header/Header';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';

export const InfoColegio = () => {
  return (
    <div className="infoColegio">
      <Header></Header>
      <main>
        <div className="card-container">
          <div className="title">
            <img src="./images/school.png" alt="school" width="35px" height="45px" />
            <h3>Colegio San Jose</h3>
          </div>
          <Card>
            <CardContent>
              <h4>Información</h4>
              <ul>
                <li>Dirección: cra 100 # 21-14</li>
                <li>Ciudad: Bogotá</li>
                <li>Departamento: Bogotá D,C</li>
                <li>Correo Electrónico: colegiosanjose@gmail.com</li>
                <li>Teléfono: 601-7145678</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="card-container">
          <Card>
            <CardContent>
              <h4>Reportes</h4>
              <div className="reportes-buttons">
                <Button variant="outlined" startIcon={<PictureAsPdfIcon />}>
                  Año 2022
              </Button>
                <Button variant="outlined" startIcon={<PictureAsPdfIcon />}>
                  Años Anteriores
              </Button>
              </div>

              <hr />

              <h4>Consulta url</h4>
              <div className="consulta-buttons">
                <Button variant="outlined" startIcon={<LinkIcon />}>
                  Año 2022
              </Button>
                <Button variant="outlined" startIcon={<LinkIcon />}>
                  Años Anteriores
              </Button>
              </div>

              <hr />
              <div className="notificacion-buttons">
                <Button variant="contained" endIcon={<SendIcon />}>
                  Notificar encuesta
              </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
export default InfoColegio;