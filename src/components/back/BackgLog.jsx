import React from "react";

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { bindKeyboard } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);


const BackgLog = () => {
  return (
    <AutoPlaySwipeableViews>
       <div>
         <h3>Recomendación de acceso</h3>
          <p>Sr. usuario, tenga en cuenta que para acceder debe consultar con los administradores de la red los permisos</p>  
       </div>
       <div>
         <h3>Solicite su clave aquí en los siguientes casos:</h3>
          <p>Si ha olvidado su clave. br
             Si aún no tiene clave o no se ha registrado.
             Si se ha bloqueado su clave. </p> 
       </div>
       <div>
         <h3>Tips de seguridad</h3>
           <p>Cuando seleccione una contraseña, asegúrese que sea fácil de recordar por usted pero dificil de descifrar por los demás.</p>  
       </div>
  </AutoPlaySwipeableViews>
  )};

export default BackgLog;
