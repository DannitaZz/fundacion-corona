import React from 'react';
import "./Aliado.css";
import Header from '../../Header/Header'
import AliadosMenuItem from '../../AliadosMenuItem/AliadosMenuItem'


const Aliado = () => {
  return (
    <div className="Aliado-container">
      <Header></Header>
      <main>
        <div className="menu">
          
          <div className="menu-item-container">
            <AliadosMenuItem link="BancoHerramientas" img="images/herramientas.png" text="Banco de herramientas"></AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem link="MetodologiaOso" img="images/metologia.png" text="Información Metodologia oso"></AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem link="ConsultarColegio" img="images/school.png" text="Información de colegio"></AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem link="ConsolidadoResul" img="images/resultados.png" text="Consolidado de resultados"></AliadosMenuItem>
          </div>
          <div className="menu-item-container">
            <AliadosMenuItem link="ActulizacionInfo" img="images/actualizar.png" text="Actualizar información"></AliadosMenuItem>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Aliado;
