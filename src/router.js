import React from 'react';
import { Route } from 'react-router-dom';

import App from 'Components/app/App';
import LoginSignup from 'Components/login/LoginSignup';
import Home from 'Components/home/Home';
import NotFound from 'Components/notfound/NotFound';

export default () => {
  return (
    <Route component={App}>
      <Route exact path={'/'} component={Home} />
      <Route path={'/login'} component={LoginSignup} />
      <Route path={'*'} component={NotFound}>
    </Route>
  );
}
