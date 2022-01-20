import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './ConsultarColegio.css';

const IconSchool = ({sId}) => {
    return (
        <>
            <Stack spacing={3} direction='row' className='iconos'>
                <Link to={`/InfoColegio/${sId}`}>
                    <IconButton aria-label="search">
                        <SearchIcon className='iconSearch'></SearchIcon>
                    </IconButton>
                </Link>
                <Link to={`/EditarColegio/${sId}`}>
                <IconButton aria-label="edit">
                    <ModeEditIcon className='iconEdit'></ModeEditIcon>
                </IconButton>
                </Link>
                <IconButton aria-label="delete">
                    <DeleteIcon className='iconDelete'></DeleteIcon>
                </IconButton>
            </Stack>
        </>
    )
}
export default IconSchool;