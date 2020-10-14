import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';

const WhoAmI = () => {
    return (
        <>
            <Navbar />
            <Box component="header">
                <Typography variant="h4" align="center">
                    Who Am I?
                </Typography>
            </Box>
            <Box component="div">
                <Typography variant="h2">Blah</Typography>
            </Box>
        </>
    );
};

export default WhoAmI;