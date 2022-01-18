import React from "react";
/* import SwipeableViews from "react-swipeable-views";
import './BackgLog.css';

const BackgLog = () => (
        <>
          <div className="containerSlide">
            <SwipeableViews>
          <div style={Object.assign({})}>
            slide n°1 primer texto
          </div>
          <div style={Object.assign({})}>
            slide n°2 otro
          </div>
            <div style={Object.assign({})}>
             slide n°3 ultimo
            </div>
             </SwipeableViews>
        </div>
      </>
    );

export default BackgLog;
 */

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const BackgLog = () => (
  <AutoPlaySwipeableViews>
    <div>Recomendación de acceso
                    Sr. usuario, tenga en cuenta que para acceder debe consultar con los administradores de la red los permisos </div>
                  <div>Solicite su clave aquí en los siguientes casos:

                    Si ha olvidado su clave.
                    Si aún no tiene clave o no se ha registrado.
                    Si se ha bloqueado su clave.</div>
                  <div>Tips de seguridad
                    Cuando seleccione una contraseña, asegúrese que sea fácil de recordar por usted pero dificil de descifrar por los demás.</div>
  </AutoPlaySwipeableViews>
);

export default BackgLog;
