import React, { Component } from 'react';

import { Col, Form, FormGroup, FormControl, Button, PageHeader } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                    <Form>
                        <PageHeader>Please sign in</PageHeader>
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
