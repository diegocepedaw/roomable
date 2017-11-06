import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';


import { Col, Form, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            loading: false,
            error: false,
        };
    }

    componentDidMount() {
        this.dataFetch(this.props.email);
    }

    dataFetch(email) {
        this.setState({
            matches: null,
            loading: true,
            error: false
        });
        fetch(`/server/api/getuser/${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Bad response code');
                } else {
                    return response.json();
                }
            })
            .then(json => {
                this.setState({
                    data: json,
                    loading: false,
                    error: false
                });
            })
            .catch(() => {
                this.setState({
                    data: null,
                    loading: false,
                    error: true
                });
            });
    }

    render() {
        if (this.state.error) {
            return (
                <div className="Profile">
                    <Col xs={7} xsOffset={1}>
                        <h3>An error occurred!</h3>
                    </Col>
                </div>
            );
        }

        if (!this.state.data || this.state.loading) {
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
                        <h1><i className="fa fa-user" aria-hidden="true"></i> {this.state.data.handle}</h1>
                        <hr />
                        <p>{this.state.data.description}</p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1><i className="fa fa-address-book-o" aria-hidden="true"></i> Contact Links</h1>
                        <hr />
                        <p><i className="fa fa-envelope" aria-hidden="true"></i> <a href={`mailto:${this.state.data.email}`}>{this.state.data.email}</a></p>
                    </Jumbotron>
                </Col>
                <Col xs={3} >
                    <Jumbotron>
                        <Form>
                            <p><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></p>
                            <p>
                                <Link to="/preferences">
                                    <Button>
                                        Edit Preferences
                                    </Button>
                                </Link>
                            </p>
                            <hr />
                            <p><i className="fa fa-flask fa-2x" aria-hidden="true"></i></p>
                            <p>
                                <Link to="/matches">
                                    <Button>
                                        Find Matches
                                    </Button>
                                </Link>
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
        email: state.auth.email,
        authenticated: state.auth.authenticated,
    };
};

export default connect(
    mapStateToProps
)(Profile);
