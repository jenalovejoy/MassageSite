import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Switch, Route, Link } from 'react-router-dom';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Navigation/>
      </div>
  );
}

export default App;
