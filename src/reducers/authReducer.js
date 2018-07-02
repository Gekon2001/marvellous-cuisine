import {
  USER_LOGIN,
  USER_SIGNUP,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL,
} from '../actions/actionTypes';

import initialState from '../reducers/initialState';


export function authReducer(state=initialState, action) {
  switch(action.type) {
    case SHOW_AUTH_MODAL: {
      const { auth } = state;
      return Object.assign({}, { auth }, { showAuthModal: true });
    }
    case HIDE_AUTH_MODAL: {
      const { auth } = state;
      return Object.assign({}, { auth }, { showAuthModal: false });
    }
    default: {
      return state.auth;
    }
  }
};