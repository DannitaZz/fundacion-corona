import React from 'react';
import "./Aliado.css";
import AliadosMenuItem from '../../AliadosMenuItem/AliadosMenuItem'


const Aliado = () => {
  return (
    <div className="Aliado-container">
      
      <main>
        <div className="menu">
          
          <div className="menu-item-container">
            <AliadosMenuItem
              link="BancoHerramientas"
              img="images/herramientas.png"
              text="Banco de herramientas"
              tooltip="Conoce los diferentes documentos de apoyo en torno a Orientación Socio Ocupacional">
              </AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem
              link="MetodologiaOso"
              img="images/metologia.png"
              text="Información Metodología oso"
              tooltip="Encuentra todos los documentos e información para el desarrollo del Programa">
              </AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem
              link="ConsultarColegio"
              img="images/school.png"
              text="Información de colegio"
              tooltip="Administra aquí la información de las Instituciones Educativas en las que implementas el programa de OSO">
              </AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem
              link="ConsolidadoResul"
              img="images/resultados.png"
              text="Consolidado de resultados"
              tooltip="Tablero con toda la información de las implementaciones realizadas">
              </AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem
              link="ActualizacionInfo"
              img="images/actualizar.png"
              text="Actualizar información">
              </AliadosMenuItem>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Aliado;
