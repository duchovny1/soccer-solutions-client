import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../soccerway1.png";
import "./Header.css";
import { Link } from "react-router-dom";
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
        <Nav className="mr-auto" defaultActiveKey="1">
          <Nav.Link
            as={Link}
            to="/fixtures"
            className="nav-link-color"
            eventKey="1"
          >
            FIXTURES
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/competitions"
            eventKey="2"
            className="nav-link-color"
          >
            COMPETITIONS
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/teams"
            eventKey="3"
            className="nav-link-color"
          >
            TEAMS
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/predictions"
            eventKey="4"
            className="nav-link-color"
          >
            PREDICTIONS
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
