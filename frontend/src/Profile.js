import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Profile.css';


import { Col, Form, FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <Col xs={7} xsOffset={1}>
                    <Jumbotron>
                        <h1><i class="fa fa-user" aria-hidden="true"></i> Bob Brown</h1>
                        <hr />
                        <p>blah blah i like dogs and long walks on the beach</p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1><i class="fa fa-address-book-o" aria-hidden="true"></i> Contact Links</h1>
                        <hr />
                        <p><i class="fa fa-envelope" aria-hidden="true"></i> example@gmail.com</p>
                        <p><i class="fa fa-facebook" aria-hidden="true"></i><a href="https://facebook.com"> facebook</a></p>
                        <p><i class="fa fa-twitter" aria-hidden="true"></i><a href="https://twitter.com"> twitter</a></p>
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
                            <p><i class="fa fa-pencil fa-2x" aria-hidden="true"></i></p>
                            <p>
                            <Button type="submit">
                                <a href="/preferences">Edit Preferences</a>
                            </Button>
                            </p>
                            <hr />
                            <p><i class="fa fa-flask fa-2x" aria-hidden="true"></i></p>
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

export default Profile;
