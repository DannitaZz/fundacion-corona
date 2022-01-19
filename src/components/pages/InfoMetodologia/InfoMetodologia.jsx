import React from 'react';
import './InfoMetodologia.css';
import coverVideo from '../../../Media/cover.mp4';
import Button from '@mui/material/Button';


const InfoMetodologia = () => {
  return (
    <>
      <div className='coverContainer'>
        <video className='video' src={coverVideo} autoPlay loop muted />      
        <h2>EN FUNDACIÓN CORONA CREEMOS QUE EL CONOCIMIENTO ES UN BIEN PÚBLICO, </h2>
        <p>Por eso todo lo que producimos es abierto y puede ser utilizado por la sociedad.</p> 
      </div>
      <div className='infoContainer'>
        <h2>Marco General Orientación Socio Ocupacional</h2>
        <p>
        La metodología de Orientación Socio Ocupacional (OSO) brinda herramientas útiles a los jóvenes sobre autoconocimiento, 
        conocimiento del mundo de la formación y conocimiento del mundo del trabajo. El Ministerio de Educación Nacional (MEN) 
        señala esta tríada o mundos como las dimensiones centrales que componen la metodología OSO (Rutas de vida: manual de acompañamiento
        para la Orientación Socio Ocupacional, primera edición 2013). En este sentido, OSO se enfoca en la identificación de sus sueños, 
        intereses y capacidades, pero también en brindarles información 
        idónea sobre las opciones de formación y de trabajo, que les permita reconocer realidades y oportunidades dentro de los territorios 
        que habitan.
        </p>
        <p>La OSO en la educación media académica trabaja con jóvenes estudiantes de los últimos tres grados escolares (9º, 10º y 11º), ya 
          que es el momento en que comienzan a tomar decisiones en torno a las profesiones u oficios que desempeñarán en el futuro. Este momento 
          de la vida significa para ellos el inicio del tránsito al mundo “adulto”, en donde, de acuerdo con sus intereses y a la construcción de 
          valores e identidades, establecen una relación de intercambio o debate interno frente a la gama de opciones que el joven logre identificar.
        </p>
      </div>
      <div className="notificacion-buttons">
        <h3>Descarga aquí el documento </h3>
                <Button className='btnOso' variant="contained" >
                  Marco General Orientación Socio Ocupacional
              </Button>
      </div>
    </>
  
  )
}

export default InfoMetodologia
