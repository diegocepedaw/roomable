import React from 'react';
import ReactDOM from 'react-dom';
import { Matches } from './Matches';

beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                ok: true,
                Id: '123',
                json: function() {
                    return {Id: '123'};
                }
            });
        });

        return p;
    });

});

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        email: '',
        dataFetch: () => {}
    };
    ReactDOM.render(<Matches {...props} />, div);
});
