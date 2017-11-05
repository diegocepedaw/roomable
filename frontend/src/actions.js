export const GET_TOKEN = 'GET_TOKEN';

export function getToken(token, email) {
    return {
        type: GET_TOKEN,
        token,
        email
    };
}
