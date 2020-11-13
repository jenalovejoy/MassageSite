import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Col, Row } from "react-bootstrap";

import logo from './images/flower-power-massage.jpg';
import greeneryPath from './images/greenery-path.jpg';
import pinkFlower from './images/pink-flower.jpg';
import orangeFlower from './images/orange-flower.jpg';

function About() {
  return (
    <div className="App">
        
        <Jumbotron fluid id="about">
            <Container id="logo-container" fluid>
                <Image id="logo-image" src={logo} fluid/>
            </Container>
            <Container>
                <h1>Daniel Flowerdew LMT</h1>
                <p className="intro-text"> I have practiced many holistic healing modalities since I was very little, 
                    including getting my first reiki attunement when I was thirteen. Because of this, 
                    I have multiple ways of addressing the body. 
                Now, being a licensed massage therapist for multiple years, I have decided it is time 
                to offer more of my skills, knowledge, expertise, authenticity and love to more. </p>
                
                <p className="intro-text">I am now offering:
                <ul> 
                    <li> Massage (including Swedish, deep tissue, foot massage, gua sha, and cupping)</li> 
                    <li> Implant removal </li> 
                    <li> Energy field clearing and balancing</li> 
                    <li> Tarot, Oracle card, and Rune readings</li> 
                </ul> </p>
                <p className="intro-text">
                I feel like each of these techniques and holistic practices really offer the unique space 
                to assist with the deep seated pains of the body, heart, and psyche. These techniques, 
                coupled with my true love and passion for learning, healing, and body work, might offer 
                the solution you need to have long lasting and authentic healing. I am here to help remind 
                you what your body is capable of. And if I can, I will walk with you as you undertake this 
                journey. From one human to another, I’ve been there. 
                </p>
                <p className="intro-text">You are not alone. I’ve got your back. </p>
                <Row xs={1} md={3} id="about-images-row">
                    <Col className="about-images-col">
                        <Image id="pink-flower-image" className="about-images" src={pinkFlower} fluid/>
                    </Col>
                    <Col className="about-images-col">                    
                        <Image id="greenery-path-image" className="about-images" src={greeneryPath} fluid/>
                    </Col>
                    <Col className="about-images-col">
                        <Image id="orange-flower-image" className="about-images" src={orangeFlower} fluid/>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </div>
  );
}

export default About;
