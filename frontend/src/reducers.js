import { combineReducers } from 'redux';

import {
    GET_TOKEN,
    USER_REQUEST,
    USER_SUCCESS,
    USER_ERROR,
    OTHER_REQUEST,
    OTHER_SUCCESS,
    OTHER_ERROR
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

function token(state = initialToken, action) {
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

function user(state = initialUser, action) {
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

function otherUser(state = initialUser, action) {
    switch (action.type) {
        case OTHER_REQUEST: {
            return {
                ...state,
                data: null,
                loading: true,
                error: false
            };
        }
        case OTHER_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
                error: false,
            };
        }
        case OTHER_ERROR: {
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
    user,
    otherUser
});

export default roomableApp;
