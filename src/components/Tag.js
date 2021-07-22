import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';

const Tag = () => {
    let { slug } = useParams();

    const [data, setData] = useState({posts: []});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://squintghost.herokuapp.com/ghost/api/v2/content/posts?filter=tags%3A%5B${slug}%5D&key=524e060a1d8a8b1df204be3fcf&include=tags`);
                setData(response.data);
                console.log(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [slug]);
    
    return (
        <>
            <Navbar />
            <div className="container w-full m-auto mt-4 p-4">
                <div className="text-center w-1/4 m-auto">
                    {data.posts.map(({title, slug, published_at, tags}, i) => (
                        <div key={i} className="pb-6">
                            <div className="mt-2">
                                <h4 className="text-xl font-bold text-accent-default hover:text-secondary-light">
                                    <Link className="hover:text-secondary-light" to={`/blog/${slug}`}>{title}</Link>
                                </h4>
                                <p className="meta">
                                    <span className="postDate">{Moment(published_at).format('MM-DD-YYYY')} </span> {tags.map((tag, j) => 
                                        <Link key={j} className="hover:text-secondary-light" to={`/tag/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tag;
