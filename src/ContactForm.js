import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { useState } from "react";


function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container id="contact-form-container">
            <h2>Header</h2>
        <Form id="contact-form" validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Row} controlID="formName">
                <Form.Label column sm={2}>Name</Form.Label>
                <Col sm={10}>
                    <Form.Control required type="text" placeholder="Your name"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlID="formBasicEmail">
                <Form.Label column sm={2}>Email</Form.Label>
                <Col sm={10}>
                    <Form.Control required type="email" placeholder="name@example.com"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlID="formPhone">
                <Form.Label column sm={2}>Phone Number</Form.Label>
                <Col sm={10}>
                    <Form.Control required 
                        type="tel"
                        placeholder="Phone number"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlID="formMessage">
                <Form.Label column sm={2} >Notes</Form.Label>
                <Col sm={10} rows={3}>
                    <Form.Control required 
                        as="textarea"
                        rows={3}
                        placeholder="Anything you'd like to say: questions, schedule preferences, etc."/>
                </Col>
            </Form.Group>

            <Button type="submit" variant="light">Submit</Button>
        </Form>
        </Container>
    );
}

export default ContactForm;