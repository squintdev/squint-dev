import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';

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
    
    return (
        <>
            <Navbar />
            <div className="mainContainer">
                <div className="postGrid">
                    {data.posts.map(({feature_image, title, slug, published_at, excerpt, tags}, i) => (
                        <div className="gridItem" key={i}>
                            <div>
                                <img src={feature_image} alt={title} className="blogImageSquare"/>
                            </div>
                            <div>
                                <h4 className="multiBlogTitle">
                                    <Link className="links" to={`/blog/${slug}`}>{title}</Link>
                                </h4>
                                <p className="meta">
                                    {tags.map((tag, j) => 
                                        <Link key={j} className="links" to={`/tag/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                    )}
                                    <br/>
                                    <span className="postDate">{Moment(published_at).format('MM-DD-YYYY')} </span> 
                                </p>
                                <p className="excerpt">
                                    {excerpt} [<Link className="links" to={`/blog/${slug}`}>read more</Link>]
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
