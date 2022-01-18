import React from 'react'
import Header from '../../Header/Header'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export const MetodologiaOso = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header></Header>
       <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="ORIENTACIÓN SOCIO OCUPACIONAL" label="ORIENTACIÓN SOCIO OCUPACIONAL" />
        <Tab value="DOCUMENTOS TÉCNICOS" label="DOCUMENTOS TÉCNICOS" />
      </Tabs>
    </Box>
      
    </div>
  )
}
export default MetodologiaOso;