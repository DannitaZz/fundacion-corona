import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './InfoColegio.css';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { getSchool, getUrls } from '../../../Firebase/functions';
import imgSchool from '../../../images/school-consul.png'


export const InfoColegio = () => {
  const { sId } = useParams();
  console.log('EL ID del colegio', sId);

  const [school, setSchool] = useState({});
  const [url, setUrl] = useState([]);
  const [pdf, setPdf] = useState([]);

  useEffect(() => {
      const callSchool = async () => {
      const currentSchool = await getSchool(sId);
      const qUrls = await getUrls(sId);
      let urlsArray = [];
      qUrls.forEach(url => urlsArray.push(url.data()));
      console.log('adentro', urlsArray)
      const pdfs = urlsArray.filter(url => url.type === 'pdf');
      const urls = urlsArray.filter(url => url.type === 'Power BI');
      setUrl(urls);
      setPdf(pdfs);
      setSchool(currentSchool.data());
    }
    callSchool();
  }, [])

  // Para obtener la documentación actual y de años anteriores
  const currentUrl = url && url.filter(url => url.date === '2021');
  const url2020 = url && url.filter(url => url.date === '2020');
  const currentPdf = pdf && pdf.filter(pdf => pdf.date === '2021');
  const pdf2020 = pdf && pdf.filter(pdf => pdf.date === '2020');

  return (
    <div className="infoColegio">

      <main>
        <div className="card-container">
          <div className="titulo">
            <img src={imgSchool} alt="school" width="35px" height="45px" />
            <h3>{school && school.name}</h3>
          </div>
          <Card>
            <CardContent>
              <h4>Información</h4>
              <ul>
                <li><span><b> Dirección:</b>  Kra 100 # 21-14</span></li>
                <li><span><b>Ciudad:</b>  {school && school.city}</span></li>
                <li><span><b>Departamento:</b>  {school && school.depto}</span></li>
                <li><span><b>Correo Electrónico:</b> {school && school.email}</span></li>
                <li><span><b>Teléfono:</b>  {school && school.tel}</span></li>
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
                  <a target="blank" href="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/reportes%2FInforme%20OSO%20agregado.pdf?alt=media&token=50380141-cb60-462c-9c09-6a1429c6125f">
                    Año 2021
                  </a>
                </Button>
                <Button variant="outlined" startIcon={<PictureAsPdfIcon />}>
                    <a target="blank" href="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/reportes%2FInforme%20OSO%20agregado.pdf?alt=media&token=50380141-cb60-462c-9c09-6a1429c6125f">
                      Años Anteriores
                    </a>
                  </Button>
              </div>

              <hr />

              <h4>Consulta url</h4>
              <div className="consulta-buttons">
                <Button variant="outlined" startIcon={<LinkIcon />}>
                  <a target="blank" href="https://app.powerbi.com/view?r=eyJrIjoiY2EyOTAzYWEtYzEyOS00ODc5LTk0OWMtMWQwMzQyMmRlYTNkIiwidCI6ImZjNTMxMjM3LTQzYzYtNDRkZS1hMWU4LWQzYmY2ZGM0MzZlMSIsImMiOjR9">
                    Año 2021
                  </a>
                </Button>
                <Button variant="outlined" startIcon={<LinkIcon />}>
                    <a target="blank" href="https://app.powerbi.com/view?r=eyJrIjoiY2EyOTAzYWEtYzEyOS00ODc5LTk0OWMtMWQwMzQyMmRlYTNkIiwidCI6ImZjNTMxMjM3LTQzYzYtNDRkZS1hMWU4LWQzYmY2ZGM0MzZlMSIsImMiOjR9">
                      Años Anteriores
                    </a>
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