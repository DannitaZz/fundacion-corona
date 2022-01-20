import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { getNameUser, userRol, closeSesion } from '../../Firebase/auth';
import { getPartner, getAdmin } from '../../Firebase/functions';

const Header = () => {

  const navigateTo = useNavigate();
  const [name, setName] = useState("")

  const rol = userRol.rol;
  const getName = async () => {

    if(rol=="partner"){
      const user = await getPartner()
      return  user.data().name
    } else if(rol=="Admin"){
      const user = await getAdmin()
      return  user.data().name
    }    
  }

  useEffect(() =>{
    console.log(rol)    
      getName().then((resp)=>{
        setName(resp)        
      })      
    
    
  },[])

  const salir = async () => {
    await closeSesion()
    navigateTo("/")
  }
  return (
    <div>
      <header className="header">
        <div className="brand">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="bienvenida">
          <h3>{name}</h3>
          <div className="logout">
            <h4>Salir</h4>
            <ExitToAppIcon onClick={salir} />
          </div>
        </div>        
      </header>
    </div>
  )
}

export default Header;
