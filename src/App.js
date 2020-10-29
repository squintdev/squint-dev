import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';

import Blog from './components/Blog';
import Post from './components/Post';
import Tag from './components/Tag';
import WhoAmI from './components/WhoAmI';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={Post} />
            <Route path="/tag/:slug" component={Tag} />
            <Route path="/whoami" component={WhoAmI} />
        </>
    );
}

export default App;