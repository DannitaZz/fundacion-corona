import React from 'react'
import './Login.css'
import LoginForm from '../LoginForm/LoginForm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NameApp from '../Title/NameApp';
import { Box, Grid } from '@mui/material';
import BackgLog from '../back/BackgLog';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Login = () => {
  return (
    <>
    
          <div className="page-container">
            <Card>
              <CardContent>
                <img src="./images/logo.png" alt="logo" />
                <h3>Iniciar sesión</h3>
                <div className="login-form">
                  <LoginForm />
                </div>
              </CardContent>
            </Card>
          </div>
        
          <div className="page-c">
            <Card>
              <CardContent>
                <BackgLog></BackgLog>
              </CardContent>
            </Card>
          </div>
        
    </>

  );
}
export default Login;

