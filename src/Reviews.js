import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Reviews() {
  return (
    <div id="testimonials">
        <h1 className="page-title">Testimonials</h1>
        <Jumbotron fluid id="review-info">
            <Container id="all-reviews">
                {/* First Row */}
                <Row xs={1} md={1} lg={2} className="review-row">
                    <Col className="review-col">
                        <p className="review-text">
                            "While on vacation, I came to Daniel for chronic shoulder and hip pain. Typically 
                            I go to massage therapists about once a month, ranging from the cheap 10 minute 
                            chair massages all the way up to cruise ship liner professionals, depending on price, 
                            quality, availability, and need. <br/> I found that Daniel's massage was one of the most 
                            effective I've ever had and the best priced for the excellent quality of service he 
                            offered. He was empathetic, compassionate, and listened well to me and the muscles knots. 
                            I would recommend him to anybody. It's been about a month since I saw him and while 
                            the hip pain remains (its a 15 year long injury that has never fully gone away), the 
                            shoulder pain has left entirely. Next time I am on vacation in his area, I will 
                            definitely seek out Daniel again and hopefully take care of the rest of my muscle 
                            issues! Thanks, Daniel" 
                            <br/><i className="reviewer-name">Alex Wonder</i>
                        </p>
                    </Col>
                    <Col className="review-col">
                        <Row lg={1}>
                            <p className="review-text">
                                “I highly recommend Daniel Flowerdew for massages. Daniel's techniques get 
                                to the core of ones pain. I have been experiencing a better quality of life 
                                due to Daniel's "magical fingers." So book those appointments now before you 
                                are on a waiting list!” 
                                <br/><i className="reviewer-name">Roe Bell</i>
                            </p>
                        </Row>
                        <Row lg={1}>
                            <p className="review-text">
                                "Daniel was experienced and professional. I felt very safe with him as he 
                                helped me relax. I felt so much better after my massage. Increased range of 
                                motion and decreased pain in my low back where others have not succeeded in 
                                helping me.” 
                                <br/><i className="reviewer-name">Keryn Richards</i>
                            </p>
                        </Row>
                    </Col>
                </Row>

                {/* Second row */}
                <Row xs={1} sm={1} lg={2} className="review-row">
                    <Col className="review-col">
                        <Row lg={1}>
                            <p className="review-text">
                                Well I feel like I have a new body Daniel Flowerdew. Your session has helped and I woke 
                                up today in no pain at ALL!! MASSAGE IS GOOD!” 
                                <br/><i className="reviewer-name">Sheila</i>
                            </p>
                        </Row>
                        <Row lg={1}>
                            <p className="review-text">
                                "It is a great honor to recommend Daniel Flowerdew as a gifted massage 
                                therapist. His intuitive guidance and specialized skills and knowledge give 
                                quality results of relaxation, regeneration and healing. Thank you Daniel.” 
                                <br/><i className="reviewer-name">Andrea Bell</i>
                            </p>
                        </Row>
                    </Col>
                    <Col className="review-col">
                        <p className="review-text">
                            "As someone who does not like to be touched I have to say Daniel has been the 
                            best MT I have ever experienced! I was having a lot of emotional and physical 
                            pain that presents in my muscles and I knew I needed to get some help. I am very 
                            conservative when it comes to seeking medical attention so I decided to give 
                            Daniel and massage therapy a try first. I am so grateful I did because Daniel has 
                            helped me so much with both the emotional and physical pain. He has a very calm 
                            and healing, judgement free presence and magical healing hands that just know where 
                            I need work done. I try to see him once a month at least and feel more healed with 
                            every visit! I highly recommend him!" 
                            <br/><i className="reviewer-name">Maggie Wood</i>
                        </p>
                    </Col>
                    
                </Row>
                <Row xs={1} sm={1} lg={2} className="review-row">                    
                    <Col className="review-col">
                        <p className="review-text">
                            "I've had many massages through the years and usually try to do them once a 
                            month. As a nurse, I'm not only picky about how it is done, but also the way 
                            patients are treated. Daniel far exceeds in both areas. You not only leave 
                            feeling better physically, but mentally relaxed and recharged as well. He 
                            actually helped an area that I've been struggling with for years and has brought 
                            me a ton of relief. Thank you for taking the time to get to know him. You won't 
                            be disappointed and you will see what I'm talking about. I have my own business 
                            and have actually brought him in to serve my clients, which had outstanding 
                            results as well" 
                            <br/><i className="reviewer-name">Brenda Wadsworth, LPN</i>
                        </p>    
                    </Col>
                    <Col className="review-col">
                        <p className="review-text">
                            "As a hairdresser, my arms wrists and hands are always tight and in pain. Daniel 
                            knew exactly how to stretch them out and get me back to tip top shape! I am so 
                            appreciative for his passion and talent" 
                            <br/><i className="reviewer-name">Jeannie Pinel</i>
                        </p>
                    </Col>
                </Row>
                
            </Container>
        </Jumbotron>
    </div>
  );
}

export default Reviews;