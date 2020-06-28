/* This is the root reducer */
import { combineReducers } from 'redux';
import volunteerReducer from './volunteerReducer';

export default combineReducers({
    volunteer : volunteerReducer
})