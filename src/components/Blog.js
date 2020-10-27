import React from 'react';
import GhostContentAPI from '@tryghost/content-api';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#011c39",
        padding: "3rem"
    },
    multiBlogTitle: {
        color: "#da4646",
        padding: "3rem 0",
        textTransform: "uppercase"
    }
}));

const api = new GhostContentAPI({
    url: 'https://squintghost.herokuapp.com',
    key: '524e060a1d8a8b1df204be3fcf',
    version: "v2"
});

//grab all posts
api.posts
    .browse({include: 'tags, authors'})
    .then((posts) => {
        posts.forEach((post) => {
            console.log(post);
        });
    })
    .catch((err) => {
        console.error(err);
    });

const Blog = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h3" className={classes.multiBlogTitle}>
                    Test
                </Typography>
            </Box>
        </>
    );
};

export default Blog;
