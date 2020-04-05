import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const linkStyle = {
    fontWeight: "bold",
    color: "#ffffff",
    marginRight: "1em !important"
  };
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Christian Uwakristu</Navbar.Brand>
      <Navbar.Text>| Full Stack Developer</Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-collapse">
          <Nav.Link href="/home" style={linkStyle}>
            Home
          </Nav.Link>
          <Nav.Link href="/about" style={linkStyle}>
            About
          </Nav.Link>
          <Nav.Link href="/services" style={linkStyle}>
            Services
          </Nav.Link>
          <Nav.Link href="/portofolio" style={linkStyle}>
            Portofolio
          </Nav.Link>
          <Nav.Link href="/contact" style={linkStyle}>
            Hire Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
