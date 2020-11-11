// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Switch, Route, Link } from 'react-router-dom';
import Services from './Services';
import About from './About';

function App() {
  return (
    <div className="App">
        <Navbar id="Navbar" variant='dark' expand="lg">
            <Navbar.Brand href="#home">Flower-Power Clinical Massage </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">About</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    {/* <Nav.Link as={Link} href="#services">Updates</Nav.Link> */}
                    {/* <Nav.Link as={Link} href="#services">Blog</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
