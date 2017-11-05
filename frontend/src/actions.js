export const GET_TOKEN = 'GET_TOKEN';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';
export const MATCHES_REQUEST = 'MATCHES_REQUEST';
export const MATCHES_SUCCESS = 'MATCHES_SUCCESS';
export const MATCHES_ERROR = 'MATCHES_ERROR';

export function getToken(token, email) {
    return {
        type: GET_TOKEN,
        token,
        email
    };
}

export function userRequest() {
    return {
        type: USER_REQUEST
    };
}

export function userSuccess(data) {
    return {
        type: USER_SUCCESS,
        data
    };
}

export function userError() {
    return {
        type: USER_ERROR
    };
}

export function matchesRequest() {
    return {
        type: MATCHES_REQUEST
    };
}

export function matchesSuccess(data) {
    return {
        type: MATCHES_SUCCESS,
        data
    };
}

export function matchesError() {
    return {
        type: MATCHES_ERROR
    };
}
