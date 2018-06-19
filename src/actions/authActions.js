import {
  USER_SIGNUP,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from './actionTypes';


import axios from 'axios';

export function login(credentials) {
  return {
    type: USER_LOGIN,
    credentials,
  };
};

export function signup(credentials) {
  return (dispatch, getState) => {
    axios.post('/api/user', credentials).then((res) => {
      dispatch({ type: USER_SIGNUP_SUCCESS, res });
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  };
};