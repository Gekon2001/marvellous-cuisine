import React from 'react';
import utils from 'Utils';
import Loader from 'react-loader';
import Paginate from 'react-paginate';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };

    this.editProduct = this.editProduct.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
  }

  editProduct(e) {
    const { code } = e.currentTarget.dataset;
    this.props.history.push(`/admin/products/${code}`);
  }

  renderProduct(product, idx) {
    return (
      <tr key={product.code} className={'product-table-row'} data-code={product.code} onClick={this.editProduct}>
        <td scope={'row'}>{utils.format.normalizeNumber(idx)}</td>
        <td scope={'col'}>{product.name}</td>
        <td scope={'col'}>{product.amount}</td>
        <td scope={'col'}>{product.price}</td>
        <td scope={'col'}>{product.category}</td>
        <td scope={'col'}>{product.description}</td>
      </tr>
    );
  }

  render() {
    const loaded = this.state.products !== null;

    return (
      <div className={'container container-fluid'}>
        <div className={'table-responsive'}>
          <table className={'table table-striped table-bordered table-hover table-responsive'}>
            <thead className={'thead-light'}>
            <tr>
              <th scope={'col'}>#</th>
              <th scope={'col'}>Name</th>
              <th scope={'col'}>Amount</th>
              <th scope={'col'}>Price</th>
              <th scope={'col'}>Category</th>
              <th scope={'col'}>Description</th>
            </tr>
            </thead>
            { this.state.products && (
              <tbody>
                {  this.state.products.map(this.renderProduct) }
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const products = await utils.request.get('/api/products') || [];
    this.setState({ products });
  }
}