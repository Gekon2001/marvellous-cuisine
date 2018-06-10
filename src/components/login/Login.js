import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
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

  handleChange(state) {
    this.setState(state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        email={email}
        password={password} />
    );
  };
}


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
