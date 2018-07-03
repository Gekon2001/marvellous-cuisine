import React from 'react';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div className={'container-fluid'}>
        <form onSubmit={onSubmit}>
          <div className={'form-group'}>
            <label
              htmlFor={'inputEmailLogin'}
              className={'text-uppercase'}>email address<sup>*</sup></label>
            <input
              type={'text'}
              value={''}
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
              value={''}
              id={'inputPasswordLogin'}
              name={'password'}
              className={'form-control'}
              placeholder={'Enter Password'}
              autoComplete={'current-password'}
              onChange={ (e) => { props.onChange({ password: e.target.value }); }}
            />
          </div>

          <button type={'submit'} className={'btn action-button'}>Login</button>
        </form>
      </div>
    );
  }
}