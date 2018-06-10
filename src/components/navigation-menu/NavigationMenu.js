import React from 'react';
import { Navbar, Nav, NavItem, MenuDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavigationMenu extends React.Component {
  render() {
    return (
      <Navbar className={'main-navbar'}>
        <Nav>
          <NavItem eventKey={1} href={'/'}>Home</NavItem>
          <NavItem eventKey={2} href={'/shop'}>Shop</NavItem>
          <NavItem eventKey={3} href={'/blog'}>Blog</NavItem>
          <NavItem eventKey={4} href={'/about'}>About Us</NavItem>
          <NavItem eventKey={5} href={'/contacts'}>Contacts</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={6} href={'/search'}>Search</NavItem>
          <NavItem eventKey={7} href={'/bin'}>Bin</NavItem>
          <NavItem eventKey={6} href={'/account'}>Account</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
