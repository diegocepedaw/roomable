export const LOGIN_RESET = 'LOGIN_RESET';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginReset() {
    return {
        type: LOGIN_RESET
    };
}

export function loginSuccess(email) {
    return {
        type: LOGIN_SUCCESS,
        email
    };
}
