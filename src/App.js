import React from 'react';
import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Home/>
        </>
    );
}

export default App;