import {
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from './actionTypes';


import axios from 'axios';

export function userSignedIn(userData) {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: userData,
  };
};

export function userSignedUp(userData) {
  return {
    type: USER_SIGNIN_SUCCESS,
    payload: userData,
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