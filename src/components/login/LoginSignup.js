import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import { connect } from 'react-redux';

class LoginSignup extends React.Component {

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={2} id="login-signup-tabs">
          <Tab eventKey={1} title="Log In">
            <Login></Login>
          </Tab>
          <Tab eventKey={2} title="Sign Up">
            <Signup></Signup>
          </Tab>
        </Tabs>;
      </div>
    );
  }
}

function mapStateToProps(state, ownProsp) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
