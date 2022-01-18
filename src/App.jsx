
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Login from './components/auth/Login'
import Aliado from './components/pages/Aliado/Aliado'
import Administrador from './components/pages/Administrador/Administrador'


function App() {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Aliado" element={<Aliado />} />
          <Route path="Administrador" element={<Administrador/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;

