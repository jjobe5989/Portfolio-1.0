import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Main.css';

// Components
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import AboutMe from './AboutMe';

function App() {
    return (
        <Router>
            <div className="App">
            <header className="App-header">
                <p>Jonathan Jobe</p>
            </header>
        </div>
        </Router>
    )
}

export default Main;