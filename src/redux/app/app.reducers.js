import * as actions from './app.actions';
import AppTypes from './app.types';

const initialState = {
    NewApp: true,
    erorr: ''
};


const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppTypes.NEW_APP:
            return { ...state, NewApp: false }
        default:
            return state;
    }
};

export default AppReducer;

