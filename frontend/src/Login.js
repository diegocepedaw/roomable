import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Form, FormGroup, FormControl, Button, PageHeader } from 'react-bootstrap';

import { loginReset, loginSuccess } from './actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
        };
    }

    async onSubmit() {
        this.setState({
            submitted: true,
        });

        try {
            const json = await this.props.sendLogin(this.state.email, this.state.password);

            if (!json.authenticated) {
                alert('Bad credentials');
            } else {
                this.props.history.push('/profile');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred, try again later');
        }

        this.setState({
            submitted: false,
        });
    }

    onEmailEdit(email) {
        this.setState({
            email,
        });
    }

    onPasswordEdit(password){
        this.setState({
            password,
        });
    }

    render() {
        return (
            <div className="Login">
                <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                    <Form>
                        <PageHeader>Please sign in</PageHeader>
                        <FormGroup controlId="formValidationSuccess1">
                            <FormControl
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.onEmailEdit(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(e) => this.onPasswordEdit(e.target.value)}
                            />
                        </FormGroup>
                        <Button
                            disabled={this.state.submitted}
                            bsStyle="primary"
                            onClick={() => this.onSubmit()}
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendLogin: async (email, password) => {
            dispatch(loginReset());
            const form = new FormData();
            form.append('email', email);
            form.append('password', password);
            return fetch('/server/api/loginuser', {
                method: 'POST',
                body: form,
                credentials: 'include',
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Bad return code from request');
                } else {
                    return response.json();
                }
            }).then(json => {
                if(json.authenticated) {
                    dispatch(loginSuccess(json.email));
                }

                return json;
            });
        }
    };
};

export { Login };

export default connect(
    () => ({}),
    mapDispatchToProps
)(Login);
