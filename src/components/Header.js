import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typed from 'react-typed';
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import SquintMark from "../images/head-only.svg";

// temporary CSS styles
const useStyles = makeStyles(theme=>({
    SquintMark: {
        width: theme.spacing(12),
        height: theme.spacing(18.875),
        margin: theme.spacing(2),
        padding: ".75rem"
    },
    title: {
        color: "#da4646",
        fontWeight: "bold",
    },
    subtitle: {
        color: "rgb(0,0,0,0.7)",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.SquintMark} src={SquintMark} alt="SquintDev" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["SquintDev"]} typeSpeed={70} />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Technologist", "Software Developer", "AI Enthusiast", "NFT Creator", "Musician", "Fly Fisherman", "Woodworker", "Insomniac"]} typeSpeed={70} backSpeed={80} loop />
            </Typography>
        </Box>
    );
};

export default Header;
