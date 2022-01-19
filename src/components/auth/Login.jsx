import React from 'react'
import './Login.css'
import LoginForm from '../LoginForm/LoginForm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Grid } from '@mui/material';
import BackgLog from '../back/BackgLog';
import Header from '../Header/Header'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Login = () => {
  return (
    <>
      <Header />
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
                <BackgLog></BackgLog>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>

  );
}
export default Login;

