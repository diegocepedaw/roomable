import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
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
    const matchesProps = {
        email: '',
        dataFetch: () => {}
    };
    ReactDOM.render(
        <MemoryRouter initialEntries={['/matches']} initialIndex={0}>
            <Route exact path='/matches' render={(props) => (
                <Matches {...props} {...matchesProps} />
            )} />
        </MemoryRouter>,
        div);
});
