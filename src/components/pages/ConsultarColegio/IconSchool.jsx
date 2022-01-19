import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const IconSchool = () => {
    return (
        <>
            <Stack direction="row" spacing={5}>
                <Link to="/InfoColegio">
                    <IconButton aria-label="search">
                        <SearchIcon></SearchIcon>
                    </IconButton>
                </Link>
                <Link to="/EditarColegio">
                <IconButton aria-label="edit">
                    <ModeEditIcon></ModeEditIcon>
                </IconButton>
                </Link>
                <IconButton aria-label="delete">
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            </Stack>
        </>
    )
}
export default IconSchool;