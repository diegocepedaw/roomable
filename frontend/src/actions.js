export const GET_TOKEN = 'GET_TOKEN';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';
export const MATCHES_REQUEST = 'MATCHES_REQUEST';
export const MATCHES_SUCCESS = 'MATCHES_SUCCESS';
export const MATCHES_ERROR = 'MATCHES_ERROR';
export const OTHER_REQUEST = 'OTHER_REQUEST';
export const OTHER_SUCCESS = 'OTHER_SUCCESS';
export const OTHER_ERROR = 'OTHER_ERROR';

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

export function otherRequest() {
    return {
        type: OTHER_REQUEST
    };
}

export function otherSuccess(data) {
    return {
        type: OTHER_SUCCESS,
        data
    };
}

export function otherError() {
    return {
        type: OTHER_ERROR
    };
}
