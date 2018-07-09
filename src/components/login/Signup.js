import React from 'react';
import initialState from 'Reducers/initialState';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState.auth.user, { confirmPassword: '' });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    return false;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div className={'form-group'}>
          <label htmlFor='inputFirstName'>First Name</label>
          <input
            type={'text'}
            id={'inputFirstName'}
            placeholder={'First Name'}
            className={'form-control'}
            name={'firstName'}
            value={firstName}
            autoComplete={'first-name'}
            onChange={handleChange} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputLastName'}>Last Name</label>
          <input
            type={'text'}
            id={'inputLastName'}
            placeholder={'Last Name'}
            className={'form-control'}
            name={'lastName'}
            value={lastName}
            autoComplete={'last-name'}
            onChange={handleChange} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputEmailSignup'}>Email</label>
          <input
            type={'email'}
            id={'inputEmailSignup'}
            placeholder={'Email'}
            className={'form-control'}
            name={'email'}
            value={email}
            autoComplete={'email'}
            onChange={handleChange} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputPhoneSignup'}>Email</label>
          <input
            type={'phone'}
            id={'inputPhoneSignup'}
            placeholder={'Phone'}
            className={'form-control'}
            name={'phone'}
            value={phone}
            autoComplete={'phone'}
            onChange={handleChange} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputPasswordSignup'}>Password</label>
          <input
            type={'password'}
            id={'inputPasswordSignup'}
            placeholder={'Password'}
            className={'form-control'}
            name={'password'}
            value={password}
            autoComplete={'password'}
            onChange={handleChange} />
        </div>

        <div className={'form-group'}>
          <label htmlFor={'inputConfirmPasswordSignup'}>Confirm Password</label>
          <input
            type={'password'}
            id={'inputConfirmPasswordSignup'}
            placeholder={'Confirm Password'}
            className={'form-control'}
            name={'confirmPassword'}
            value={confirmPassword}
            autoComplete={'confirm-password'}
            onChange={handleChange} />
        </div>

        <button type={'submit'} className={'btn action-button'}>Signup</button>
      </form>
    );
  }
};

