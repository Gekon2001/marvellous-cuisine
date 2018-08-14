import React from 'react';
import Signin from './Signin';
import Signup from './Signup';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function LoginSignup(props) {
  const { handleSignup, handleSignin } = props;
  return (
    <div className={'login-signup'}>
      <Tabs>
        <TabList>
          <Tab>Sign In</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanel>
          <Signin onSubmit={handleSignin}/>
        </TabPanel>
        <TabPanel>
          <Signup onSubmit={handleSignup}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}