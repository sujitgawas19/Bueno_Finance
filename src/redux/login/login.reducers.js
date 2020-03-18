import * as actions from './login.actions';
import LoginTypes from './login.types';

const initialState = {
    phoneNos:''
};


const LoginReducer = (state = initialState, action) => {
    let data;
    let user;
    let error;
    switch (action.type) {
        case LoginTypes.LOGIN_STARTED:
            return { phoneNos: action.payload }
        case LoginTypes.LOGIN_FINISHED:
            return { phoneNos:''}
        default:
            return state;
    }
};

export default LoginReducer;