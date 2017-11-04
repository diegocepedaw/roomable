import React, { Component } from 'react';
import './App.css';

import { Grid } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Matches from './Matches';
import NotFound from './NotFound';

import sample_matches from './sample_matches';

class App extends Component {
    render() {
        // sample_matches.userlist = [];
        return (
            <div className="App">
                <Router>
                    <Grid>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/matches" render={(props) => (
                                <Matches {...props} matches={sample_matches} />
                            )}/>
                            <Route component={NotFound} />
                        </Switch>
                    </Grid>
                </Router>
            </div>
        );
    }
}

export default App;
