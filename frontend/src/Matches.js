import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
            loading: false,
            error: false,
        };
    }

    dataFetch(email) {
        this.setState({
            matches: [],
            loading: true,
            error: false
        });

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

                this.setState({
                    matches: sorted,
                    loading: false,
                    error: false
                });
            })
            .catch(() => {
                this.setState({
                    matches: [],
                    loading: false,
                    error: true
                });
            });
    }

    componentDidMount() {
        this.dataFetch(this.props.email);
    }

    render() {
        const noneMsg = this.state.matches.length === 0 ? <NoMatchesMsg /> : null;

        const listItems = this.state.matches.map((val, ind) => (
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
    console.log(state);
    return {
        email: state.auth.email,
    };
};

export { Matches };

export default connect(
    mapStateToProps,
)(Matches);
