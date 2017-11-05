import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRequest, userSuccess, userError } from './actions';
import './Profile.css';


import { Col, Form, Button, Jumbotron } from 'react-bootstrap';

class Profile extends Component {
    componentDidMount() {
        this.props.dataFetch(this.props.email);
    }

    render() {
        if (this.props.error) {
            return (
                <div className="Profile">
                    <Col xs={7} xsOffset={1}>
                        <h3>An error occurred!</h3>
                    </Col>
                </div>
            );
        }

        if (!this.props.data || this.props.loading) {
            return (
                <div className="Profile">
                    <Col xs={7} xsOffset={1}>
                        <h3>Loading...</h3>
                    </Col>
                </div>
            );
        }

        return (
            <div className="Profile">
                <Col xs={7} xsOffset={1}>
                    <Jumbotron>
                        <h1><i className="fa fa-user" aria-hidden="true"></i> {this.props.data.handle}</h1>
                        <hr />
                        <p>{this.props.data.description}</p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1><i className="fa fa-address-book-o" aria-hidden="true"></i> Contact Links</h1>
                        <hr />
                        <p><i className="fa fa-envelope" aria-hidden="true"></i> <a href={`mailto:${this.props.data.email}`}>{this.props.data.email}</a></p>
                        <p><i className="fa fa-facebook" aria-hidden="true"></i><a href="https://facebook.com"> facebook</a></p>
                        <p><i className="fa fa-twitter" aria-hidden="true"></i><a href="https://twitter.com"> twitter</a></p>
                        <p>
                            <Button type="submit">
                                Edit Contact Links
                            </Button>
                        </p>
                    </Jumbotron>
                </Col>
                <Col xs={3} >
                    <Jumbotron>
                        <Form>
                            <p><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></p>
                            <p>
                                <Button type="submit">
                                    <a href="/preferences">Edit Preferences</a>
                                </Button>
                            </p>
                            <hr />
                            <p><i className="fa fa-flask fa-2x" aria-hidden="true"></i></p>
                            <p>
                                <Button type="submit">
                                    <a href="/matches">Find Matches</a>
                                </Button>
                            </p>
                        </Form>
                    </Jumbotron>
                </Col>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.user.data,
        loading: state.user.loading,
        email: state.token.email,
        error: state.user.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dataFetch: (email) => {
            dispatch(userRequest());
            fetch(`/server/api/getuser/${email}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Bad response code');
                    } else {
                        return response.json();
                    }
                })
                .then(json => {
                    dispatch(userSuccess(json));
                })
                .catch(() => {
                    dispatch(userError());
                });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
