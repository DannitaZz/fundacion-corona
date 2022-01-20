import React from "react";
import './Footer.css'
import {
  Box,
  Typography,
  Grid,
  Divider
} from "@mui/material";



const footer = () => {
  return (
    <Box sx={{background: 'black', color:'white'}}>
      <Grid container spacing={3} >
        <Grid item xs={4} >
        <Typography sx={{fontWeight: 'bold', color:'white'}}>PRENSA</Typography>
        <Typography sx={{color:'white'}}>Fundacion Corona en Medios</Typography>
        <Typography sx={{color:'white'}}> Kit prensa </Typography>
        <Typography sx={{color:'white'}}>Material de prensa</Typography>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Typography sx={{fontWeight: 'bold', color:'white'}}>LEGALES</Typography>
            <Typography sx={{color:'white'}}>Linea etica</Typography>
            <Typography sx={{color:'white'}}>Tratamiento de datos</Typography>
            <Typography sx={{color:'white'}}>DIAN</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
          <Typography sx={{fontWeight: 'bold',color:'white'}}>CONTACTO</Typography>
          <Typography sx={{color:'white'}}>Bogotá, D.C. - Colombia - Sur América</Typography>
          <Typography sx={{color:'white'}}>Calle 70 No. 7-30 oficina 1001</Typography>
          <Typography sx={{color:'white'}}>Teléfono (+571) 400 00 31</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box borderBottom='1px solid white' />
        </Grid>
        <Grid item xs={12}>
          <Box display='flex' justifyContent='space-between'>
          <Typography sx={{color:'white'}}>Fundación Corona © 2019 - Todos los derechos reservados</Typography>          </Box>
        </Grid>
        </Grid>
      </Box>

  )
}

export default footer;
