import React from 'react';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.onSubmit({ email, password });

    return false;
  };

  render() {
    const { handleChange, handleSubmit } = this;

    const { email, password, errors } = this.state;
    return (
      <div className={'container-fluid'}>
        <form onSubmit={handleSubmit}>
          <div className={'form-group'}>
            <label
              htmlFor={'inputEmailLogin'}
              className={'text-uppercase'}>email address<sup>*</sup></label>
            <input
              type={'text'}
              value={email}
              id={'inputEmailLogin'}
              name={'email'}
              className={'form-control'}
              placeholder={'Enter Email'}
              autoComplete={'email'}
              onChange={handleChange}
            />
          </div>
          <div className={'form-group'}>
            <label htmlFor='inputPassword' className={'text-uppercase'}>password<sup>*</sup></label>
            <input
              type={'password'}
              value={password}
              id={'inputPasswordLogin'}
              name={'password'}
              className={'form-control'}
              placeholder={'Enter Password'}
              autoComplete={'current-password'}
              onChange={handleChange}
            />
          </div>

          <button type={'submit'} className={'btn action-button'}>Login</button>
        </form>
      </div>
    );
  }
}