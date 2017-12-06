// This file is for the Edit Preferences page, where users can edit their preferences if their situations change.
//    Users are also automatically directed here on first login to create their starting preferences

// HTML DESCRIPTION
// The file first sets up a form which will submit the information selected to the backend when the submit button is clicked
// Next comes the form body, which asks all all the questions for the preferences
// Finally is the Submit and Return to Profile buttons which submit the data and return to the profile when finished
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import 'font-awesome/css/font-awesome.css';

import { Col, Form, FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={props.center}
    >
        <Circle defaultCenter={props.center} radius={1 / 0.00062137} editable={true} />
    </GoogleMap>
));

class Preferences extends Component {
    render() {
        // Redirect to login page if unauthenticated
        if (!this.props.authenticated) {
            return (
                <Redirect to="/login" />
            );
        }

        return (
            <div className="Preferences">
                <Col xs={10} xsOffset={1}>
                    <Jumbotron>
                        <form action="http://127.0.0.1:8000/server/api/updateuserinfo" method="post">
                        <input type="hidden" name="email" value={this.props.email} />
                        <h1><i class="fa fa-tasks" aria-hidden="true"></i> Preferences</h1>
                        <hr />
                        <p><em>Profile Information</em></p>
                        <p>Fill out information to be shown on your profile</p>
                        <hr />
                        < MyMapComponent
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `600px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                center={{ lat: 42.730172, lng: -73.678803 }}
                        />
                        <hr />
                        <input type="hidden" id = "latinp" name="lat" value="42.730172"></input>
                        <input type="hidden" id = "lnginp" name="lng" value="-73.678803"></input>
                        <input type="hidden" id = "rnginp" name="rng" value="200"></input>
                        <p>What is your name?</p>
                        <div class="form-group">
                          <textarea class="form-control" name="handle" id="Textarea1" rows="1"></textarea>
                        </div>
                        <p>Describe yourself</p>
                        <div class="form-group">
                          <textarea class="form-control" name="description" id="Textarea2" rows="3"></textarea>
                        </div>
                        <hr />
                        <p><em>Basic Information</em></p>
                        <hr />
                        <p>What gender are you?</p>
                        <label class="radio-inline"><input type="radio" name="gender" value="Male" />Male</label>
                        <label class="radio-inline"><input type="radio" name="gender" value="Female"/>Female</label>
                        <p></p>
                        <p>Do you own a pet?</p>
                        <label class="radio-inline"><input type="radio" name="pet" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="pet" value="False"/>No</label>
                        <p></p>
                        <p>Do you smoke?</p>
                        <label class="radio-inline"><input type="radio" name="smoke" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="smoke" value="False"/>No</label>
                        <p></p>
                        <p>Do you go to bed late?</p>
                        <label class="radio-inline"><input type="radio" name="sleep_late" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="sleep_late" value="False"/>No</label>
                        <p></p>
                        <p>Do you wake up very early?</p>
                        <label class="radio-inline"><input type="radio" name="rise_early" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="rise_early" value="False"/>No</label>
                        <p></p>
                        <p>Are you very neat?</p>
                        <label class="radio-inline"><input type="radio" name="neat" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="neat" value="False"/>No</label>
                        <p></p>
                        <p>Do you have friends over often?</p>
                        <label class="radio-inline"><input type="radio" name="friends" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="friends" value="False"/>No</label>
                        <p></p>
                        <p>Do you play music loudly often?</p>
                        <label class="radio-inline"><input type="radio" name="music" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="music" value="False"/>No</label>
                        <p></p>
                        <p>What’s your primary language?</p>
                        <div class="form-group">
                            <select class="form-control" name="language" id="exampleSelect1">
                              <option>English</option>
                              <option>Spanish</option>
                              <option>Mandarin</option>
                              <option>Hindu</option>
                              <option>Arabic</option>
                              <option>Indonesian</option>
                              <option>French</option>
                              <option>Russian</option>
                              <option>Japanese</option>
                              <option>German</option>
                              <option>Korean</option>
                              <option>Portugese</option>
                            </select>
                          </div>
                        <p>What is your monthly budget for rent (in dollars)?</p>
                        <div class="form-group">
                          <textarea class="form-control" name="budget" id="Textarea3" rows="1"></textarea>
                        </div>
                        <p>Do you do the dishes promptly after eating?</p>
                        <label class="radio-inline"><input type="radio" name="dishes" value="True" />Yes</label>
                        <label class="radio-inline"><input type="radio" name="dishes" value="False"/>No</label>
                        <p></p>
                        <p>Do you like to be naked or barely dressed in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="skimpy" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="skimpy" value="False"/>No</label>
                        <p></p>
                        <p>Do you drink?</p>
                        <label class="radio-inline"><input type="radio" name="drink" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="drink" value="False"/>No</label>
                        <p></p>
                        <p>Do you do drugs?</p>
                        <label class="radio-inline"><input type="radio" name="drugs" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="drugs" value="False"/>No</label>
                        <p></p>
                        <p>Do you shower often?</p>
                        <label class="radio-inline"><input type="radio" name="shower" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="shower" value="False"/>No</label>
                        <p></p>
                        <p>Do you watch TV?</p>
                        <label class="radio-inline"><input type="radio" name="tv" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="tv" value="False"/>No</label>
                        <p></p>
                        <hr />
                        <p><em>Preferences</em></p>
                        <p>The dealbreaker option is for things that you care about so much, any user with a different answer will not be matched with you automatically. If you select a lot of dealbreakers you may find yourself without any matches!</p>
                        <hr />
                        <p>Do you care about the gender of your roommate?</p>
                        <label class="radio-inline"><input type="radio" name="gender_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="gender_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_gender" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you mind having pets in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="pet_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="pet_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_pet" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you mind smoking in your apartment?</p>
                        <label class="radio-inline"><input type="radio" name="smoke_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="smoke_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_smoke" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate goes to bed very late?</p>
                        <label class="radio-inline"><input type="radio" name="sleep_late_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="sleep_late_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_sleep_late" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate goes to bed very early?</p>
                        <label class="radio-inline"><input type="radio" name="rise_early_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="rise_early_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_rise_early" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care how neat your roommates are?</p>
                        <label class="radio-inline"><input type="radio" name="neat_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="neat_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_neat" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommates invite friends over?</p>
                        <label class="radio-inline"><input type="radio" name="friends_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="friends_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_friends" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommates play music loudly?</p>
                        <label class="radio-inline"><input type="radio" name="music_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="music_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_music" />Dealbreaker!</label>
                        <p></p>
                        <p>Does your roommate have to speak the same primary language?</p>
                        <label class="radio-inline"><input type="radio" name="language_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="language_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_language" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care about how fast your roommate washes the dishes after eating?</p>
                        <label class="radio-inline"><input type="radio" name="dishes_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="dishes_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_dishes" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care about what your roommates wear in the apartment?</p>
                        <label class="radio-inline"><input type="radio" name="skimpy_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="skimpy_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_skimpy" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate drinks?</p>
                        <label class="radio-inline"><input type="radio" name="drink_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="drink_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_drink" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate does drugs?</p>
                        <label class="radio-inline"><input type="radio" name="drug_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="drug_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_drug" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care how often your roommate showers?</p>
                        <label class="radio-inline"><input type="radio" name="shower_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="shower_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_shower" />Dealbreaker!</label>
                        <p></p>
                        <p>Do you care if your roommate watches TV?</p>
                        <label class="radio-inline"><input type="radio" name="tv_pref" value="True"/>Yes</label>
                        <label class="radio-inline"><input type="radio" name="tv_pref" value="False"/>No</label>
                        <p></p>
                        <label class="checkbox-inline"><input type="checkbox" name="db_tv" />Dealbreaker!</label>
                        <p></p>

                        <Button type="submit" onClick={fillGoogleMaps}>
                            Submit
                        </Button>

                        <a href="/profile">
                        <Button >
                            Return to Profile
                        </Button>
                        </a>
                        </form>
                    </Jumbotron>

                </Col>
            </div>
        );
    }
}

const fillGoogleMaps = state =>{
  console.log(this.props);
  var lat = "0"
  var lng = "10"
  var rng = "2"
  document.getElementById("latinp").value = lat;
  document.getElementById("lnginp").value = lng;
  document.getElementById("rnginp").value = rng;
  return;
};

const mapStateToProps = state => {
    console.log(state);
    return {
        email: state.auth.email,
        authenticated: state.auth.authenticated,
    };
};

export default connect(
    mapStateToProps,
)(Preferences);
