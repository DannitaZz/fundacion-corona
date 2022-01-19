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
            <h3>Colegio San Jose</h3>
            <img src="./images/school-consul.png" alt="school" width="35px" height="45px" />
          </div>
          <Card>
            <CardContent>
              <h4>Información</h4>
              <ul>
                <li><span><b> Dirección:</b>  Kra 100 # 21-14</span></li>
                <li><span><b>Ciudad:</b>  Bogotá</span></li>
                <li><span><b>Departamento:</b>  Bogotá D,C</span></li>
                <li><span><b>Correo Electrónico:</b>  colegiosanjose@gmail.com</span></li>
                <li><span><b>Teléfono:</b>  7145678</span></li>
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