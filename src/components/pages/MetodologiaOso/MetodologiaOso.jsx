import React from 'react'
import Header from '../../Header/Header'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InfoMetodologia from '../InfoMetodologia/InfoMetodologia';
import DocGestion from '../DocGestion/DocGestion';


export const MetodologiaOso = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      
       <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="ORIENTACIÓN SOCIO OCUPACIONAL" />
        <Tab value="2" label="DOCUMENTOS DE GESTIÓN" />
      </Tabs>
       </Box>
       {(() => {switch (value) {
                        case '1':
                            //Botón de "en proceso" toma el tiempo en que se comienza a preparar la orden
                            return <InfoMetodologia></InfoMetodologia>
                        case '2':
                            //Botón de "Listo" toma el tiempo en que se termina de preparar la orden
                            return <DocGestion></DocGestion>
                        default:
                            break;
                    }})()}
    </div>
  )
}
export default MetodologiaOso;