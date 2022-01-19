import React from 'react';
import IconAdd from './IconAdd';
import IconSchool from './IconSchool';
import { useEffect, useState } from "react";
import { getSchools } from '../../../Firebase/functions';
import './ConsultarColegio.css';

const ConsultarColegio = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const callSchools = async () => {
      const pId = 'lzbAlSzucQa3ELUbYMbCBddz6uk2';
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
      <div className='titleSchool'>
      <img src="./images/school-consul.png" alt="school" width="35px" height="45px" />
        <h3>COLEGIOS</h3>
      </div>
      <div className='newSchools'>
        <IconAdd />
      </div>
      <div className='cardSchools'>
        {
          schools && schools.map((item) => (
            <div key={item.pId} className='cardSchool'>
              <h2 className='colegio'>Colegio {item.name}</h2>
              <IconSchool />
            </div>
          )
          )
        }
      </div>
    </div>

  )
}
export default ConsultarColegio;