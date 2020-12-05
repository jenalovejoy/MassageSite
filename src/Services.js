import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Row, Col} from 'react-bootstrap';

import eggImage from './images/egg-image.jpg';
import energyImage from './images/river-rocks-star.jpg';
import fluteVideo from './images/flute-video.MOV';
import tarotImage from './images/tarot.jpg';
import tree from './images/tree.jpg';

function Services() {
  return (
    <div id="services">
        <h1 className="page-title">Services Menu</h1>
        <Jumbotron fluid id="massage-services" className="service-category">
            <Container>
                <div id='flute-video-container'>
                    <video id='flute-video' controls loop src={fluteVideo}/>
                </div>
                <h2>Massage</h2>
                <p>
                Massage is one of the oldest practiced healing modalities. It can offer relief for the body, 
                but it’s benefits don’t stop there. It doesn’t matter if you are stressed, in pain, or have 
                life-long disease, massage could help. specified to your needs or can be just a general session. 
                Great for tension/ stress throughout the body, or working on specific trouble spots. 
                </p>
                <p>
                    30 min - <i>$40</i> <br/> 
                    1 hour - <i>$75</i> <br/> 
                    90 min - <i>$100</i> <br/> 
                </p>
                <p><i>For two hours or more, please contact me for availability and pricing.</i></p>
                <h3>Foot massage</h3>
                <p>
                    For solely a foot massage for sore or tight feet, ankles, and calves. Finished with oil to nourish the skin of the feet
                    - <i>$30 / 30 min</i>
                </p>
                
                <h3>Massage Add-ons</h3>
                <Row xs={1} md={2}>
                    <Col xs={12}>
                        <h4 className="addOn-title">Gwa Sha</h4>
                        <p>
                            Based on an ancient Chinese method, I use a flat edged stone to scrape the tissues. 
                            Although this sounds quite brutal, most people really like it. It is great for 
                            breaking up adhesions, scar tissue, wound-up fascia, tight muscles, breaking up over crystallizations, 
                            calcium build-ups, and can even assist with some types of arthritis - <i> $10 </i>
                        </p>

                        <h4 className="addOn-title">Cupping</h4>
                        <p>
                            Also an Ancient Chinese method, this technique uses suction to open up the fascia and bring blood 
                            back into an area. For many, five minutes of cupping is the same as half an hour of deep tissue work 
                            with less pain - <i>$15</i>
                        </p>

                        <h4 className="addOn-title">Deep Tissue</h4>
                        <p>
                            Deep tissue massage is a slow and firm pressure that effects the deeper layers of muscle and fascia - <i>$15</i>
                        </p>

                        <h4 className="addOn-title">Energy Sweeping / Balancing</h4>
                        <p>
                            A good massage will already have this impact, but this add-on provides further tools and techniques 
                            for a more complete treatment - <i>$15</i>
                        </p>
                        
                        <h4 className="addOn-title">Topical Analgesic</h4>
                        <p>
                            Either if you want some good cooling after an intense massage, or if your muscles need a little 
                            more nourishing. Cryoderm with mint or Cryoderm with magnesium - <i>$15</i>
                        </p>
                    </Col>
                    <Col className="service-image-holder">
                        <Container className="service-image-holder">
                            <Image src={tree} className="service-image"/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        
        </Jumbotron>
        <Jumbotron fluid id="implant-services" className="service-category">
            <Container>
                <Row xs={1} md={2}>
                    <Col xs={12}>
                        <h2>Implant Removal</h2>
                        <p className="service-text-with-image">
                            Implants are fairly common. They can be introduced to the body through foods we eat, what we drink, medications, 
                            what we listen to, social media, etc. They can affect the mind and body and make it very 
                            difficult to fulfill your missions here or to wake up to who you are beyond just the body.<p/>
                            <p>These buggers can take a while to find and get rid of, but doing so can really assist in doing quantum leaps!
                            </p>
                            <p>10 min - <i>$15</i></p>
                            <p><i> For more info on implants, as well as the removal protocol I was taught, check out 
                            <a href="https://www.firstwaveindigos.com/post/implant-removal-protocol" className="link"> First Wave Indigos</a> for more information<br/>
                            </i></p> 
                            
                        </p>
                    </Col>
                    <Col>
                        <Container className="service-image-holder">
                            <Image src={eggImage} className="service-image"/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Jumbotron fluid id="energy-services" className="service-category">
            <Container>
                <Row xs={1} md={2}>
                    <Col xs={12}>
                        <h2 >Energy Field Clearing / Balancing</h2>
                        <p className="service-text-with-image">
                            There are several methods I use for this and the ones we use will depend on what feels right to both you and me at the time. <p/>
                            Methods include smudging, 5-pointed star meditation, singing / tones and frequencies, aura debris sweeping, and body debris 
                            sweeping.
                            <p/>
                            <p>1 hour - <i>$55</i></p>
                        </p>
                    </Col>
                    <Col>
                        <Container className="service-image-holder">
                            <Image src={energyImage} className="service-image"/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>

        <Jumbotron fluid id="tor-services" className="service-category">
            <Container>
                <Row xs={1} md={2}>
                    <Col xs={12}>
                        <h2 >Tarot / Oracle / Rune Readings</h2>
                        <p>
                            I ask your team (guides, dragons, higher levels etc.), what you most need to know at that time.
                            My readings are largely intuition based, from the deck used, the layout, 
                            where the cards are in the reading, and what they represent. I don’t always follow the same layouts, which 
                            makes it more fun while adding another layer of mystery and accuracy. <br/>
                        </p>
                        <p>
                            General readings (15 - 20 min) - <i> $20 </i> <br/> 
                            In-depth readings (20 - 60 min) - <i>$55</i>
                        </p>
                    </Col>
                    <Col>
                        <Container className="service-image-holder">
                            <Image src={tarotImage} className="service-image"/>
                        </Container>
                    </Col>
                </Row>
            </Container>
           
        </Jumbotron>
    </div>
  );
}

export default Services;
