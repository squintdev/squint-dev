import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';

const useStyles = makeStyles(theme=>({
    html: {
        height: "100%"
    },
    body: {
        height: "100%"
    },
    mainContainer: {
        background: "#011c39",
        padding: "3rem",
        height: "100%"
    },
    article: {
        display: "flex",
        alignItems: "top",
        marginBottom: "2rem"
    },
    blogImageSquare: {
        height: "150px",
        width: "auto"
    },
    articleWrapper: {
        paddingLeft: "2rem"
    },
    multiBlogTitle: {
        color: "#da4646",
        textTransform: "uppercase"
    },
    links: {
        color: "#da4646",
        textDecoration: "none",
        "&:hover": {
            color: "#a2011e"
        }
    },
    meta: {
        color: "#da4646"
    },
    postDate: {
        color: "white",
        fontWeight: "bold"
    },
    excerpt: {
        color: "white"
    }
}));

const Blog = () => {

    const [data, setData] = useState({posts: []});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://squintghost.herokuapp.com/ghost/api/v2/content/posts/?key=524e060a1d8a8b1df204be3fcf&include=tags,authors');
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
                {data.posts.map(({feature_image, title, slug, published_at, excerpt, tags}, i) => (
                    <Box key={i} component="div" className={classes.article}>
                        <Box component="div" className={classes.blogImageSquare}>
                            <img style={{width:"200px"}} src={feature_image} alt={title} />
                        </Box>
                        <Box component="div" className={classes.articleWrapper}>
                            <Typography variant="h4" className={classes.multiBlogTitle}>
                                <Link className={classes.links} to={`/blog/${slug}`}>{title}</Link>
                            </Typography>
                            <Typography variant="body1" className={classes.meta}>
                                <span className={classes.postDate}>{Moment(published_at).format('MM-DD-YYYY')} </span> {tags.map((tag, j) => 
                                    <Link key={j} className={classes.links} to={`/blog/tags/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                )}
                            </Typography>
                            <Typography variant="body2" className={classes.excerpt}>
                                {excerpt} [<Link className={classes.links} to={`/blog/${slug}`}>read more</Link>]
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Blog;
