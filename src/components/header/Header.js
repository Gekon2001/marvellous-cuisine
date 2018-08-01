import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showAuthModal} from "Actions/authActions";
import Menu from './Menu';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className={'app-nav'}>
        <ul className={'header'}>
          <li><a href={'/'}>Marvellous Cuisine</a></li>
        </ul>
        <ul className={'links'}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/shop'}>Shop</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        <Menu />
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);