import React, { Component } from 'react';
import './App.css';

import { Grid } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Grid>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </Grid>
                </Router>
            </div>
        );
    }
}

export default App;
