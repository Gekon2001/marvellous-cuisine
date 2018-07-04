import React from 'react';
import { connect } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';
import LoginSignup from './LoginSignup';
import { hideAuthModal, userSignedIn, userSignedUp } from 'Actions/authActions';

import utils from 'Utils';

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
        {/*<Modal.Footer>*/}
          {/*<Button onClick={onHide}>Close</Button>*/}
        {/*</Modal.Footer>*/}
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
    async handleSignin(creds) {
      const { error, data } = await utils.request.post(`/api/auth/signin`, creds);
      if (error)
        return alert(JSON.stringify(error, null, 2));

      dispatch(userSignedIn(data));
    },
    async handleSignup(userData) {
      const { error, data } = await utils.request.post(`/api/auth/signup`, userData);
      if (error)
        return alert(JSON.stringify(error, null, 2));

      dispatch(userSignedUp(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);