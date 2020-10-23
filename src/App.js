import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';

import Blog from './components/Blog';
import WhoAmI from './components/WhoAmI';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/whoami" component={WhoAmI} />
        </>
    );
}

export default App;