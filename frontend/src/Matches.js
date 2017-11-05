import React, { Component } from 'react';
import { connect } from 'react-redux';
import { matchesRequest, matchesSuccess, matchesError } from './actions';

import { Col, PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

import './Matches.css';

class ListItem extends Component {
    render() {
        return (
            <ListGroupItem className="ListItem" href={`/user/${this.props.matchEmail}`}>
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
    componentDidMount() {
        this.props.dataFetch(this.props.email);
    }

    render() {
        const noneMsg = this.props.matches.length === 0 ? <NoMatchesMsg /> : null;

        const listItems = this.props.matches.map((val, ind) => (
            <ListItem matchEmail={val.email} matchName={val.handle} matchPct={val.match} matchDesc={val.description} key={ind} />
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
    return {
        matches: state.matches.data,
        loading: state.matches.loading,
        email: state.token.email,
        error: state.matches.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dataFetch: (email) => {
            dispatch(matchesRequest());
            fetch(`/server/api/getmatches/${email}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Bad response code');
                    } else {
                        return response.json();
                    }
                })
                .then(json => {
                    const sorted = json.userlist.sort((a, b) => {
                        return b.match - a.match;
                    });
                    dispatch(matchesSuccess(sorted));
                })
                .catch(() => {
                    dispatch(matchesError());
                });
        }
    };
};

export { Matches };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matches);
