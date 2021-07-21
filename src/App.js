import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/';
import Blog from './components/Blog';
import Post from './components/Post';
import Tag from './components/Tag';
import WhoAmI from './components/WhoAmI';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={Post} />
            <Route path="/tag/:slug" component={Tag} />
            <Route path="/whoami" component={WhoAmI} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </>
    );
}

export default App;