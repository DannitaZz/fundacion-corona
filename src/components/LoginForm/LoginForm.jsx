import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {signIn} from '../../Firebase/auth'

import './LoginForm.css'

const LoginForm = () => {

  const navigateTo = useNavigate()

  const [usuario,setUsuario] = useState({
    email:"",
    password:""
  })

  const ingresar = async (e)=>{
    e.preventDefault();
    console.log(e);
    console.log(usuario)
    if(usuario.email!="" && usuario.password!=""){
      const isUser = await signIn(usuario.email,usuario.password)
      console.log(isUser)
      if(isUser){         
        setUsuario({
          email: "",
          password: "",
        });
        navigateTo("/aliado")
      }else{
        alert("usuario o contraseña invalida")
      }          
  }
  else{
    alert("Debe llenar todos los campos")
  }
    }
  
  return (
    <>
      <form className="loginForm">
        
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Correo
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={usuario.email}
            placeholder="Correo electrónico"
            onChange={(e)=>setUsuario({...usuario,email:e.target.value})}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Contraseña
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="password"
            value={usuario.password}
            placeholder="Contraseña"
            onChange={(e)=>setUsuario({...usuario,password:e.target.value})}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="button-form">
          <Button variant="contained" onClick={ingresar}>Entrar</Button>
        </div>
      </form>
    </>
  )
}

export default LoginForm;
