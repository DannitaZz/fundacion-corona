import React from "react";
// import SwipeableViews from "react-swipeable-views";
// import './BackgLog.css';

// const BackgLog = () => (
//         <>
//           <div className="containerSlide">
//             <SwipeableViews>
//           <div style={Object.assign({})}>
//             slide n°1 primer texto
//           </div>
//           <div style={Object.assign({})}>
//             slide n°2 otro
//           </div>
//             <div style={Object.assign({})}>
//              slide n°3 ultimo
//             </div>
//              </SwipeableViews>
//         </div>
//       </>
//     );

// export default BackgLog;
 

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './BackgLog.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const BackgLog = () => (
  <AutoPlaySwipeableViews>

      <div className="backgLog-text">
        <h3>Recomendación de acceso</h3>
        <p> Sr. usuario, tenga en cuenta que para acceder debe consultar con los administradores de la red los permisos
        </p>
      </div>
      <div className="backgLog-text">
        <h3> Solicite su clave <a href=""> aquí</a> en los siguientes casos</h3>
        <p>
          Olvidado su clave
          <br />
          Aún no tiene clave o no se ha registrado
          <br />
          Ha bloqueado su clave
        </p>
      </div>
      <div className="backgLog-text">
        <h3>Tips de seguridad</h3>
        <p>
          Cuando seleccione una contraseña, asegúrese que sea fácil de recordar por usted pero dificil de descifrar por los demás.
        </p>
      </div>

  </AutoPlaySwipeableViews>
);

export default BackgLog;
