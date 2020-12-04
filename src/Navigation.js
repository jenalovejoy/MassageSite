import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Navigation() {

    return (
        <Navbar id="info-bar" variant='dark' expand="lg">
            <Navbar.Brand href="/">Flower-Power Clinical Massage </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/#about">About</Nav.Link>
                    <Nav.Link as={Link} to="/#services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/#contact">Contact Me</Nav.Link>
                    <Nav.Link as={Link} to="/#testimonials">Testimonials</Nav.Link>

                </Nav>
                <Navbar.Text className="nav-text">(208) 699-4822</Navbar.Text>
                <Navbar.Text className="nav-text">fpcmassage@yahoo.com</Navbar.Text>
                <Navbar.Text>
                    <a href="https://www.facebook.com/FlowerdewLMT"><FontAwesomeIcon icon={faFacebookF}/></a> 
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
  );
}

export default Navigation;
