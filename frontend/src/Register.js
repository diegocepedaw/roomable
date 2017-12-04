import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Form, FormGroup, FormControl, Button, PageHeader } from 'react-bootstrap';

import { loginReset, loginSuccess } from './actions';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordRpt: '',
            submitted: false,
        };
    }

    async onSubmit(e) {
        console.log(this.state);
        e.preventDefault();

        this.setState({
            submitted: true,
        });

        try {
            const json = await this.props.sendLogin(this.state.email, this.state.password);

            if (!json.authenticated) {
                alert('Bad credentials');
                this.setState({
                    submitted: false,
                });
            } else {
                this.props.history.push('/preferences');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred, try again later');
            this.setState({
                submitted: false,
            });
        }
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

    onPasswordRptEdit(passwordRpt){
        this.setState({
            passwordRpt,
        });
    }

    render() {
        return (
            <div className="Login">
                <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                    <Form onSubmit={(e) => this.onSubmit(e)}>
                        <PageHeader>Please register</PageHeader>
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
                        <FormGroup>
                            <FormControl
                                type="password"
                                placeholder="Repeat Password"
                                value={this.state.passwordRpt}
                                onChange={(e) => this.onPasswordRptEdit(e.target.value)}
                            />
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

const mapDispatchToProps = dispatch => {
    return {
        sendLogin: async (email, password) => {
            dispatch(loginReset());
            const form = new FormData();
            form.append('email', email);
            form.append('password', password);
            return fetch('/server/api/registeruser', {
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

export { Register };

export default connect(
    () => ({}),
    mapDispatchToProps
)(Register);
