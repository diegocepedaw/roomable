import { combineReducers } from 'redux';

import {
    LOGIN_RESET,
    LOGIN_SUCCESS,
} from './actions';

const initialAuth = {
    email: null,
    authenticated: false
};

function auth(state = initialAuth, action) {
    switch (action.type) {
        case LOGIN_RESET: {
            window.localStorage.removeItem('rmblEmail');
            return {
                ...state,
                email: null,
                authenticated: false,
            };
        }
        case LOGIN_SUCCESS: {
            window.localStorage.setItem('rmblEmail', action.email);
            return {
                ...state,
                email: action.email,
                authenticated: true
            };
        }
        default:
            return state;
    }
}

const roomableApp = combineReducers({
    auth,
});

export default roomableApp;
