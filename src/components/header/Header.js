import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showAuthModal } from 'Actions/authActions';
import { showCart } from 'Actions/cartActions';
import Menu from './Menu';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className={'app-nav'}>
        <ul className={'nav-items'}>
          <li className={'app-logo'}>
            <a className={'home-link'} href={'/'} target={'_self'}>Marvellous Cuisine</a>
          </li>
          <li className={'links'}>
            <ul className={'links-container'}>
              <li className={'link-container'}><Link className={'nav-link'} to={'/'}>Home</Link></li>
              <li className={'link-container'}><Link className={'nav-link'} to={'/shop'}>Shop</Link></li>
              <li className={'link-container'}><Link className={'nav-link'} to={'/blog'}>Blog</Link></li>
              <li className={'link-container'}><Link className={'nav-link'} to={'/about'}>About</Link></li>
            </ul>
          </li>
          <li className={'app-menu'}>
            <Menu login={this.props.login} showCart={this.props.showCart}/>
          </li>
        </ul>
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      return dispatch(showAuthModal());
    },
    showCart: () => {
      return dispatch(showCart())
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);