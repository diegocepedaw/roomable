import React from 'react';
import ReactDOM from 'react-dom';
import Matches from './Matches';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const matches = {
        userlist: []
    };
    ReactDOM.render(<Matches matches={matches} />, div);
});
