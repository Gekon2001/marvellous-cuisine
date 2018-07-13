import React from 'react';
import { Router as ReactRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from 'Components/app/App';
import LoginSignup from 'Components/login/LoginSignup';
import Home from 'Components/home/Home';
import NotFound from 'Components/notfound/NotFound';
import Gallery from 'Components/gallery/Gallery';
import Shop from 'Components/shop/Shop';
import Admin from 'Components/admin/Admin';

const history = createBrowserHistory();

export default function Router() {
  return (
    <ReactRouter history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/login' component={LoginSignup} />
          <Route path='/shop' component={Shop} />
          <Route path={'*'} component={NotFound} />
        </Switch>
      </App>
    </ReactRouter>
  );
}
