import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const IconSchool = () => {
    return (
        <>
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="search">
                    <SearchIcon></SearchIcon>
                </IconButton>
                <IconButton aria-label="edit">
                    <ModeEditIcon></ModeEditIcon>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            </Stack>
        </>
    )
}
export default IconSchool;