import React from 'react'
import Header from '../../Header/Header'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const [value, setValue] = React.useState('one');

export const MetodologiaOso = (event, newValue) => {
  setValue(newValue);
};  
  return (
    <div>
      <Header></Header>
      <Box sx={{width: '100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='primary'
          indicatorColor='secondary'
          aria-label='secontady tabs example'
          >
            <Tab value="one" label="Item One"></Tab>
          </Tabs>
      </Box>
      oso
    </div>
  )
export default MetodologiaOso;