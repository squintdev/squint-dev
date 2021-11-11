import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/';
import Blog from './components/Blog';
import Post from './components/Post';
import Tag from './components/Tag';
import Projects from './components/Projects';

const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
        </>
    );
}

export default App;