import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <Row>
                        <Col xs="6"><h1>Roomable</h1></Col>
                    </Row>
                    <Row>
                        <Col xs="6">Leave no room for doubt</Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
