import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/';
import Exoplanet from './components/Exoplanet';
import Walrus from './components/Walrus';

const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/exoplanet-punks" component={Exoplanet} />
            <Route exact path="/sacred-walrus" component={Walrus} />
        </>
    );
}

export default App;