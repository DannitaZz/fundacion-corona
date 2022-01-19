import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../../../index.js'
import './Consultar.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

export default function IconAdd() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended">
                <Link to="/CrearColegio">
                    <AddCircleIcon sx={{ mr: 1 }} />
                    Agregar Nuevo Colegio
                </Link>
            </Fab>
        </Box>

    )
};