import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class LoginSignupComponent extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Tab 1">
            <LoginComponent></LoginComponent>
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            <SignupComponent></SignupComponent>
          </Tab>
          <Tab eventKey={3} title="Tab 3" disabled>
            Tab 3 content
          </Tab>
        </Tabs>;
      </div>
    );
  }
}

export default LoginSignupComponent;



