import {
  USER_SIGNUP,
  USER_LOGIN,
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from './actionTypes';


import axios from 'axios';

export function login(creds) {
  return {
    type: USER_LOGIN,
    creds,
  };
};

export function signup(creds) {
  return {
    type: USER_SIGNUP,
    creds,
  };
};

export function showAuthModal() {
  return {
    type: SHOW_AUTH_MODAL,
  };
}

export function hideAuthModal() {
  return {
    type: HIDE_AUTH_MODAL,
  };
}