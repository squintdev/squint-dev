import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography, Paper, Grid} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
    },
    mainContainer: {
        background: "#011c39",
        height: "100vh",
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#000000',
        color: theme.palette.text.primary,
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#da4646",
        paddingBottom: "2rem",
        textAlign: "center",
    }
}));

const Projects = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
                <Typography variant="h2" className={classes.title}>Projects</Typography>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} className="gridItem">
                            <Paper className={classes.paper}>xs=12 sm=6</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} className="gridItem">
                            <Paper className={classes.paper}>xs=12 sm=6</Paper>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Projects;
