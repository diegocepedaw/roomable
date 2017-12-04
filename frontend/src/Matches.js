import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router';

import { Col, PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

import './Matches.css';

class ListItem extends Component {
    onClick() {
        this.props.history.push(`/user/${this.props.matchEmail}`);
    }

    render() {
        return (
            <ListGroupItem className="ListItem" onClick={() => this.onClick()}>
                <div className="ListItemName"><b>{this.props.matchName}</b></div>
                <div className="ListItemPct">{Math.round(this.props.matchPct)}% Match</div>
                <div className="ListItemDesc text-muted">{this.props.matchDesc}</div>
            </ListGroupItem>
        );
    }
}

class NoMatchesMsg extends Component {
    render() {
        return (
            <h3 className="text-muted">You don't have any matches... yet!</h3>
        );
    }
}

class Matches extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
            loading: false,
            error: false,
        };
    }

    // Fetch match data from the server
    dataFetch(email) {
        // Clear state
        this.setState({
            matches: [],
            loading: true,
            error: false
        });

        // Send get request
        fetch(`/server/api/getmatches/${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Bad response code');
                } else {
                    return response.json();
                }
            })
            .then(json => {
                // Sort matches by match percentage
                const sorted = json.userlist.sort((a, b) => {
                    return b.match - a.match;
                });

                this.setState({
                    matches: sorted,
                    loading: false,
                    error: false
                });
            })
            .catch(() => {
                // On failure, clear state and indicate error
                this.setState({
                    matches: [],
                    loading: false,
                    error: true
                });
            });
    }

    componentDidMount() {
        // If user is not authenticated, do not fetch matches
        if (!this.props.authenticated) return;
        this.dataFetch(this.props.email);
    }

    render() {
        // Redirect to login page if unauthenticated
        if (!this.props.authenticated) {
            return (
                <Redirect to="/login" />
            );
        }

        // Show filler message if not matches
        const noneMsg = this.state.matches.length === 0 ? <NoMatchesMsg /> : null;

        const listItems = this.state.matches.map((val, ind) => (
            <ListItem
                matchEmail={val.email}
                matchName={val.handle}
                matchPct={val.match}
                matchDesc={val.description}
                key={ind}
                history={this.props.history}
            />
        ));

        return (
            <div className="Matches">
                <Col md={8} mdOffset={2}>
                    <PageHeader>Matches</PageHeader>
                    {noneMsg}
                    <ListGroup>
                        {listItems}
                    </ListGroup>
                </Col>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        email: state.auth.email,
        authenticated: state.auth.authenticated,
    };
};

export { Matches };

export default connect(
    mapStateToProps,
)(Matches);
