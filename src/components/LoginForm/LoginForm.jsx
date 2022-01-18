import React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

import './LoginForm.css'

const LoginForm = () => {
  return (
    <>
      <form className="loginForm">
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Correo
        </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Contraseña
        </InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <Stack spacing={2} direction="row">
          <Button variant="contained">Entrar</Button>
        </Stack>
      </form>
    </>
  )
}

export default LoginForm
