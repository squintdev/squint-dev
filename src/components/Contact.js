import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Button, Grid, Box, Typography} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#011c39",
        height: "100vh"
    },
    title: {
        color: "#da4646"
    },
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "#da4646",
        borderColor: "#da4646"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#da4646",
        },
        "& label": {
            color: "#da4646"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#da4646"
            },
            "&:hover fieldset": {
                borderColor: "#da4646"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#da4646"
            }
        }
    },
})(TextField);

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
                <Grid container justify="center">
                    <form className={classes.form} method="post" action="/contact" name="contact">
                        <Typography variant="h5" className={classes.title}>
                            Contact me...
                        </Typography>
                        <input type="hidden" name="form-name" value="contact" />
                        <InputField required name="name" fullWidth={true} label="Name" variant="outlined" inputProps={{style:{ color: "white" }}} margin="dense" size="medium" />
                        <InputField required name="email" fullWidth={true} label="Email" variant="outlined" inputProps={{style:{ color: "white" }}} margin="dense" size="medium" />
                        <InputField required name="message" fullWidth={true} label="Message" variant="outlined" inputProps={{style:{ color: "white" }}} margin="dense" size="medium" multiline rows={4}/>
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>Send</Button>
                    </form>
                </Grid>
            </Box>
        </>
    )
}

export default Contact;
