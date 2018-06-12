import React from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser} from '@fortawesome/fontawesome-free-solid';

export default function Header(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href={'/'}>Marvellous Cuisine</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href={'/'}>Home</NavItem>
        <NavItem eventKey={2} href={'/shop'}>Shop</NavItem>
        <NavItem eventKey={3} href={'/blog'}>Blog</NavItem>
        <NavItem eventKey={4} href={'/about'}>About us</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={5} href="#">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </NavItem>
        <NavItem eventKey={6} href="#">
          <FontAwesomeIcon icon={faShoppingCart}/>
          0 items
        </NavItem>
        <NavItem eventKey={7} href="#">
          <FontAwesomeIcon icon={faUser} />
          Login
        </NavItem>
      </Nav>
    </Navbar>
  );
};
