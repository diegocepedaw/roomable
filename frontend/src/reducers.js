import { combineReducers } from 'redux';

import {
    GET_TOKEN,
    USER_REQUEST,
    USER_SUCCESS,
    USER_ERROR,
} from './actions';

const initialToken = {
    token: null,
    email: null,
};

const initialUser = {
    data: null,
    loading: false,
    error: false,
};

export function token(state = initialToken, action) {
    switch (action.type) {
        case GET_TOKEN: {
            return {
                ...state,
                token: action.token,
                email: action.email
            };
        }
        default:
            return state;
    }
}

export function user(state = initialUser, action) {
    switch (action.type) {
        case USER_REQUEST: {
            return {
                ...state,
                data: null,
                loading: true,
                error: false
            };
        }
        case USER_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
                error: false,
            };
        }
        case USER_ERROR: {
            return {
                ...state,
                data: null,
                loading: false,
                error: true
            };
        }
        default:
            return state;
    }
}

const roomableApp = combineReducers({
    token,
    user
});

export default roomableApp;
