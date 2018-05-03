import React from 'react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  onSubmit = (e) => {

  };

  onChange = (data) => {
    this.setState(data);
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
