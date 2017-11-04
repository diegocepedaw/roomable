import React, { Component } from 'react';

import { Col, PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

import './Matches.css';

class ListItem extends Component {
    render() {
        return (
            <ListGroupItem className="ListItem">
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
    render() {
        const noneMsg = this.props.matches.userlist.length === 0 ? <NoMatchesMsg /> : null;

        const listItems = this.props.matches.userlist.map((val) => (
            <ListItem matchName={val.handle} matchPct={val.match} matchDesc={val.description} />
        ));

        return (
            <div className="Matches">
                <Col xs={8} xsOffset={2}>
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

export default Matches;
