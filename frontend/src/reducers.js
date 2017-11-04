import { combineReducers } from 'redux';

import {
    GET_TOKEN
} from './actions';

const initialToken = {
    token: null
};

export function token(state = initialToken, action) {
    switch (action.type) {
        case GET_TOKEN: {
            return {
                ...state,
                token: action.token
            };
        }
        default:
            return state;
    }
}

const roomableApp = combineReducers({
    token
});

export default roomableApp;
