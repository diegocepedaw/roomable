import React, { Component } from 'react';
import './App.css';

import { Grid } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Login from './Login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <Router>
                        <Route exact path="/" component={Login}/>
                    </Router>
                </Grid>
            </div>
        );
    }
}

export default App;
