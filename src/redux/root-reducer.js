import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import AppReducer from './app/app.reducers';
import UserReducer from './user/user.reducers';
import LoginReducer from "./login/login.reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user', 'app']
};

const rootReducer = combineReducers({
    app: AppReducer,
    user: UserReducer,
    login:LoginReducer
});

export default persistReducer(persistConfig, rootReducer);