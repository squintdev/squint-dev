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
            <div className="mainContainer">
                {data.posts.map(({feature_image, title, slug, published_at, excerpt, tags}, i) => (
                    <div key={i} className="article">
                        <div>
                            <img src={feature_image} alt={title} className="blogImageSquare" />
                        </div>
                        <div className="articleWrapper">
                            <h4 className="multiBlogTitle">
                                <Link className="links" to={`/blog/${slug}`}>{title}</Link>
                            </h4>
                            <p className="meta">
                                <span className="postDate">{Moment(published_at).format('MM-DD-YYYY')} </span> {tags.map((tag, j) => 
                                    <Link key={j} className="links" to={`/tag/${tag.slug}`}>{tag.name}&nbsp;|&nbsp;</Link>
                                )}
                            </p>
                            <p className="excerpt">
                                {excerpt} [<Link className="links" to={`/blog/${slug}`}>read more</Link>]
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tag;
