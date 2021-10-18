import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import learnReducer from './learnReducer';
import lessonReducer from './lessonReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    learn: learnReducer,
    lesson: lessonReducer,
    user: userReducer,
})