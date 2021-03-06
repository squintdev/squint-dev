import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Button} from '@material-ui/core';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#011c39",
        padding: ".5rem",
    },
    article: {
        width: "75%",
        margin: "auto",
        marginTop: ".5rem",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            padding: ".5rem"
        }
    },
    featuredImage: {
        width: "100%",
        marginTop: ".5rem"
    },
    articleWrapper: {
        
    },
    multiBlogTitle: {
        color: "#da4646",
        textTransform: "uppercase",
        marginBottom: "2rem"
    },
    links: {
        color: "#da4646",
        textDecoration: "none",
        "&:hover": {
            color: "#a2011e"
        }
    },
    meta: {
        color: "#da4646",
        marginBottom: "1rem"
    },
    postDate: {
        color: "white",
        fontWeight: "bold"
    },
    postBody: {
        color: "white",
        marginTop: "1rem",
        fontSize: "1rem"
    },
    backButton: {
        marginTop: "1rem",
        marginBottom: "2rem"
    }
}));

const Post = () => {
    let { slug } = useParams();

    const [data, setData] = useState({posts: []});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://squintghost.herokuapp.com/ghost/api/v2/content/posts/slug/${slug}?key=524e060a1d8a8b1df204be3fcf&include=tags`);
                setData(response.data);
                console.log(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [slug]);

    const classes = useStyles();
    
    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
                {data.posts[0] && (
                    <Box key={data.posts[0].id} component="div" className={classes.article}>
                        <Box component="div" className={classes.articleWrapper}>
                            <Typography variant="h4" className={classes.multiBlogTitle}>
                                {data.posts[0].title}
                            </Typography>
                            <Typography variant="body1" className={classes.meta}>
                                <span className={classes.postDate}>{Moment(data.posts[0].published_at).format('MM-DD-YYYY')}</span> | {data.posts[0].tags.map(tag => (
                                    <Link key={tag.id} className={classes.links} to={`/tag/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                ))}
                            </Typography>
                            <Box component="div">
                                <img src={data.posts[0].feature_image} alt={data.posts[0].title} className={classes.featuredImage}/>
                            </Box>
                            <div className={classes.postBody} dangerouslySetInnerHTML={{ __html: data.posts[0].html }} />
                        </Box>
                        <Button variant="contained" color="primary" className={classes.backButton} component={Link} to="/blog">Back To Posts</Button>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default Post;