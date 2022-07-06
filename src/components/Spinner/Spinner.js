//Elements and modules
import React, { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

//Components

import { CartContext } from "../../context/CartContext";

//Style

import './Spinner.scss'

function Spinner() {
    const { theme } = useContext(CartContext);
    return (
        <Box className={theme}>
            <div >
            <p className='spinnerText'>Cargando por favor espere...</p>
            <CircularProgress className='spinnerEffect'/>
            </div>
        </Box>
    );
}

export default Spinner