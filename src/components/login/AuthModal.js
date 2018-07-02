import React from 'react';
import { connect } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';
import LoginSignup from './LoginSignup';
import { hideAuthModal } from 'Actions/authActions';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: 'Sign up',
      activeTab: 'signup-tab',
    };
  }

  render() {
    const { show, onHide, onShow} = this.props;

    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginSignup />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.auth.showAuthModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: () => {
      dispatch(hideAuthModal())
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);