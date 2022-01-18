import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

const CategoryAliados = () => {
  return (
    <Card className="main-card">
    <CardContent>
      {/* <img src="./images/Actualizar.jpg" alt="actualizar" /> */}
      <Typography variant="body2">
        Actualizar información de contacto
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Ver</Button>
    </CardActions>
  </Card>
  
  )
  
}

export default CategoryAliados;
