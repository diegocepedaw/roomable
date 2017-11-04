import React, { Component } from 'react';

import { Col, ButtonGroup, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                    <h1>Roomable</h1>
                    <h3>Leave no room for doubt</h3>
                    <ButtonGroup vertical block>
                        <Button bsStyle="primary" block onClick={() => this.props.history.push('/login')}>Login</Button>
                        <Button block onClick={() => this.props.history.push('/register')}>Sign Up</Button>
                    </ButtonGroup>
                </Col>
            </div>
        );
    }
}

export default Home;
