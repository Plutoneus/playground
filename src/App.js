import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
