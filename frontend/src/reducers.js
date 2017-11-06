import { combineReducers } from 'redux';

import {
    GET_TOKEN,
} from './actions';

const initialToken = {
    token: null,
    email: null,
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

const roomableApp = combineReducers({
    token,
});

export default roomableApp;
