import React from 'react';
import IconAdd from './IconAdd';
import IconSchool from './IconSchool';
import { useEffect, useState } from "react";
import { getSchools } from '../../../Firebase/functions';
import imgSchool from '../../../images/school-consul.png'
import './ConsultarColegio.css';


const ConsultarColegio = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const callSchools = async () => {
      
      let arraySchools = [];
      const qSchools = await getSchools();
      qSchools.forEach((doc) => {
        arraySchools.push(doc);
        console.log(doc.data());
        console.log(doc.id);
      });
      setSchools(arraySchools);
    }
    callSchools();
  }, [])

  return (
      <div className='titleSchool'>
        <div className="titulo">
          <img src={imgSchool} alt="school" width="35px" height="45px" />
          <h3>COLEGIOS</h3>      
        </div>
      <div className='newSchools'>
        <IconAdd  />
      </div>
      <div className='cardSchools'>
        {
          schools && schools.map((item) => (
            <div key={item.id} className='cardSchool' id={item.id}>
              <h2 className='colegio'>Colegio {item.data().name} </h2>
              <IconSchool  sId={item.id}/>
            </div>
          )
          )
        }
      </div>
    </div>

  )
}
export default ConsultarColegio;