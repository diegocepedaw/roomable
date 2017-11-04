import React, { Component } from 'react';

import { Col, PageHeader } from 'react-bootstrap';

class NotFound extends Component {
    render() {
        return (
            <div className="NotFound">
                <Col md={8} mdOffset={2}>
                    <PageHeader>404 <small>That's an error</small></PageHeader>
                    <h4>Try putting in a <i>correct</i> URL this time.</h4>
                </Col>
            </div>
        );
    }
}

export default NotFound;
