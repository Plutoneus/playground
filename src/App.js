import React from 'react';
import { BrowserRoute as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';

const App = () => {
    return (
        <div className="App">
            <Nav />
            <About />
            <Shop />
        </div>
    );
}

export default App;
