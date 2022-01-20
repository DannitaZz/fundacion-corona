import React from 'react';
import IconAdd from './IconAdd';
import IconSchool from './IconSchool';
import { useEffect, useState } from "react";
import { getSchools } from '../../../Firebase/functions';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../../Firebase/firebaseConfig';
import { getAuth } from 'firebase/auth';
import imgSchool from '../../../images/school-consul.png'
import './ConsultarColegio.css';
import Footer from '../../Footer/Footer';

const ConsultarColegio = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const callSchools = async () => {
      /* let arraySchools = [];
      const qSchools = await getSchools();
      qSchools.forEach((doc) => {
        arraySchools.push(doc);
        console.log(doc.data());
        console.log(doc.id);
      }); */
      const auth = getAuth();
      const user = auth.currentUser;
      const pId = user.uid;
      const q = query(collection(db, "partners", pId, "schools"));
      onSnapshot(q, (querySnapshot) => {
        let arraySchools = [];
        querySnapshot.forEach((doc) => {
          arraySchools.push(doc);
        });
        console.log(arraySchools);
        setSchools(arraySchools);
      });
      
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
        <IconAdd />
      </div>
      <div className='cardSchools'>
        {
          schools && schools.map((item) => (
            <div key={item.id} className='cardSchool' id={item.id}>
              <h2 className='colegio'>Colegio {item.data().name} </h2>
              <IconSchool sId={item.id} />
            </div>
          )
          )
        }
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>

  )
}
export default ConsultarColegio;