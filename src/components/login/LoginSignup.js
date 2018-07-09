import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Signin from './Signin';
import Signup from './Signup';

export default function LoginSignup(props) {
  const { handleSignup, handleSignin } = props;
  return (
    <div className={'login-signup'}>
      <Tabs
        defaultActiveKey={1}
        id="login-signup-tabs"
        className={'tabs'}
        style={{margin: 'auto', width: '50%'}}>
        <Tab eventKey={1} title="Log In">
          <Signin onSubmit={handleSignin}/>
        </Tab>
        <Tab eventKey={2} title="Sign Up">
          <Signup onSubmit={handleSignup}/>
        </Tab>
      </Tabs>;
    </div>
  );
}