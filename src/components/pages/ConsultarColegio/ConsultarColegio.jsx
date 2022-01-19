import React from 'react';
import IconAdd from './IconAdd';
import IconSchool from './IconSchool';
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getSchools } from '../../../Firebase/functions';
import Header from '../../Header/Header';
import './ConsultarColegio.css';


const ConsultarColegio = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const callSchools = async () => {
      const pId = 'GVHnELznJczuDw2Xe2p4';
      /* await createSchool('Inmaculada', 'Pradera', 'Valle', 'email', 'tel', 'date', pId);
      console.log('Colegio creado'); */
      let arraySchools = [];
      const qSchools = await getSchools(pId);
      qSchools.forEach((doc) => {
        arraySchools.push(doc.data());
        console.log(doc.data());
      });
      setSchools(arraySchools);
    }
    callSchools();
  }, [])
  return (
    <div className='searchSchool'>
      
      <div>
        <h3>COLEGIOS</h3>
      </div>
      <div className='newSchools'>
        <IconAdd />
      </div>
      <div className='schools'>
        {
          schools && schools.map((item) => (
            <Card key={item.pId}>
              <CardContent>
                Colegio: {item.name}
                <IconSchool />
              </CardContent>
            </Card>
          )
          )
        }
      </div>
    </div>
  )
}
export default ConsultarColegio;