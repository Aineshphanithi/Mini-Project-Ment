import { GET_USER_CHOICE,UPDATE_USER_CHOICE} from './types'

import axios from 'axios';

export const getUserChoice = id => async dispatch => {
    dispatch({
        type:GET_USER_CHOICE,
        payload: " get user choice"
    });
};

export const updateUserChoice = id => async dispatch => {
    dispatch({
        type:UPDATE_USER_CHOICE,
        payload: " update user choice"
    });
}; 