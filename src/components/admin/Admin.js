import React from 'react';
import { Route } from 'react-router-dom';

import Product from './Product';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        root admin component
        <Route path={`${match.url}/`} component={Product}></Route>
      </div>
    );
  }
}