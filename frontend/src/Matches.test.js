import React from 'react';
import ReactDOM from 'react-dom';
import {Matches} from './Matches';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        matches: [],
        dataFetch: () => {}
    };
    ReactDOM.render(<Matches {...props} />, div);
});
