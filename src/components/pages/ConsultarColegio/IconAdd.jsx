import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import '../../../index.js'
import './consultar.css'



export default function IconAdd() {
    return (
            <IconButton className="btnCircle" >
                <AddCircleIcon></AddCircleIcon>
            </IconButton>
    )
};
