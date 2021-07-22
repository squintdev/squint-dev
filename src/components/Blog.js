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
            <div className="container w-full m-auto mt-4 p-4">
                <div className="text-center w-full m-auto lg:w-1/2 m-auto">
                    {data.posts.map(({title, slug, published_at, tags}, i) => (
                        <div className="pb-6" key={i}>
                            <div className="mt-2">
                                <h4 className="text-xl font-bold text-accent-default hover:text-secondary-light">
                                    <Link className="links" to={`/blog/${slug}`}>{title}</Link>
                                </h4>
                                <span className="font-bold">Tags: </span>
                                <span className="italic">
                                    {tags.map((tag, j) => 
                                        <Link key={j} className="hover:text-secondary-light" to={`/tag/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                    )}
                                    <br/>
                                    <span className="font-bold">Published: </span>
                                    <span className="postDate">{Moment(published_at).format('MM-DD-YYYY')} </span> 
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
