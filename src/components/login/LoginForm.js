import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  return (
    <div className={'container-fluid'}>
      <form onSubmit={props.onSubmit}>
        <div className={'form-group'}>
          <label
            htmlFor={'inputEmailLogin'}
            className={'text-uppercase'}>email address<sup>*</sup></label>
          <input
            type={'text'}
            value={props.email}
            id={'inputEmailLogin'}
            name={'email'}
            className={'form-control'}
            placeholder={'Enter Email'}
            autoComplete={'email'}
            onChange={(e) => { props.onChange({ email: e.target.value }); }}
          />
        </div>
        <div className={'form-group'}>
          <label htmlFor='inputPassword' className={'text-uppercase'}>password<sup>*</sup></label>
          <input
            type={'password'}
            value={props.password}
            id={'inputPasswordLogin'}
            name={'password'}
            className={'form-control'}
            placeholder={'Enter Password'}
            autoComplete={'current-password'}
            onChange={ (e) => { props.onChange({ password: e.target.value }); }}
          />
        </div>

        <button type={'submit'} className={'btn btn-default'}>Login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;