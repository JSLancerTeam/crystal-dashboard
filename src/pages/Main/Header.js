import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Dashboard</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem><i className="fa fa-dashboard"></i></NavItem>
      <NavDropdown title={<i className="fa fa-globe" />} id="basic-nav-dropdown">
        <MenuItem>Action</MenuItem>
        <MenuItem>Another action</MenuItem>
        <MenuItem>Something else here</MenuItem>
        <MenuItem divider/>
        <MenuItem>Separated link</MenuItem>
      </NavDropdown>
      <NavItem><i className="fa fa-search"></i></NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem>Account</NavItem>
      <NavDropdown title="Dropdown" id="right-nav-bar">
        <MenuItem>Action</MenuItem>
        <MenuItem>Another action</MenuItem>
        <MenuItem>Something else here</MenuItem>
        <MenuItem divider/>
        <MenuItem>Separated link</MenuItem>
      </NavDropdown>
      <NavItem>Log out</NavItem>
    </Nav>
  </Navbar>
);

export default Header;