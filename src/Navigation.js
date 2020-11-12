// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <Navbar id="Navbar" variant='dark' expand="lg">
        <Navbar.Brand href="#home">Flower-Power Clinical Massage </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">About</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
