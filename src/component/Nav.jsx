// NavBar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import logo from '../assest/logo.svg';
import '../style/nav.css';

function NavBar() {
  const { search, setSearch } = useContext(DataContext);
  const home = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            className="logo"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 mx-auto text-center" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" className="navlist">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="post" className="navlist">
              Post
            </Nav.Link>
            <Nav.Link as={Link} to="about" className="navlist">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="contact" className="navlist">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Search Post"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form>
          <Button>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
