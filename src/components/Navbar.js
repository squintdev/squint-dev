import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileSlideMenu from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";

import {
    Menu,
    AssignmentInd,
    Home,
    Book,
    Apps,
    ContactMail
} from "@material-ui/icons";
import SquintMark from "../images/head-only.svg";

// temporary css styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#5c6d91",
        height: "100%"
    },
    squintMark: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(10),
        height: theme.spacing(15.75),
        padding: "0.75rem"
    },
    whiteText: {
        color: "rgb(255,255,255,0.67)"
    },
    redText: {
        color: "#da4646"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listURL: "/"
    },
    {
        listIcon: <Book/>,
        listText: "Blog",
        listURL: "/blog"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Who Am I?",
        listURL: "/whoami"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listURL: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listURL: "/contact"
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });
    
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open })
    }
    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.squintMark} src={SquintMark} alt="SquintDev" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listURL}>
                        <ListItemIcon className={classes.whiteText}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.whiteText} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#304263"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("left", true)}>
                            <Menu style={{color: "#da4646"}}/>
                        </IconButton>
                        <Typography variant="h5">
                            SquintDev
                        </Typography>
                        <MobileSlideMenu open={state.left} anchor="left" onClose={toggleSlider("left", false)}>
                            {sideList("left")}
                        </MobileSlideMenu>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;