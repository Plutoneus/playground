import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';
import Monsters from './components/Monsters';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/playground" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/monsters" exact component={Monsters} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
