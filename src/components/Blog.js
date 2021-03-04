import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Grid} from '@material-ui/core';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#011c39",
        flexGrow: 1,
        padding: "2rem",
    },
    gridItem: {
        padding: "1rem"
    },
    blogImageSquare: {
        float: "left",
        width: "100%",
        height: "300px",
        objectFit: "cover",
        marginBottom: "2rem"
    },
    multiBlogTitle: {
        color: "#da4646",
        textTransform: "uppercase",
        fontSize: "1.75rem",
        marginBottom: "1rem"
    },
    links: {
        color: "#da4646",
        textDecoration: "none",
        padding: "1rem",
        "&:hover": {
            color: "#a2011e"
        }
    },
    meta: {
        color: "#da4646"
    },
    postDate: {
        color: "white",
        fontWeight: "bold",
        marginTop: "1rem"
    },
    excerpt: {
        color: "white",
        textAlign: "justify"
    }
}));

const Blog = () => {

    const [data, setData] = useState({posts: []});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://squintghost.herokuapp.com/ghost/api/v2/content/posts/?key=524e060a1d8a8b1df204be3fcf&include=tags');
                setData(response.data);
                console.log(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const classes = useStyles();
    
    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
                <Grid container spacing={3} classNam={classes.gridItem}>
                    {data.posts.map(({feature_image, title, slug, published_at, excerpt, tags}, i) => (
                        <Grid item sm={12} md={6} lg={4} key={i}>
                            <Box component="div">
                                <img src={feature_image} alt={title} className={classes.blogImageSquare}/>
                            </Box>
                            <Box component="div">
                                <Typography variant="h4" className={classes.multiBlogTitle}>
                                    <Link className={classes.links} to={`/blog/${slug}`}>{title}</Link>
                                </Typography>
                                <Typography variant="body1" className={classes.meta}>
                                    {tags.map((tag, j) => 
                                        <Link key={j} className={classes.links} to={`/tag/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                    )}
                                    <br/>
                                    <span className={classes.postDate}>{Moment(published_at).format('MM-DD-YYYY')} </span> 
                                </Typography>
                                <Typography variant="body2" className={classes.excerpt}>
                                    {excerpt} [<Link className={classes.links} to={`/blog/${slug}`}>read more</Link>]
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Blog;
