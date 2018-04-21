import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
          <BrowserRouter >

          </BrowserRouter>
        </section>
        <Footer>

        </Footer>
      </div>
    );
  };
}

export default App;
