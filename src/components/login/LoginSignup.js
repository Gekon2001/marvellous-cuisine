import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import { connect } from 'react-redux';

class LoginSignup extends React.Component {

  render() {
    return (
      <div className={'login-signup'}>
        <Tabs
          defaultActiveKey={2}
          id="login-signup-tabs"
          className={'tabs'}
          style={{ margin: 'auto', width: '50%' }}>
          <Tab
            eventKey={1}
            title="Log In"
            >
            <Login />
          </Tab>
          <Tab
            eventKey={2}
            title="Sign Up">
            <Signup />
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
