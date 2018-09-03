import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import Products from './Products'
import Product from './Product';
import Orders from './Orders';
import Order from './Order';

import utils from 'Utils';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { match: { url: base } } = this.props;
    return (
      <div className={'admin-root'}>
        <ul>{
          [{
            href: `products`,
            text: `Products`
          }, {
            href: `orders`,
            text: `Orders`
          }, {
            href: `users`,
            text: `users`,
          }].map(link => (<li key={link.text}><Link to={`${base}/${link.href}`}>{link.text}</Link></li>))
        }</ul>

        <Switch>
          <Route path={`${base}/products`} exact component={Products} />

          <Route path={`${base}/products/edit`} component={Product} />
          <Route path={`${base}/products/:code`} component={Product} />

          <Route path={`${base}/orders`} exact component={Orders} />
          <Route path={`${base}/orders/:id`} component={Order} />
        </Switch>
      </div>
    );
  }

  async componentDidMount() {
    try {
      const response = await utils.request.get('/api/categories') || [];
    } catch(error) {

    }

  }
}