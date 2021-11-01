import React from 'react';
import {Row,Col,Card} from "react-bootstrap";
import img1 from '../../images/testi-1.jpg';
import img2 from '../../images/testi-2.jpg';
import img3 from '../../images/testi-3.jpg';
import './review.css';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Happy Clients Says</h2>
            <Row xs={1} md={3} lg={3} className="g-4">

                <Col>
                    <Card className="text-center mb-5 mt-5 border-0">

                        <Card.Body>

                            <Card.Text>
                                <p>Trip was well managed .hotel was just good..Do not expect luxury . Food was passable.Be more vigilant about booking with travel agents..Clarify each and every inclusion before making payments to ...</p>
                            </Card.Text>
                            <Card.Title>MD WAHID</Card.Title>
                            <div>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>

                            </div>

                            <Card.Img variant="top" src={img1} className="reviewimg img-fluid mx-auto mt-2" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center mb-5 mt-5 border-0">

                        <Card.Body>

                            <Card.Text>
                                <p>Thanks Royal Luxury & specially Amit for your personal touch and always ready to support attitude to make our Nepal trip so memorable....its an beautiful and amazing experience with some common ...</p>
                            </Card.Text>
                            <Card.Title>MD SAJJAD</Card.Title>
                            <div>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>

                            </div>

                            <Card.Img variant="top" src={img2} className="reviewimg img-fluid mx-auto mt-2" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center mb-5 mt-5 border-0">

                        <Card.Body>

                            <Card.Text>
                                <p>Excellent tour organised by mr Rupam Double decker living root bridge was the best place to see nature..</p>
                            </Card.Text>
                            <Card.Title>JHANKAR MAHBUB</Card.Title>
                            <div>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>

                            <Card.Img variant="top" src={img3} className="reviewimg img-fluid mx-auto mt-2" />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            
        </div>
    );
};

export default Reviews;