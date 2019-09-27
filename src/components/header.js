import React from 'react';
import PropTypes from "prop-types"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar fixed="top" light expand="md">
        <div classname='container'>
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/examples">Form Examples</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
    );
  }
}

Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }
  
  export default Header
  