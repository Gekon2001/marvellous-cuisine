import React from 'react';
import utils from 'Utils';

import Paginate from 'react-paginate';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  renderProductThumbnail() {

  }

  render() {
    return (
      <div className={'container-fluid'}>
        <table className={'table table-striped table-hover'}>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>amount</th>
          </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }

  async componentDidMount() {
    const products = await utils.request.get('/api/products') || [];
    this.setState({ products });
  }
}