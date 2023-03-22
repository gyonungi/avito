import { combineReducers } from 'redux';
import { addsReducers } from './add';
import { authReducers } from './auth';

export const rootReducer = combineReducers ({
    auth: authReducers,
    adds: addsReducers,
}) 

