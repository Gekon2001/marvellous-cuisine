import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {},
      searchActive: false,
    };
    this.searchInput = React.createRef();

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
  }

  handleSearchChange(e) {
    //TODO: implement
  };


  showSearch(e) {
    this.setState({
      ...this.state,
      searchActive: true,
    });
  };

  hideSearch(e) {
    if (e.target === this.searchInput.current)
      return;

    this.setState({
      ...this.state,
      searchActive: false,
    });
  };

  render() {
    const  { searchActive } = this.state;
    return (
      <ul className={'header-menu'}>
        <li className={'header-menu-item item-search'}>
          <a onClick={this.showSearch}>
            <i className={'fas fa-search'}></i>
            {
              searchActive
                ? <input
                    type="text"
                    placeholder="Search"
                    onChange={this.handleSearchChange}
                    ref={this.searchInput} />
                : <span>Search</span>
            }
          </a>
        </li>
        {
          !searchActive &&
            <React.Fragment>
              <li className={'header-menu-item item-cart'}>
                <a onClick={this.props.showCart}>
                  <i className={'fas fas fa-shopping-cart'}></i>
                  <span>0 Items</span>
                </a>
              </li>
              <li className={'header-menu-item item-login'}>
                <a onClick={this.props.login} >
                  <i className={'fas fa-user'}></i>
                  <span>Login/Signup</span>
                </a>
              </li>
            </React.Fragment>
        }
      </ul>
    );
  }

  componentDidMount() {
    window.document.body.addEventListener('click', this.hideSearch);
  }

  componentWillUnmount() {
    window.document.body.removeEventListener('click', this.hideSearch);
  }
}