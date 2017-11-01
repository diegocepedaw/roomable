import React, { Component } from 'react';

import { Col, ButtonGroup, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className="Login">
                <Col xs={4} xsOffset={4}>
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
