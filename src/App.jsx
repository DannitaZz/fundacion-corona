
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Login from './components/auth/Login';
import Aliado from './components/pages/Aliado/Aliado';
import Administrador from './components/pages/Administrador/Administrador';
import InfoColegios from './components/pages/InfoColegios/InfoColegios';
import MetodologiaOso from './components/pages/MetodologiaOso/MetodologiaOso';
import ActualizacionInfo from './components/pages/ActualizacionInfo/ActualizacionInfo';
import BancoHerramientas from './components/pages/BancoHerramientas/BancoHerramientas';
import CrearColegio from './components/pages/CrearColegio/CrearColegio';
import EditarColegio from './components/pages/EditarColegio/EditarColegio';
import ConsultarColegio from './components/pages/ConsultarColegio/ConsultarColegio';


function App() {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Aliado" element={<Aliado />} />
          <Route path="Administrador" element={<Administrador/>} />
          <Route path="InfoColegios" element={<InfoColegios/>} />
          <Route path="MetodologiaOso" element={<MetodologiaOso/>} />
          <Route path="ActualizacionInfo" element={<ActualizacionInfo/>} />
          <Route path="BancoHerramientas" element={<BancoHerramientas/>} />
          <Route path="CrearColegio" element={<CrearColegio/>} />
          <Route path="EditarColegio" element={<EditarColegio/>} />
          <Route path="ConsultarColegio" element={<ConsultarColegio/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;

