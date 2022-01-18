import React from 'react'
import './Login.css'
import LoginForm from '../LoginForm/LoginForm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Login = () => {
  return (
    <>
      <div className="page-container">
        <Card>
          <CardContent>
            <img className= "logo-form" src="./images/logo.png" alt="logo" />
            <h3>Iniciar sesión</h3>
            <div className="form-container">
              <LoginForm />
            </div>
          </CardContent>
        </Card>

      </div>
    </>

  );



}
export default Login;

