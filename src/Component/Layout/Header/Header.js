import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <div>
 <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home">
            <img
              src="https://cognida.ai/images/cognida_logo_white.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link className="option" to="/home"> Upload </Link></Nav.Link>
            <Nav.Link ><Link className="option" to="/list"> List </Link> </Nav.Link>
            <NavDropdown className="option" title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Username</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Time of Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">LOGOUT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Toggle
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
  )
}

export default Header