import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactForm from './ContactForm'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Contact() {
  return (
    <div id="contact">
        <h1 className="page-title">How to Contact</h1>
        <Jumbotron fluid id="contact-info">
            <Container>
                <h2>Availability</h2>
                <p>
                    <a href="https://www.myclaritycenter.com/" className="link">Clarity Center</a> <br/>
                    6848 N Government Way, Dalton Gardens ID, 83815 <br/>
                    Tuesdays and Wednesdays, 9 am - 5 pm 
                </p>
                <p>
                    <b>Now offering massage to-go with massage chair</b> <br/>
                    (Great for employee appreciation!) <br/>
                    Couer d'Alene, Post Falls, and surrounding areas for a small fee<br/>
                    Mondays, 12 pm - 6 pm
                </p>
                <p>                
                    I can also be reached by phone at (208) 699-4822 
                    or at my <a href="https://www.facebook.com/FlowerdewLMT" className="link">Facebook page</a>
                </p>
                <p className="contact-text">For more information, or to book an appointment, 
                    please fill out the form below and I will contact you as soon as I can 
                </p> 
            </Container>
            <ContactForm/>
        </Jumbotron>
    </div>
  );
}

export default Contact;