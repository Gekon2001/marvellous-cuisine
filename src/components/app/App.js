import React from 'react';

import Header from 'Components/header/Header';
import Footer from 'Components/footer/Footer';
import NavigationMenu from 'Components/navigation-menu/NavigationMenu';
import AuthModal from 'Components/login/AuthModal';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <NavigationMenu></NavigationMenu>
        </Header>
        <section>
          <div>
            {this.props.children}
          </div>
        </section>
        <Footer>

        </Footer>
        <AuthModal />
      </div>
    );
  };
}

export default App;
