import {
  USER_LOGIN,
  USER_SIGNUP,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGIN_FAILED,
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL,
} from '../actions/actionTypes';

import initialState from 'Reducers/initialState';


export function authReducer(state=initialState.auth, action) {
  switch(action.type) {
    case USER_SIGNIN_SUCCESS: {
      return Object.assign({}, state, { showAuthModal: false, user: action.payload });
    }
    case USER_SIGNUP_SUCCESS: {
      return Object.assign({}, state, { showAuthModal: false, user: action.payload });
    }
    case SHOW_AUTH_MODAL: {
      return Object.assign({}, state, { showAuthModal: true });
    }
    case HIDE_AUTH_MODAL: {
      return Object.assign({}, state, { showAuthModal: false });
    }
    default: {
      return state;
    }
  }
};