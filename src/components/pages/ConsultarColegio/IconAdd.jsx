import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../../../index.js'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import './ConsultarColegio.css';

export default function IconAdd() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 }}}>
            <Fab variant="extended" className="iconAdd">
                <Link to="/CrearColegio">
                        <AddCircleIcon sx={{ mr: 1 }} />
                        Agregar Nuevo Colegio
                </Link>
            </Fab>
        </Box>

    )
};