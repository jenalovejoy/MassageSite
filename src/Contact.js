import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ContactForm from './ContactForm'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Contact() {
  return (
    <div className="App">
        <Jumbotron fluid id="contact">
            <Container>
                <h1>Contact Me</h1>
                <p>
                    I am available at the location / times below. Not all services may be available at all locations.
                    <ul>
                        <li>Place - times/dates, contact (phone)</li>
                        <li>Place - times/dates, contact (phone)</li>
                        <li>Place - times/dates, contact (phone)</li>
                    </ul>
                </p>
                <p className="contact-text">For more information, or to book an appointment, please fill out 
                the form below and I will contact you as soon as I can 
                </p> 
            </Container>
            <ContactForm/>
        </Jumbotron>
    </div>
  );
}

export default Contact;