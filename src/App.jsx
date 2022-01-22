import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Login from './components/auth/Login';
import Aliado from './components/pages/Aliado/Aliado';
import Administrador from './components/pages/Administrador/Administrador';
import InfoColegio from './components/pages/InfoColegio/InfoColegio';
import MetodologiaOso from './components/pages/MetodologiaOso/MetodologiaOso';
import ActualizacionInfo from './components/pages/ActualizacionInfo/ActualizacionInfo';
import BancoHerramientas from './components/pages/BancoHerramientas/BancoHerramientas';
import CrearColegio from './components/pages/CrearColegio/CrearColegio';
import EditarColegio from './components/pages/EditarColegio/EditarColegio';
import ConsultarColegio from './components/pages/ConsultarColegio/ConsultarColegio';
import InfoMetodologia from './components/pages/InfoMetodologia/InfoMetodologia';
import DocGestion from './components/pages/DocGestion/DocGestion';
import MatCartillas from './components/pages/MatCartillas/MatCartillas'
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="Aliado" element={<Aliado />} />
          <Route path="Administrador" element={<Administrador />} />
          <Route path="InfoColegio/:sId" element={<InfoColegio />} />
          <Route path="MetodologiaOso" element={<MetodologiaOso />} />
          <Route path="ActualizacionInfo" element={<ActualizacionInfo />} />
          <Route path="BancoHerramientas" element={<BancoHerramientas />} />
          <Route path="CrearColegio" element={<CrearColegio />} />
          <Route path="EditarColegio/:sId" element={<EditarColegio />} />
          <Route path="ConsultarColegio" element={<ConsultarColegio />} />
          <Route path="InfoMetodologia" element={<InfoMetodologia />} />
          <Route path='DocGestion' element={<DocGestion />} />
          <Route path='MatCartillas' element={<MatCartillas />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

