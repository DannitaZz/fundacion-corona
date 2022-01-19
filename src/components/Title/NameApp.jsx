import { AppBar, Toolbar } from '@mui/material';
import React from 'react'
import './Name.App.css'

  const NameApp = () => {
    return ( 
      <>
        <div className="fixed">
            <AppBar position="static">
              <Toolbar>
                <img className="imageNameApp" src="./images/logo.png" alt="Logo" />
              </Toolbar>
            </AppBar>   
        </div>
      </>  
     );
  }

   
  export default NameApp;