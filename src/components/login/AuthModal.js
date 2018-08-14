import React from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';
import LoginSignup from './LoginSignup';
import { hideAuthModal, userSignedIn, userSignedUp } from 'Actions/authActions';

import utils from 'Utils';

const customStyles = {
  // content : {
  //   top                   : '50%',
  //   left                  : '50%',
  //   right                 : 'auto',
  //   bottom                : 'auto',
  //   // marginRight           : '-50%',
  //   // transform             : 'translate(-50%, -50%)'
  // }
};

Modal.setAppElement('#app-root')

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, onHide, handleSignin, handleSignup, signinErrors, signupErrors } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        // onAfterOpen={}
        onRequestClose={onHide}
        // closeTimeoutMS={}
        style={customStyles}
        // contentLabel={}
        // portalClassName={}
        // overlayClassName={}
        className={'auth-modal'}
        // bodyOpenClassName={}
        // htmlOpenClassName={}
        // ariaHideApp={}
        // shouldFocusAfterRender={}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true} >
        <LoginSignup
          handleSignin={handleSignin}
          handleSignup={handleSignup}
          signinErrors={signinErrors}
          signupErrors={signupErrors} />
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.auth.showAuthModal,
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