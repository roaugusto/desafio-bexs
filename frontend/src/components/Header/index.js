import React, { Component } from 'react';

import assets from './assets';

class Header extends Component {
  state = {
    collapsed: true,
    popoverOpen: false,
    dropdownOpen: false,
  };

  toggleNavbar = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  togglePopover = () => {
    const { popoverOpen } = this.state;
    this.setState({ popoverOpen: !popoverOpen });
  };

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    const { collapsed } = this.state;
    const classCollapseOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classCollapseTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <div className="p-1">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">
            <img src={assets.imgLogo} style={{ width: '60%' }} alt="logo" />
          </a>
          <button
            onClick={this.toggleNavbar}
            className={`${classCollapseTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`${classCollapseOne}`} id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link header" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
