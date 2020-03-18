import * as actions from './user.actions';
import UserTypes from './user.types';


const initialState = {
    currentUser: {},
    error: null,
    uuid: undefined
};

const UserReducer = (state = initialState, action) => {
    let data;
    let user;
    let error;
    switch (action.type) {
        case UserTypes.USER_SIGNUP_START: {
            data = {}
        }
        case UserTypes.USER_SIGNUP_SUCCESS:
            data = action.payload;
            // console.log('this part is from reducer', data);
            return { ...state, currentUser: data, uuid: data.uid }
        case UserTypes.USER_SIGNUP_FAIL:
            data = action.payload.data;
            user = {

            }
            return { ...state }
        default:
            return state;
    }
};

export default UserReducer;
