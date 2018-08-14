import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


class ProductThumbail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      show: false
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const price = `Price: ${this.props.price}$`;
    return (
      <div style={{width: '23%',marginBottom: 40, position: 'relative'}}>
        <figure style={{width: '100%'}} onClick={this.handleShow}>
          <img src={this.props.url}
               style={{width: '100%'}}
               alt=""/>
          <div className={'overlay-image'}>
            <span className={'label-image'}>{this.props.label}</span>
          </div>
        </figure>
        <div className={'info'}>
          <p className={'title'}>{this.props.title}</p>
          <p>{price}</p>
          <p>{this.props.description}</p>
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          bsSize="large"
          atyle={{position: 'absolute'}}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display: 'flex', flexDirection: 'row', }}>
            <div  style={{width: '45%'}}>
              <img src={this.props.url}
                   style={{width: '100%'}}
                   alt=""/>
            </div>
           <div style={{ marginLeft: 40, fontSize: 20}}>
             <p>{price}</p>
             <p>Description:</p>
             <p>{this.props.description}</p>
             <p>We require a minimum of 2-3 days notice to fulfil all cake orders. Pick-up instore only.</p>
           </div>
          </Modal.Body>
          <Modal.Footer style={{minHeight: 200}}>
            <a onClick={this.props.onHide} style={{ cursor: 'pointer', position: 'absolute', bottom: 5, right: 15}}>
              {'visit product page'.toUpperCase()}
            <FontAwesomeIcon style={{marginLeft: 5}} icon={faLongArrowAltRight}/>
            </a>
          </Modal.Footer>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductThumbail);
