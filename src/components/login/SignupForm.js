import React from 'react';

const SignupForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={'form-group'}>
        <label htmlFor='inputFirstName'>First Name</label>
        <input
          type={'text'}
          id={'inputFirstName'}
          placeholder={'First Name'}
          className={'form-control'}
          name={'firstName'}
          value={props.firstName}
          autoComplete={'name'}
          onChange={(e) => props.onChange({ firstName: e.target.value, })} />
      </div>
      <div className={'form-group'}>
        <label htmlFor={'inputLastName'}>Last Name</label>
        <input
          type={'text'}
          id={'inputLastName'}
          placeholder={'Last Name'}
          className={'form-control'}
          name={'lastName'}
          value={props.lastName}
          autoComplete={'family-name'}
          onChange={(e) => props.onChange({ lastName: e.target.value, })} />
      </div>
      <div>
        <label htmlFor={'inputEmailSignup'}>Email</label>
        <input
          type={'email'}
          id={'inputEmailSignup'}
          placeholder={'Email'}
          className={'form-control'}
          name={'email'}
          value={props.email}
          autoComplete={'email'}
          onChange={(e) => {props.onChange({ email: e.target.value,})}}/>
      </div>
      <div className={'form-group'}>
        <label htmlFor={'inputPasswordSignup'}>Password</label>
        <input
          type={'password'}
          id={'inputPasswordSignup'}
          placeholder={'Password'}
          className={'form-control'}
          name={'password'}
          autoComplete={'current-password'}
          onChange={ (e) => props.onChange({ password: e.target.value, }) } />
      </div>

      <button type={'submit'} className={'btn action-button'}>Signup</button>
    </form>
  );
};

export default SignupForm;

