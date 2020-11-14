import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ContactForm from './ContactForm'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Contact() {
  return (
    <div className="App">
        <h1 className="page-title">How to Contact</h1>
        <Jumbotron fluid id="contact">
            <Container>
                <p>
                    My services are available at <b>Clarity Center Crystals</b> <br/>
                    6848 N Government Way, Dalton Gardens ID, 83815 <br/>
                    Monday through Wednesday, 9 am - 5 pm 
                </p>
                <p>                
                    I can also be reached by phone with (208) 699-4822 
                    or at my <a href="https://www.facebook.com/FlowerdewLMT" className="link">Facebook page</a>
                </p>
                <p className="contact-text">For more information, or to book an appointment, 
                    please fill out the form below and I will contact you as soon as I can 
                </p> 
            </Container>
            <ContactForm/>
            <Container>
                <p>
                    
                </p>
            </Container>
        </Jumbotron>
    </div>
  );
}

export default Contact;