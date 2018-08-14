import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

  }

  renderData() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }

  renderProductRow() {
    return (
      <tr>

      </tr>
    );
  }

  render() {
    return (
      <table>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Amount</th>
          <th>Published</th>
        </tr>
        {
          this.state.data.map((product) => {

          })
        }
      </table>
    );
  }

  componentDidmount() {

  }
}

export default ProductList;