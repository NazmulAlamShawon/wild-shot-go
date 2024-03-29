import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
 

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as ={Link} to="/">WildShotgo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link  as ={Link} to="/">Home</Nav.Link>
            <Nav.Link as ={Link} to="/about">About</Nav.Link>
            <Nav.Link as ={Link} to="/services">Services</Nav.Link>
           
            <Nav.Link as ={Link} to="/blog">Blog</Nav.Link>
                     
          </Nav>
          <Nav>
         
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;