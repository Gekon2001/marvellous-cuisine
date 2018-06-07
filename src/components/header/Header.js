import React from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

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
    </Navbar>
  );
};
