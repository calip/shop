import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#/user">
            Account
          </NavItem>
          <NavItem eventKey={3} href="#/logout">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
