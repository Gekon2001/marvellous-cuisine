import React from 'react';

import Header from 'Components/header/Header';
import Footer from 'Components/footer/Footer';
import AuthModal from 'Components/login/AuthModal';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div>
            {this.props.children}
          </div>
        </section>
        <Footer />
        <AuthModal />
      </div>
    );
  };
}

export default App;
