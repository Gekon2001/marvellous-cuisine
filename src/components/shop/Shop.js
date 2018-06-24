import React from 'react';
import ProductThumbail from './ProductThumbail';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';


const dataItem = {
  name: 'Cashew cake',
  category: 'sweets',
  price: 100,
  description: 'Super delicious cake, you ever eaten',
  pictures: [{ url: "https://cdn.shopify.com/s/files/1/1208/1394/products/20160615_072131_1024x1024.jpg" }],
  reviews: []
};
let data=[];
for (let i = 0; i < 20; i++) {
  data.push(dataItem);
}

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data: data,
      pageSize: 8,
      currentPage: 0,
      currentData: data.slice(0,8)
    }
  }

  componentDidMount() {
  }

  renderThumbails = () => {
    return this.state.currentData.map((item, index)=>
        <ProductThumbail
          key={index}
          url={item.pictures[0].url}
          title={item.name}
          price={item.price}
          description={item.description}
          label={'More information'}
        />
    )
  };

  handlePageChange = (e) => {
    let selected = e.selected;
    let offset = Math.ceil(selected * this.state.pageSize);
    this.setState({currentData: data.slice(offset,offset + this.state.pageSize)})
  };

  render() {
    return (
      <div>
        <h2>Shop</h2>
        <div className={'shop-collection col-sm-10'} >
          {this.renderThumbails()}
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom:20}}>
          <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         initialPage={0}
                         breakLabel={<a href="">...</a>}
                         breakClassName={"break-me"}
                         pageCount={Math.ceil(this.state.data.length/this.state.pageSize)}
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
