import { USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from '../actions/actionTypes';
import initialState from '../reducers/initialState';

export function loginReducer(state=initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return state;
    }
  }
  return state;
};

export function signupReducer(state=initialState, action) {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS: {
      return state;
    }
  }
  return state;
};