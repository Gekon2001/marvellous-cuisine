import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Modal from "react-modal";

import ProductThumbnail from './ProductThumbnail';

const dataItem = {
  name: 'Cashew cake',
  category: 'sweets',
  price: 100,
  description: 'Super delicious cake, you ever eaten',
  pictures: [{ url: "https://cdn.shopify.com/s/files/1/1208/1394/products/20160615_072131_1024x1024.jpg" }],
  reviews: []
};

const data = (new Array(20)).fill(dataItem, 0, 20);

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      pageSize: 8,
      currentPage: 0,
      currentData: data.slice(0,8),
      currentProduct: null,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {

  }


  handlePageChange(e) {
    const { pageSize } = this.state;
    let selected = e.selected;

    let offset = Math.ceil(selected * pageSize);
    this.setState({
      ...this.state,
      currentData: data.slice(offset, offset + pageSize)
    });
  };

  showProductDetails(code) {
    const currentProduct = this.state.data.find(p => p.code === code);
    this.setState({
      ...this.state,
      currentProduct
    });
  }

  hideProductDetails() {
    this.setState({
      ...this.state,
      currentProduct: null,
    });
  }

  render() {
    const pageCount = Math.ceil(this.state.data.length / this.state.pageSize);
    return (
      <div className={'shop'}>
        <h2>Shop</h2>
        <div className={'shop-collection col-sm-10'} >
          {
            this.state.currentData.map((product, idx) => {
              return (<ProductThumbnail
                key={idx}
                url={product.pictures[0].url}
                title={product.name}
                price={product.price}
                description={product.description}
                label={'More information'}
              />);
            })
          }
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom:20}}>
          <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         initialPage={0}
                         breakLabel={<a href="">...</a>}
                         breakClassName={"break-me"}
                         pageCount={pageCount}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         onPageChange={this.handlePageChange}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"}
                         pageClassName={'pagePaginate'}
                         pageLinkClassName={'linkPaginate'}
                         previousClassName={'previous'}
                         nextClassName={'next'}
                         previousLinkClassName={'previousLink'}
                         nextLinkClassName={'nextLink'}
          />
        </div>

        {/*<Modal*/}
          {/*show={this.state.show}*/}
          {/*onHide={this.handleClose}*/}
          {/*bsSize="large"*/}
          {/*style={{position: 'absolute'}} >*/}
          {/*<Modal.Header closeButton>*/}
            {/*<Modal.Title id="contained-modal-title-sm">{this.props.title}</Modal.Title>*/}
          {/*</Modal.Header>*/}
          {/*<Modal.Body style={{display: 'flex', flexDirection: 'row', }}>*/}
            {/*<div  style={{width: '45%'}}>*/}
              {/*<img src={this.props.url}*/}
                   {/*style={{width: '100%'}}*/}
                   {/*alt=""/>*/}
            {/*</div>*/}
            {/*<div style={{ marginLeft: 40, fontSize: 20}}>*/}
              {/*<p>{price}</p>*/}
              {/*<p>Description:</p>*/}
              {/*<p>{this.props.description}</p>*/}
              {/*<p>We require a minimum of 2-3 days notice to fulfil all cake orders. Pick-up instore only.</p>*/}
            {/*</div>*/}
          {/*</Modal.Body>*/}
          {/*<Modal.Footer style={{minHeight: 200}}>*/}
            {/*<a onClick={this.props.onHide} style={{ cursor: 'pointer', position: 'absolute', bottom: 5, right: 15}}>*/}
              {/*{'visit product page'.toUpperCase()}*/}
              {/*<FontAwesomeIcon style={{marginLeft: 5}} icon={faLongArrowAltRight}/>*/}
            {/*</a>*/}
          {/*</Modal.Footer>*/}
        {/*</Modal>*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
