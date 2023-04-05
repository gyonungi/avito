import { combineReducers } from 'redux';
import { addsReducers } from './add';
import { authReducers } from './auth';
import { userReducer } from './user';
import { reviewReducers } from './review';

export const rootReducer = combineReducers ({
    auth: authReducers,
    adds: addsReducers,
    user: userReducer,
    reviews: reviewReducers,
}) 

