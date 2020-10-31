import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#011c39",
        height: "100vh"
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#da4646",
        padding: "2rem"
    }
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
                <Typography variant="h2" className={classes.title}>Coming Soon...</Typography>
            </Box>
        </>
    )
}

export default Contact;
