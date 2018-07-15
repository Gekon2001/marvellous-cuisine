import axios from 'axios';

let _token = localStorage.getItem('auth-token') || null;

const _axios = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'x-auth': _token,
  },
});

export default {
  post(url, params) {
    return new Promise((resolve) => {
      _axios.post(url, params).then(({ data }) => {
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
  async uploadFile(url, file, progressCb) {
    const data = new FormData();
    data.append('file', file);

    try {
      const result = await _axios.post(url, data, { onUploadProgress: progressCb });
      return {
        result,
      }
    } catch(error) {
      return { error };
    }

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