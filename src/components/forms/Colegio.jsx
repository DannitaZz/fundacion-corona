import React from "react";
import Header from '../Header/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import './Colegio.css'
import EditName from "../pages/EditarColegio/Edit";

export const SchoolForm = () => {



    return (
        <div>
            <Header xs={12}></Header>

            <div className='formContainer'>
                <Card className="paperForm" elevation={3} >

                <div className="inFormik">
                    <EditName />
                </div>
      
                <div className="firstField">
                    <TextField id="standard-basic" label="Nombre" variant="standard"  />
                </div>
                <br></br>
                <div>
                    <TextField id="standard-basic" label="Ciudad" variant="standard" />
                </div>
                <br></br>
                <div>
                    <TextField id="standard-basic" label="Departamento" variant="standard" />
                </div>
                <br></br>
                <div>
                    <TextField id="standard-basic" label="Correo electrónico" variant="standard"  />
                </div>
                <br></br>
                <div>
                    <TextField id="standard-basic" label="Teléfono" variant="standard"/>
                </div>
                <br></br>
                <div>
                <Button variant="contained" xs={12} md={12} className="btn-send" >Enviar</Button>
                </div>
                </Card>
                
            </div>
        </div>
    )
}

export default SchoolForm