import React from 'react';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <div className={'form-group'}>
          <label htmlFor='inputFirstName'>First Name</label>
          <input
            type={'text'}
            id={'inputFirstName'}
            placeholder={'First Name'}
            className={'form-control'}
            name={'firstName'}
            autoComplete={'first-name'} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputLastName'}>Last Name</label>
          <input
            type={'text'}
            id={'inputLastName'}
            placeholder={'Last Name'}
            className={'form-control'}
            name={'lastName'}
            autoComplete={'last-name'} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputEmailSignup'}>Email</label>
          <input
            type={'email'}
            id={'inputEmailSignup'}
            placeholder={'Email'}
            className={'form-control'}
            name={'email'}
            autoComplete={'email'} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputPhoneSignup'}>Email</label>
          <input
            type={'phone'}
            id={'inputPhoneSignup'}
            placeholder={'Phone'}
            className={'form-control'}
            name={'phone'}
            autoComplete={'phone'} />
        </div>
        <div className={'form-group'}>
          <label htmlFor={'inputPasswordSignup'}>Password</label>
          <input
            type={'password'}
            id={'inputPasswordSignup'}
            placeholder={'Password'}
            className={'form-control'}
            name={'password'}
            autoComplete={'password'} />
        </div>

        <button type={'submit'} className={'btn action-button'}>Signup</button>
      </form>
    );
  }
};

