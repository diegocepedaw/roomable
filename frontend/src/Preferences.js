import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

import { Col, Form, FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';

class Preferences extends Component {
    render() {
        return (
            <div className="Preferences">
                <Col xs={10} xsOffset={1}>
                    <Jumbotron>
                        <h1><i class="fa fa-tasks" aria-hidden="true"></i> Preferences</h1>
                        <hr />
                        <p><em>Profile Information</em></p>
                        <p>Fill out information to be shown on your profile</p>
                        <hr />
                        <p>What is your name?</p>
                        <div class="form-group">
                          <textarea class="form-control" id="Textarea1" rows="1"></textarea>
                        </div>
                        <p>Describe yourself</p>
                        <div class="form-group">
                          <textarea class="form-control" id="Textarea2" rows="3"></textarea>
                        </div>
                        <hr />
                        <p><em>Basic Information</em></p>
                        <hr />
                        <p>What gender are you?</p>
                        <label class="radio-inline"><input type="radio" name="optradio" />Male</label>
                        <label class="radio-inline"><input type="radio" name="optradio" />Female</label>
                        <p></p>
                        <p>Do you smoke?</p>
                        <label class="radio-inline"><input type="radio" name="optradio1" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio1" />No</label>
                        <p></p>
                        <p>Do you go to bed late?</p>
                        <label class="radio-inline"><input type="radio" name="optradio2" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio2" />No</label>
                        <p></p>
                        <p>Do you wake up very early?</p>
                        <label class="radio-inline"><input type="radio" name="optradio3" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio3" />No</label>
                        <p></p>
                        <p>Are you very neat?</p>
                        <label class="radio-inline"><input type="radio" name="optradio4" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio4" />No</label>
                        <p></p>
                        <p>Do you have friends over often?</p>
                        <label class="radio-inline"><input type="radio" name="optradio5" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio5" />No</label>
                        <p></p>
                        <p>Do you play music loudly often?</p>
                        <label class="radio-inline"><input type="radio" name="optradio6" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio6" />No</label>
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
                        <p>What is your monthly budget for rent (in dollars)?</p>
                        <div class="form-group">
                          <textarea class="form-control" id="Textarea3" rows="1"></textarea>
                        </div>
                        <p>Do you do the dishes promptly after eating?</p>
                        <label class="radio-inline"><input type="radio" name="optradio7" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio7" />No</label>
                        <p></p>
                        <p>Do you like to be naked or barely dressed in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio8" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio8" />No</label>
                        <p></p>
                        <p>Do you drink?</p>
                        <label class="radio-inline"><input type="radio" name="optradio9" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio9" />No</label>
                        <p></p>
                        <p>Do you do drugs?</p>
                        <label class="radio-inline"><input type="radio" name="optradio10" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio10" />No</label>
                        <p></p>
                        <p>Do you shower often?</p>
                        <label class="radio-inline"><input type="radio" name="optradio11" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio11" />No</label>
                        <p></p>
                        <p>Do you watch TV?</p>
                        <label class="radio-inline"><input type="radio" name="optradio12" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio12" />No</label>
                        <p></p>
                        <hr />
                        <p><em>Preferences</em></p>
                        <p>The dealbreaker option is for things that you care about so much, any user with a different answer will not be matched with you automatically. If you select a lot of dealbreakers you may find yourself without any matches!</p>
                        <hr />
                        <p>Do you care about the gender of your roommate?</p>
                        <label class="radio-inline"><input type="radio" name="optradio13" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio13" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox13" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you mind having pets in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio14" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio14" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox14" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you mind smoking in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio15" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio15" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox15" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate goes to bed very late?</p>
                        <label class="radio-inline"><input type="radio" name="optradio16" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio16" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox16" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate goes to bed very early?</p>
                        <label class="radio-inline"><input type="radio" name="optradio17" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio17" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox17" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care how neat your roommates are?</p>
                        <label class="radio-inline"><input type="radio" name="optradio18" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio18" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox18" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommates invite friends over?</p>
                        <label class="radio-inline"><input type="radio" name="optradio19" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio19" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox19" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommates play music loudly?</p>
                        <label class="radio-inline"><input type="radio" name="optradio20" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio20" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox20" />Dealbreaker!</label>
                        <p></p>
                        <p>Does your roommate have to speak the same primary language?</p>
                        <label class="radio-inline"><input type="radio" name="optradio21" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio21" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox21" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care about how fast your roommate washes the dishes after eating?</p>
                        <label class="radio-inline"><input type="radio" name="optradio22" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio22" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox22" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care about what your roommates wear in the apartment?</p>
                        <label class="radio-inline"><input type="radio" name="optradio23" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio23" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox23" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate drinks?</p>
                        <label class="radio-inline"><input type="radio" name="optradio24" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio24" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox24" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate does drugs?</p>
                        <label class="radio-inline"><input type="radio" name="optradio25" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio25" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox25" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care how often your roommate showers?</p>
                        <label class="radio-inline"><input type="radio" name="optradio26" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio26" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox26" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate watches TV?</p>
                        <label class="radio-inline"><input type="radio" name="optradio27" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="optradio27" />No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="checkbox27" />Dealbreaker!</label>
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
