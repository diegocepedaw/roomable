export const GET_TOKEN = 'GET_TOKEN';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export function getToken(token, email) {
    return {
        type: GET_TOKEN,
        token,
        email
    };
}

export function userRequest(username) {
    return {
        type: USER_REQUEST,
        username
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
