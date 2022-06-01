import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
const Navigation = () => {
    return (
        <div className="header">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">Md. Alamin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="text-warning" as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="text-warning" as={HashLink} to="/home#aboutMe">About</Nav.Link>

                            <Nav.Link className="text-warning" as={HashLink} to="/home#projects">My Project</Nav.Link>
                            <Nav.Link className="text-warning" as={HashLink} to="/home#contact">Contact Me</Nav.Link>
                            <Nav.Link className="text-warning" as={HashLink} to="/home#blogs">Blog</Nav.Link>
                            <Nav.Link href="https://drive.google.com/uc?export=download&id=1YGMHjL07R81Dq_tYtQVBhPjHjrCJGUNo" className="text-warning">Download Resume</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;