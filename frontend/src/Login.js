import React, { Component } from 'react';

import { Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Col xs={4} xsOffset={4}>
                    <Form>
                        <h2>Please sign in</h2>
                        <FormGroup controlId="formValidationSuccess1">
                            <FormControl type="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="password" placeholder="Password" />
                        </FormGroup>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </div>
        );
    }
}

export default Login;
