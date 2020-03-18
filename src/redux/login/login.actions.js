import LoginTypes from './login.types';

export const setUsernos = (nos) => {
    return {
        type: LoginTypes.LOGIN_STARTED,
        payload:nos
    }
}

export const removeUsernos = () => {
    return {
        type: LoginTypes.LOGIN_STARTED
    }
}