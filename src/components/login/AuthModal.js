import React from 'react';
import { connect } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';
import LoginSignup from './LoginSignup';
import { hideAuthModal } from 'Actions/authActions';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { show, onHide, handleSignin, handleSignup, signinErrors, signupErrors } = this.props;

    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginSignup
            handleSignin={handleSignin}
            handleSignup={handleSignup}
            signinErrors={signinErrors}
            signupErrors={signupErrors} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.auth.showAuthModal,
    signinErrors: {},
    signupErrors: {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: () => {
      dispatch(hideAuthModal())
    },
    handleSignin(e) {
      e.preventDefault();
      //TODO: implement
      return false;
    },
    handleSignup(e) {
      e.preventDefault();
      //TODO: implement
      return false;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);