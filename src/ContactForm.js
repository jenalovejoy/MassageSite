import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import React from 'react';
init(userID);

export default class ContactForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            email: '',
            phone: '',
            message: '' 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        let variables = {
            client_name: this.state.name, 
            client_email: this.state.email, 
            client_phone: this.state.phone,
            message: this.state.message};

        emailjs.send(serviceId, templateId, variables)
        .then(res => {console.log("email sent successful!")})
        .catch(err => console.error("error message: ", err));
    };

    render(){
        return (
            <Container id="contact-form-container">
                <h2>Header</h2>
            <Form id="contact-form" onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controld="formName">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control required 
                            type="text" 
                            placeholder="Your name"
                            onChange={(event) => this.setState({name: event.target.value })} 
                            value={this.state.name}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlID="formBasicEmail">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control required 
                            type="email" 
                            placeholder="name@example.com"
                            onChange={(event) => this.setState({email: event.target.value })} 
                            value={this.state.email}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlID="formPhone">
                    <Form.Label column sm={2}>Phone Number</Form.Label>
                    <Col sm={10}>
                        <Form.Control required 
                            type="tel"
                            placeholder="Phone number"
                            onChange={(event) => this.setState({phone: event.target.value })} 
                            value={this.state.phone}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlID="formMessage">
                    <Form.Label column sm={2} >Notes</Form.Label>
                    <Col sm={10} rows={3}>
                        <Form.Control required 
                            as="textarea"
                            rows={3}
                            placeholder="Anything you'd like to say: questions, schedule preferences, etc."
                            onChange={(event) => this.setState({message: event.target.value })} 
                            value={this.state.message}/>
                    </Col>
                </Form.Group>
                <Button type="submit" variant="light">Submit</Button>
            </Form>
            </Container>
        );
    }
}

// export default ContactForm;