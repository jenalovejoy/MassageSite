// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table'

import lavender from './lavender.jpg'

function App() {
  return (
    <div className="App">
        <Navbar id="Navbar" variant='dark' expand="lg">
            <Navbar.Brand href="#home">Flower-Power Clinical Massage </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <NavDropdown title="Additional Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#about">About</NavDropdown.Item>
                        <NavDropdown.Item href="#services">Services</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Jumbotron fluid id="about">
            <Container>
                <h1>Daniel Flowerdew LMT</h1>
                <p> I have practiced many holistic healing modalities since I was very little, 
                    including getting my first reiki attunement when I was thirteen. Because of this, 
                    I have multiple ways of addressing the body. 
                Now, being a licensed massage therapist for multiple years, I have decided it is time 
                to offer more of my skills, knowledge, expertise, authenticity and love to more. </p>
                
                <p>I am now offering:
                <ul> 
                    <li> Massage (including Swedish, deep tissue, foot massage, gua sha, and cupping) </li> 
                    <li> Implant removal, </li> 
                    <li> Energy field clearing and balancing,</li> 
                    <li> Tarot, Oracle card, and Rune readings.</li> 
                </ul> </p>
                <p>
                I feel like each of these techniques and holistic practices really offer the unique space 
                to assist with the deep seated pains of the body, heart, and psyche. These techniques, 
                coupled with my true love and passion for learning, healing, and body work, might offer 
                the solution you need to have long lasting and authentic healing. I am here to help remind 
                you what your body is capable of. And if I can, I will walk with you as you undertake this 
                journey. From one human to another, I’ve been there. 
                </p>
                <p>You are not alone. I’ve got your back. </p>
            </Container>
        </Jumbotron>
        <Jumbotron fluid id="second-jumbotron">
            <Container>
                
            </Container>
        </Jumbotron>
        <Jumbotron fluid id="services">
            <Container>
                <h1>Massage</h1>
                <p>
                Massage is one of the oldest practiced healing modalities. It can offer relief for the body, 
                but it’s benefits don’t stop there. It doesn’t matter if you are stressed, in pain, or have 
                life long disease, massage could help. specified to your needs or can be just a general session. 
                Great for tension/ stress throughout the body, or working on specific trouble spots. 
                </p>
                <p>
                    30 min - <i>$40</i> <br/> 
                    1 hr - <i>$75</i> <br/> 
                    90 min - <i>$100</i> <br/> 
                For two hours or more, ask me for availability and price.
                </p>
                <h2>Foot massage</h2>
                <p>
                    For solely a foot massage for sore or tight feet, ankles, and calves. Finished with oil to nourish the skin of the feet
                    - <i>$30 / 30 min</i>
                </p>
                <h2>Massage Add-ons</h2>

                <h3 className="addOn-title">Gua Sha</h3>
                <p>
                    Based on an ancient Chinese method, I use a flat edged stone to scrape the tissues. 
                    Although this sounds quite brutal, most people really like it. It is great for 
                    breaking up adhesions, scar tissues, wound up fascia, breaking up over crystallizations, 
                    calcium build ups, and can even assist with most types or arthritis - <i> $10 </i>
                </p>

                <h3 className="addOn-title">Cupping</h3>
                <p>
                    Also from Ancient China, this technique uses suction to open up the fascia and bring blood 
                    back into an area. I have been told that 5 minutes of cupping is the same as half an hour 
                    of deep tissue work. And to most it feels better then having elbows digging into your back - <i>$15</i>
                </p>

                <h3 className="addOn-title">Deep Tissue</h3>
                <p>
                    To most, deep tissue means pain. And if that’s what you want, I can do that too, but to me 
                    deep tissue is a slow and firm pressure that effects the deeper layers of muscle and fascia - <i>$15</i>
                </p>

                <h3 className="addOn-title">Energy Sweeping / Balancing</h3>
                <p>
                    Massage can do this on its own, but everything gets a little more impactful when the intent 
                    and will is there. - <i>$15</i>
                </p>
                
                <h3 className="addOn-title">Topical Analgesic</h3>
                <p>
                    Either if you want some good cooling after an intense massage, or if your muscles need a little 
                    more nourishing. Cryoderm with mint or Cryoderm with magnesium. - <i>$15</i>
                </p>

                <h3 className="addOn-title">Foot Massage</h3>
                <p>
                    Foot Massage for sore or tight feet, ankles, and calves. Finished with oil to nourish the skin of the feet
                    - <i>$30 / 30 min</i>
                </p>

                <h1 >Implant Removal</h1>
                <p>
                    Implants are fairly common. They can be introduced to the body through foods we eat, what we drink, medications, 
                    what we listen to, Facebook, etc. my skill in finding and removing these are not yet fully honed, so if I cannot 
                    assist you with them then I can help you find someone who is. They can effect the mind and body and make it very 
                    difficult to fulfill your missions here or to wake up to who you are beyond just the body. For more info on implants, 
                    as well as the removal protocol I was taught, check out 
                    <a href="https://www.firstwaveindigos.com/post/implant-removal-protocol" id="indigo-link"> First Wave Indigos</a> for more information<br/>
                    These buggers can take a while to find and get rid of, but doing so can really assist in doing quantum leaps!
                    - <i>$15 / 10 min</i>
                </p>

                <h1 >Energy Field Clearing / Balancing</h1>
                <p>
                    There are several methods I use for this, and the ones we use will depend on what feels right to both you and me at the time. 
                    Methods include, smudging, 5 pointed star meditation, singing/ tones and frequencies, aura debris sweeping, and body debris 
                    sweeping. You can have this as a part of the massage session ($15 additional charge to the massage,) or on its own <br/>
                    Both the implant work, and energy clearing and balancing can be done remotely too, same price as above. - <i>$55 / 1 hour</i>
                </p>

                <h1 >Tarot / Oracle / Rune Readings</h1>
                <p>
                    If you have had these done, then you know what they are. If you have never had any of these done, I ask your team 
                    (guides, dragons, higher levels etc,) what you most need to know at that time. For these sessions, it helps if I 
                    do NOT know what is going on in your life. My readings are largely intuition based. Down to the deck used, the layout, 
                    and what the cards represent where they are in the reading. I don’t always follow the layouts most people use. This 
                    makes it so much more fun, and adds another layer of mystery and accuracy. <br/>
                    General readings (15-20 min) - <i> $20 </i> <br/> 
                    In-depth readings (normally for greater clarity and guidance, can be 20 minutes to an hour) - <i>$55</i>
                </p>
                
            </Container>
        </Jumbotron>
    </div>
  );
}

export default App;
