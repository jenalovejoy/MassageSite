import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

import tarotImage from './images/tarot.jpg';
import starRock from './images/river-rocks-star.jpg';


function Services() {
  return (
    <div id="services-menu">
        <h1 id="service-title">Services Menu</h1>
        <Jumbotron fluid id="massage-services" className="service-category">
            <Container>
                <h2>Massage</h2>
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
                <h3>Foot massage</h3>
                <p>
                    For solely a foot massage for sore or tight feet, ankles, and calves. Finished with oil to nourish the skin of the feet
                    - <i>$30 / 30 min</i>
                </p>
                <h3>Massage Add-ons</h3>

                <h4 className="addOn-title">Gua Sha</h4>
                <p>
                    Based on an ancient Chinese method, I use a flat edged stone to scrape the tissues. 
                    Although this sounds quite brutal, most people really like it. It is great for 
                    breaking up adhesions, scar tissues, wound up fascia, breaking up over crystallizations, 
                    calcium build ups, and can even assist with most types or arthritis - <i> $10 </i>
                </p>

                <h4 className="addOn-title">Cupping</h4>
                <p>
                    Also from Ancient China, this technique uses suction to open up the fascia and bring blood 
                    back into an area. I have been told that 5 minutes of cupping is the same as half an hour 
                    of deep tissue work. And to most it feels better then having elbows digging into your back - <i>$15</i>
                </p>

                <h4 className="addOn-title">Deep Tissue</h4>
                <p>
                    To most, deep tissue means pain. And if that’s what you want, I can do that too, but to me 
                    deep tissue is a slow and firm pressure that effects the deeper layers of muscle and fascia - <i>$15</i>
                </p>

                <h4 className="addOn-title">Energy Sweeping / Balancing</h4>
                <p>
                    Massage can do this on its own, but everything gets a little more impactful when the intent 
                    and will is there. - <i>$15</i>
                </p>
                
                <h4 className="addOn-title">Topical Analgesic</h4>
                <p>
                    Either if you want some good cooling after an intense massage, or if your muscles need a little 
                    more nourishing. Cryoderm with mint or Cryoderm with magnesium. - <i>$15</i>
                </p>

                <h4 className="addOn-title">Foot Massage</h4>
                <p>
                    Foot Massage for sore or tight feet, ankles, and calves. Finished with oil to nourish the skin of the feet
                    - <i>$30 / 30 min</i>
                </p>
            </Container>
        </Jumbotron>
        <Jumbotron fluid id="implant-services" className="service-category">
            <Container>
                <h2>Implant Removal</h2>
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
            </Container>
        </Jumbotron>
        <Jumbotron fluid id="energy-services" className="service-category">
            <Container>
                <h2 >Energy Field Clearing / Balancing</h2>
                <p>
                    There are several methods I use for this, and the ones we use will depend on what feels right to both you and me at the time. 
                    Methods include, smudging, 5 pointed star meditation, singing/ tones and frequencies, aura debris sweeping, and body debris 
                    sweeping. You can have this as a part of the massage session ($15 additional charge to the massage,) or on its own <br/>
                    Both the implant work, and energy clearing and balancing can be done remotely too, same price as above. - <i>$55 / 1 hour</i>
                </p>
            </Container>
            <Container className="service-image-holder">
                <Image src={starRock} className="service-image"/>
            </Container>
        </Jumbotron>
        <Jumbotron fluid id="tor-services" className="service-category">
            <Container>
                <h2 >Tarot / Oracle / Rune Readings</h2>
                <p>
                    If you have had these done, then you know what they are. If you have never had any of these done, I ask your team 
                    (guides, dragons, higher levels etc,) what you most need to know at that time. For these sessions, it helps if I 
                    do NOT know what is going on in your life. My readings are largely intuition based. Down to the deck used, the layout, 
                    and what the cards represent where they are in the reading. I don’t always follow the layouts most people use. This 
                    makes it so much more fun, and adds another layer of mystery and accuracy. <br/>
                </p>
                <p>
                    General readings (15-20 min) - <i> $20 </i> <br/> 
                    In-depth readings (normally for greater clarity and guidance, can be 20 minutes to an hour) - <i>$55</i>
                </p>
                <Container className="service-image-holder">
                    <Image src={tarotImage} className="service-image"/>
                </Container>
            </Container>
        </Jumbotron>
    </div>
  );
}

export default Services;
