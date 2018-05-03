import React from 'react';

import Header from 'Components/header/Header';
import Footer from 'Components/footer/Footer';
import NavigationMenu from 'Components/navigation-menu/NavigationMenu';

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
      </div>
    );
  };
}

export default App;
