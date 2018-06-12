import React, {Component} from 'react';
import { Navbar, Nav, NavItem, FormControl } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser} from '@fortawesome/fontawesome-free-solid';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputVisible: false
    };
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleBodyClick);
  }

  handlerClickSearchButton = () => {
    this.setState({
      inputVisible: true
    })
  };

  handleBodyClick(e) {
    const searchInput = document.getElementsByClassName('search-input')[0];
    if (e.path.includes(searchInput)) return;
    this.setState({
      inputVisible: false
    })
  };

  render() {
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
        {this.state.inputVisible ?
          <Nav pullRight className={'search-input'}>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={()=>{}}
            />
            <FontAwesomeIcon icon={faSearch} />
          </Nav>
          :
          <Nav pullRight>
            <NavItem eventKey={5} href="#" onClick={this.handlerClickSearchButton}>
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
        }
      </Navbar>
    );
  }
};
