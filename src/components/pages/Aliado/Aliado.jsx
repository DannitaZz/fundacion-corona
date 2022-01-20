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
              text="Información Metodologia oso"
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
            <div className="menu-item tooltip">
              <div className="menuItem-container">
                <img src="images/resultados.png" alt="actualizar" />
                <a target="blank" href="https://app.powerbi.com/view?r=eyJrIjoiY2EyOTAzYWEtYzEyOS00ODc5LTk0OWMtMWQwMzQyMmRlYTNkIiwidCI6ImZjNTMxMjM3LTQzYzYtNDRkZS1hMWU4LWQzYmY2ZGM0MzZlMSIsImMiOjR9">Consolidado de resultados</a>
              </div>
              <span class="tooltiptext">Tablero con toda la información de las implementaciones realizadas</span>
            </div>
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
