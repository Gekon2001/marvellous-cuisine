import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement("#app-root");

class CartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {

    return (
      <Modal
        isOpen={}
        style={customStyles}>
        modal content
      </Modal>
    );
  }
}

export default CartModal;