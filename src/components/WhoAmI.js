import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const WhoAmI = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Who Am I?
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>Year</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Item Heading
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Company Name
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                            description text lorem ipsum stuffy stuff lorem ipsum stuffystuff
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>Year2</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Item Heading 2
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Company Name 2
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                            description text lorem ipsum stuffy stuff lorem ipsum stuffystuff
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default WhoAmI;