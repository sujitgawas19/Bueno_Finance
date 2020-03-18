import UserTypes from './user.types';


export const saveUser = (data) => {
    return {
        type: UserTypes.USER_SIGNUP_SUCCESS,
        payload: data
    }
}