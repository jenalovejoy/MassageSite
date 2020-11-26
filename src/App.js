import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Services from './Services';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <About/>
        <Services/>
        <Contact/>
        <Navigation/>
      </div>
  );
}

export default App;
