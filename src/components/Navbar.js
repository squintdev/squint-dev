import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    ArrowBack,
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
        height: "30rem"
    },
    squintMark: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(8),
        height: theme.spacing(13),
        padding: "0.5rem"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <Book/>,
        listText: "Blog"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact"
    }
];

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.menuSliderContainer} component="div">
                <Avatar className={classes.squintMark} src={SquintMark} alt="SquintDev" />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key}>
                            <ListItemIcon>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText>
                                {lsItem.listText}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box component="nav">
                <AppBar position="static" style={{background: "#304263"}}>
                    <Toolbar>
                        <IconButton>
                            <Menu style={{color: "#da4646"}}/>
                        </IconButton>
                        <Typography variant="h5">
                            SquintDev
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;