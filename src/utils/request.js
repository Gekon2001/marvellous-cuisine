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
  async post(url, params) {
    try {
      const { data } = await _axios.post(url, params);
      return data;
    } catch(error) {
      return error.response.data;
    }
  },
  async get(url, params) {
    try {
      const result = await _axios.get(url, params);
      console.log(result);
      // const { data } = await _axios.get(url, params);
      return data;
    } catch(error) {
      return error.response.data;
    }
  },
  async patch(url, params) {
    try {
      const { data } = await _axios.patch(url, params);
      return data;
    } catch(error) {
      return error.response.data;
    }
  },
  async put(url, params) {
    try {
      const { data } = await _axios.put(url, params);
      return data;
    } catch(error) {
      return error.response.data;
    }
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