import React, { Component } from 'react';


import { Col, Form, FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';

class Preferences extends Component {
    render() {
        return (
            <div className="Preferences">
                <Col xs={10} xsOffset={1}>
                    <Jumbotron>
                        <h1><i class="fa fa-tasks" aria-hidden="true"></i> Preferences</h1>
                        <hr />
                        <p><em>Basic Information</em></p>
                        <p>For this section just fill out your information</p>
                        <hr />
                        <p>What gender are you?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Male</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Female</label>
                        <p></p>
                        <p>Do you smoke?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you go to bed late?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you wake up very early?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Are you very neat?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you have friends over often?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you play music loudly often?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>What’s your primary language?</p>
                        <div class="form-group">
                            <select class="form-control" id="exampleSelect1">
                              <option>English</option>
                              <option>Spanish</option>
                              <option>Zimbabwean</option>
                              <option>German</option>
                              <option>Japanese</option>
                            </select>
                          </div>
                        <p>What is your budget for rent?</p>
                        <div class="form-group">
                          <textarea class="form-control" id="exampleTextarea" rows="1"></textarea>
                        </div>
                        <p>Do you do the dishes promptly after eating?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you like to be naked or barely dressed in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you drink?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you do drugs?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you shower often?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <p>Do you watch TV?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <p></p>
                        <hr />
                        <p><em>Preferences</em></p>
                        <p>The dealbreaker option is for things that you care about so much, any user with a different answer will not be matched with you automatically. If you select a lot of dealbreakers you may find yourself without any matches!</p>
                        <hr />
                        <p>Do you care about the gender of your roommate?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you mind having pets in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you mind smoking in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate goes to bed very late?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate goes to bed very early?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care how neat your roommates are?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommates invite friends over?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommates play music loudly?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Does your roommate have to speak the same primary language?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care about how fast your roommate washes the dishes after eating?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care about what your roommates wear in the apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate drinks?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate does drugs?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care how often your roommate showers?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate watches TV?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />No</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Dealbreaker!</label>
                        <p></p>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Jumbotron>

                </Col>
            </div>
        );
    }
}

export default Preferences;
