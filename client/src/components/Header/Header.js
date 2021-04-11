import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../soccerway1.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="border-style">
        <img
          alt=""
          src={Logo}
          padding-top="100px"
          width="250"
          height="50"
          className="d-inline-block align-top"
        />{" "}
        <Nav activeKey="" className="mr-auto">
          <Nav.Link href="/fixtures" className="nav-link-color">
            FIXTURES
          </Nav.Link>
          <Nav.Link href="/competitions" className="nav-link-color">
            COMPETITIONS
          </Nav.Link>
          <Nav.Link href="/teams" className="nav-link-color">
            TEAMS
          </Nav.Link>
          <Nav.Link href="/predictions" className="nav-link-color">
            PREDICTIONS
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
