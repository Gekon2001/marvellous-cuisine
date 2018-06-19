import React from 'react';
import { connect } from 'react-redux';

import { signup } from "../../actions/authActions";

import SignupForm from './SignupForm';


class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, email, password, onSubmit, onChange } = this.props;
    return (
      <SignupForm
        onSubmit={onSubmit}
        onChange={onChange}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
      />
    );
  }
}

function mapStateToProps(state) {
  const { firstName, lastName, email, phone, password } = state.user;
  return {
    firstName,
    lastName,
    email,
    phone,
    password,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { firstName, lastName, email, phone } = ownProps;

  return {
    onSubmit(e) {
      e.preventDefault();
      dispatch(signup({ firstName, lastName, email, phone }));
      return false;
    },
    onChange(data) {
      console.log(data);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
