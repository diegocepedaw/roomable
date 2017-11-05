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
import Profile from './Profile';
import Preferences from './Preferences';
import otherProfile from './otherProfile';
import Matches from './Matches';
import NotFound from './NotFound';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Grid>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/preferences" component={Preferences}/>
                            <Route exact path="/matches" render={(props) => (
                                <Matches {...props} />
                            )}/>
                            <Route exact path="/user/:email" component={otherProfile}/>
                            <Route component={NotFound} />
                        </Switch>
                    </Grid>
                </Router>
            </div>
        );
    }
}

export default App;
