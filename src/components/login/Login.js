import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/user/login').then((response) => {
      if (response.error) {
        return '';
      }

      window.localStorage.set('token', response.token);

      //remember token;
      this.props.history.push('/');
    });
    return false;
  };

  onChange = (state) => {
    this.setState(state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
        onChange={this.onChange}
        email={email}
        password={password} />
    );
  };
}