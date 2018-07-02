import React from 'react';
import axois from 'axios';

import SignupForm from './SignupForm';


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    };
  }

  onChange = (data) => {
    this.setState({...data});
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email, phone, password } = this.state;
    axois.post('/api/user', {
      firstName,
      lastName,
      email,
      phone,
      password,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    return false;
  };

  render() {
    const { firstName, lastName, email, phone, password } = this.state;
    return (
      <SignupForm
        onSubmit={ this.onSubmit }
        onChange={ this.onChange }
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        password={password}
      />
    );
  }
}

