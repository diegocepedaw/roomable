import { combineReducers } from 'redux';

import {
    GET_TOKEN,
    USER_REQUEST,
    USER_SUCCESS,
    USER_ERROR,
    MATCHES_REQUEST,
    MATCHES_SUCCESS,
    MATCHES_ERROR,
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

const initialMatches = {
    data: [],
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

function matches(state = initialMatches, action) {
    switch (action.type) {
        case MATCHES_REQUEST: {
            return {
                ...state,
                data: [],
                loading: true,
                error: false
            };
        }
        case MATCHES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
                error: false
            };
        }
        case MATCHES_ERROR: {
            return {
                ...state,
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
    matches,
    otherUser
});

export default roomableApp;
