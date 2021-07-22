import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';

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
    
    return (
        <>
            <Navbar />
            <div className="container w-full m-auto mt-4 p-4">
                {data.posts[0] && (
                    <div key={data.posts[0].id} className="article">
                        <div className="articleWrapper">
                            <h4 className="text-3xl text-accent-default">
                                {data.posts[0].title}
                            </h4>
                            <p className="meta">
                                <span className="postDate">{Moment(data.posts[0].published_at).format('MM-DD-YYYY')}</span> | {data.posts[0].tags.map(tag => (
                                    <Link key={tag.id} className="hover:text-secondary-light" to={`/tag/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                ))}
                            </p>
                            <div className="mt-4" dangerouslySetInnerHTML={{ __html: data.posts[0].html }} />
                        </div>
                        <a className="hover:text-secondary-light" href="/blog">Back To Posts</a>
                    </div>
                )}
            </div>
        </>
    );
};

export default Post;