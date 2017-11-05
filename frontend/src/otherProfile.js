import React, { Component } from 'react';
import { connect } from 'react-redux';
import { otherRequest, otherSuccess, otherError } from './actions';
import './Profile.css';

import { Col, Form, FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';

class otherProfile extends Component {
    componentDidMount() {
        this.props.dataFetch(this.props.match.params.email);
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

        const attrs = Object.assign(...Object.entries(this.props.data.attributes).map(([key, val]) => {
            if (val === true) {
                return {[key]: 'yes'};
            } else if (val === false) {
                return {[key]: 'no'};
            } else {
                return {[key]: val};
            }
        }));

        const prefs = Object.assign(...Object.entries(this.props.data.preferences).map(([key, val]) => {
            if (val === true) {
                return {[key]: 'yes'};
            } else if (val === false) {
                return {[key]: 'no'};
            } else {
                return {[key]: val};
            }
        }));

        return (
            <div className="Profile">
                <Col xs={10} xsOffset={1}>
                    <Jumbotron>
                        <h1><i class="fa fa-user" aria-hidden="true"></i> {this.props.data.handle}</h1>
                        <hr />
                        <p>{this.props.data.description}</p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1><i class="fa fa-tasks" aria-hidden="true"></i> Preferences</h1>
                        <hr />
                        <p><em>Basic Information</em></p>
                        <hr />

                        <p>What gender are you?</p>
                        <p>{attrs.gender}</p>

                        <p>Do you smoke?</p>
                        <p>{attrs.smoke}</p>

                        <p>Do you go to bed late?</p>
                        <p>{attrs.sleep_late}</p>

                        <p>Do you wake up very early?</p>
                        <p>{attrs.rise_early}</p>

                        <p>Are you very neat?</p>
                        <p>{attrs.neat}</p>

                        <p>Do you have friends over often?</p>
                        <p>{attrs.friends}</p>

                        <p>Do you play music loudly often?</p>
                        <p>{attrs.music}</p>

                        <p>What’s your primary language?</p>
                        <p>{attrs.language}</p>

                        <p>What is your monthly budget for rent (in dollars)?</p>
                        <p>{attrs.budget}</p>

                        <p>Do you do the dishes promptly after eating?</p>
                        <p>{attrs.dishes}</p>

                        <p>Do you like to be naked or barely dressed in your apartment?</p>
                        <p>{attrs.skimpy}</p>

                        <p>Do you drink?</p>
                        <p>{attrs.drink}</p>

                        <p>Do you do drugs?</p>
                        <p>{attrs.drugs}</p>

                        <p>Do you shower often?</p>
                        <p>{attrs.shower}</p>

                        <p>Do you watch TV?</p>
                        <p>{attrs.tv}</p>

                        <hr />
                        <p><em>Preferences</em></p>

                        <hr />
                        <p>Do you care about the gender of your roommate?</p>
                        <p>{prefs.gender}</p>

                        <p>Do you mind having pets in your apartment?</p>
                        <p>{prefs.pets}</p>

                        <p>Do you mind smoking in your apartment?</p>
                        <p>{prefs.smoke}</p>

                        <p>Do you care if your roommate goes to bed very late?</p>
                        <p>{prefs.sleep_late}</p>

                        <p>Do you care if your roommate goes to bed very early?</p>
                        <p>{prefs.rise_early}</p>

                        <p>Do you care how neat your roommates are?</p>
                        <p>{prefs.neat}</p>

                        <p>Do you care if your roommates invite friends over?</p>
                        <p>{prefs.friends}</p>

                        <p>Do you care if your roommates play music loudly?</p>
                        <p>{prefs.music}</p>

                        <p>Does your roommate have to speak the same primary language?</p>
                        <p>{prefs.language}</p>

                        <p>Do you care about how fast your roommate washes the dishes after eating?</p>
                        <p>{prefs.dishes}</p>

                        <p>Do you care about what your roommates wear in the apartment?</p>
                        <p>{prefs.skimpy}</p>

                        <p>Do you care if your roommate drinks?</p>
                        <p>{prefs.drink}</p>

                        <p>Do you care if your roommate does drugs?</p>
                        <p>{prefs.drugs}</p>

                        <p>Do you care how often your roommate showers?</p>
                        <p>{prefs.shower}</p>

                        <p>Do you care if your roommate watches TV?</p>
                        <p>{prefs.tv}</p>
                    </Jumbotron>
                    <Jumbotron>
                        <h1><i class="fa fa-address-book-o" aria-hidden="true"></i> Contact Links</h1>
                        <hr />
                        <p><i class="fa fa-envelope" aria-hidden="true"></i><a href={`mailto:${this.props.data.email}`}> {this.props.data.email}</a></p>
                        <p><i class="fa fa-facebook" aria-hidden="true"></i><a href="https://facebook.com"> facebook</a></p>
                        <p><i class="fa fa-twitter" aria-hidden="true"></i><a href="https://twitter.com"> twitter</a></p>
                    </Jumbotron>
                </Col>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.otherUser.data,
        loading: state.otherUser.loading,
        error: state.otherUser.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dataFetch: (email) => {
            dispatch(otherRequest());
            fetch(`/server/api/getuser/${email}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Bad response code');
                    } else {
                        return response.json();
                    }
                })
                .then(json => {
                    dispatch(otherSuccess(json));
                })
                .catch(() => {
                    dispatch(otherError());
                });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(otherProfile);

export { otherProfile };
