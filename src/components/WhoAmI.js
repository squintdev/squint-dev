import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#011c39"
    },
    intro: {
        width: "80%",
        margin: "auto",
        marginBottom: "3rem",
        color: "white"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #5c6d91",
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
            borderColor: "#da4646 #da4646 transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#5c6d91"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #da4646 #da4646"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#da4646",
        lineHeight: 1,
        padding: "1rem 0 1rem",
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
        color: "#da4646",
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
                <Box component="div" className={classes.intro}>
                    <Typography variant="body1" align="center" className={classes.introP}>
                        Hello! My name is Tom. I live in Reno, Nevada. The most important things in my life are my amazing wife, my 3 crazy kids, and my two smelly dogs, Tippet and Bijou. Most of my software development history is in PHP and Laravel, but I'm starting to shift towards Javascript with a focus on the MERN stack. This site was built using React for the front end and NodeJS/Ghost for the backend.
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2005</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Founder/CEO
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            TechRemedy
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            On-site technical support, cybersecurity, web development, web hosting
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2011</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Web Developer
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            OHL/Geodis
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            Wrote web applications to monitor and manage large logistics operations for clients including Starbucks, Red Bull, Nutrisystem, and Walmart.
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2014</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Creative Technologist
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            The Glenn Group/Wide Awake
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            Digital marketing, web development, creative direction for technology.
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2015</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            President
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            StreamWorks
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            Built a brand manufacturing fly fishing tools and accessories. Digital/social marketing, web development, e-commerce.
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2016</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Marketing Director
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            ReadyMax
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            Safety products manufacturer. Focused on digital marketing and tradeshow marketing.
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2018</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Digital Director
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            Foundry
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            Ran the digital marketing and web team at a large creative agency. Focus on web development, SEO, Social Media, SEM, Email Marketing, and Team/Project Management.
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Digital Director
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            SAF Holdings and Subsidiaries
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            Web development, financial data analysis, and digital marketing for a loan originator in the Home Improvement industry.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2021</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Director of Software
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#da4646"}}>
                            SAF Holdings and Subsidiaries
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                            Software development, software management, and financial data analysis for a loan originator in the Home Improvement industry.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default WhoAmI;