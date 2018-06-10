import { combineReducers } from 'redux';
import { loginReducer as login, signupReducer as signup } from './authReducer';

export default combineReducers({
  login,
  signup,
});
