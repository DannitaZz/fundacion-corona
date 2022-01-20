import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './ConsultarColegio.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Delete';
import { deleteSchool } from '../../../Firebase/functions';

const IconSchool = ({ sId }) => {
    return (
        <>
            <div className='desing'>
                <AccountBalanceIcon></AccountBalanceIcon>
            </div>
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
                    <IconButton aria-label="edit">
                        <Delete className='iconDelete' onClick={()=> {deleteSchool(sId)}}></Delete>
                    </IconButton>
            </Stack>
        </>
    )
}
export default IconSchool;