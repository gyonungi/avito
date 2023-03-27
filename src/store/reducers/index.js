import { combineReducers } from 'redux';
import { addsReducers } from './add';
import { authReducers } from './auth';
import { userReducer } from './user';

export const rootReducer = combineReducers ({
    auth: authReducers,
    adds: addsReducers,
    user: userReducer
}) 

