// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

import logo from './images/flower-power-massage.jpg';

function About() {
  return (
    <div className="App">
        <Container id="logo-container" fluid>
            <Image id="logo-image" src={logo} fluid/>
        </Container>
        <Jumbotron fluid id="about">
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
            </Container>
        </Jumbotron>
    </div>
  );
}

export default About;
