import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/';
import Cc0 from './components/Cc0';
import Exoplanet from './components/Exoplanet';
import ExoMint from './components/ExoMint';
import Walrus from './components/Walrus';
import ThenNow from './components/ThenNow';
import Sool from './components/Sool';

const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/projectcc0" component={Cc0} />
            <Route exact path="/exoplanet-punks" component={Exoplanet} />
            <Route exact path="/exo-mint" component={ExoMint} />
            <Route exact path="/sacred-walrus" component={Walrus} />
            <Route exact path="/then-vs-now" component={ThenNow} />
            <Route exact path="/sool" component={Sool} />
        </>
    );
}

export default App;