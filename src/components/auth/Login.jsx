import React from 'react'
import './Login.css'
import LoginForm from '../LoginForm/LoginForm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NameApp from '../Title/NameApp';
import { Box, Grid } from '@mui/material';
import { BackgLog } from '../back/BackgLog';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Login = () => {
  return (
    <>
      <NameApp />
      <Grid container>
        <Grid items xs={12} sm={6}>
          <div className="page-container">
            <Card>
              <CardContent>
                <h3>Iniciar sesión</h3>
                <div>
                  <LoginForm />
                </div>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid items xs={12} sm={6}>
          <div className="page-c">
            <Card>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>

  );
}
export default Login;

