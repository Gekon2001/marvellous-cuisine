import {
  USER_LOGIN,
  USER_SIGNUP,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from '../actions/actionTypes';

import initialState from '../reducers/initialState';

export function user(state=initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return state;
    }
    case USER_SIGNUP: {
      return state;
    }
  }
  return state;
};