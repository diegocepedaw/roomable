import React, { Component } from 'react';
import './Profile.css';

import { Col, Form, FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';

class otherProfile extends Component {
    render() {
        return (
            <div className="Profile">
                <Col xs={10} xsOffset={1}>
                    <Jumbotron>
                        <h1><i class="fa fa-user" aria-hidden="true"></i> Bob Brown</h1>
                        <hr />
                        <p>blah blah i like dogs and long walks on the beach</p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1><i class="fa fa-tasks" aria-hidden="true"></i> Preferences</h1>
                        <hr />
                        <p><em>Basic Information</em></p>
                        <hr />
                        <p>What gender are you?</p>
                        <p></p>
                        <p>Do you smoke?</p>
                        <p></p>
                        <p>Do you go to bed late?</p>

                        <p></p>
                        <p>Do you wake up very early?</p>

                        <p></p>
                        <p>Are you very neat?</p>

                        <p></p>
                        <p>Do you have friends over often?</p>

                        <p></p>
                        <p>Do you play music loudly often?</p>

                        <p></p>
                        <p>What’s your primary language?</p>

                        <p>What is your monthly budget for rent (in dollars)?</p>

                        <p>Do you do the dishes promptly after eating?</p>

                        <p></p>
                        <p>Do you like to be naked or barely dressed in your apartment?</p>

                        <p></p>
                        <p>Do you drink?</p>

                        <p></p>
                        <p>Do you do drugs?</p>

                        <p></p>
                        <p>Do you shower often?</p>

                        <p></p>
                        <p>Do you watch TV?</p>

                        <p></p>
                        <hr />
                        <p><em>Preferences</em></p>

                        <hr />
                        <p>Do you care about the gender of your roommate?</p>

                        <p></p>
                        <p>Do you mind having pets in your apartment?</p>

                        <p></p>
                        <p>Do you mind smoking in your apartment?</p>

                        <p></p>
                        <p>Do you care if your roommate goes to bed very late?</p>

                        <p></p>
                        <p>Do you care if your roommate goes to bed very early?</p>

                        <p></p>
                        <p>Do you care how neat your roommates are?</p>

                        <p></p>
                        <p>Do you care if your roommates invite friends over?</p>

                        <p></p>
                        <p>Do you care if your roommates play music loudly?</p>

                        <p></p>
                        <p>Does your roommate have to speak the same primary language?</p>

                        <p></p>
                        <p>Do you care about how fast your roommate washes the dishes after eating?</p>

                        <p></p>
                        <p>Do you care about what your roommates wear in the apartment?</p>

                        <p></p>
                        <p>Do you care if your roommate drinks?</p>

                        <p></p>
                        <p>Do you care if your roommate does drugs?</p>

                        <p></p>
                        <p>Do you care how often your roommate showers?</p>

                        <p></p>
                        <p>Do you care if your roommate watches TV?</p>

                        <p></p>
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
            </div>
        );
    }
}

export default otherProfile;
