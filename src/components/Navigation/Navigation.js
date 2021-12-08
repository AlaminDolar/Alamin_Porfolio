import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './Navigation.css'
const Navigation = () => {
    return (
        <div className="header">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">Md. Alamin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="text-warning" >Home</Nav.Link>
                            <Nav.Link href="#about" className="text-warning">About</Nav.Link>
                            <Nav.Link href="#projects" className="text-warning">portfolio</Nav.Link>
                            <Nav.Link href="#service" className="text-warning">service</Nav.Link>
                            <Nav.Link href="/blog" className="text-warning">Blog</Nav.Link>
                            <Nav.Link href="https://drive.google.com/uc?export=download&id=1KXbXNwwgGWzps9sJ5gemWiKAiv7lmVLt" className="text-warning">Download Resume</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;