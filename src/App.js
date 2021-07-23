import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/';
import Blog from './components/Blog';
import Post from './components/Post';
import Tag from './components/Tag';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import SSWGallery from './components/SSWGallery';

const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={Post} />
            <Route path="/tag/:slug" component={Tag} />
            <Route path="/projects" component={Projects} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/ssw-curation" component={SSWGallery} />
        </>
    );
}

export default App;