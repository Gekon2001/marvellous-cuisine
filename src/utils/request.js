import axios from 'axios';

let _token = localStorage.getItem('auth-token') || null;

export default {
  post(url, params) {
    return new Promise((resolve) => {
      axios.post(url, params).then(({ data }) => {
        resolve({ data });
      }).catch((error) => {
        resolve({ error: error.response.data });
      });
    });
  },
  get(url, params) {

  },
  patch(url, params) {

  },
  put(url, params) {

  },
  setAuthToken(token) {
    _token = token;
    localStorage.setItem('auth-token', _token);
  },
  getAuthToken() {
    if (!_token)
      _token = localStorage.getItem('auth-token');

    return _token;
  },
};