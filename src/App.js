import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/';
import Exoplanet from './components/Exoplanet';
import Walrus from './components/Walrus';
import ThenNow from './components/ThenNow';
import Sool from './components/Sool';
import GenerationCMYK from './components/GenerationCMYK';
import DeathPunk from './components/DeathPunk';
import Snitches from './components/Snitches';
import RejectedGame from './components/RejectedGame';
import SanitySavers from './components/SanitySavers';
import GlitchBanners from './components/GlitchBanners';
import DyingConclusion from './components/DyingConclusion';
import DosSkulls from './components/DosSkulls';


const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/exoplanet-punks" component={Exoplanet} />
            <Route exact path="/sacred-walrus" component={Walrus} />
            <Route exact path="/then-vs-now" component={ThenNow} />
            <Route exact path="/sool" component={Sool} />
            <Route exact path="/generationcmyk" component={GenerationCMYK} />
            <Route exact path="/death-punk" component={DeathPunk} />
            <Route exact path="/snitches-get-glitches" component={Snitches} />
            <Route exact path="/rejected-game-assets" component={RejectedGame} />
            <Route exact path="/sanity-savers" component={SanitySavers} />
            <Route exact path="/glitch-banners" component={GlitchBanners} />
            <Route exact path="/impression-dying-conclusion" component={DyingConclusion} />
            <Route exact path="/dos-skulls" component={DosSkulls} />
        </>
    );
}

export default App;