import React from 'react';
import {Button, Col, Container, Form, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import { FaFacebook,FaTwitter,FaInstagram,FaPinterest ,FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Container>
                <Row className='pt-4'>
                    <Col lg={4} md={3} sm={6} xs={12}>

                        <h1>TRIPBD</h1>
                        <p className="text-start text-white-50"><small>© 2004-2021ভ্রমণ বিষয়ক বিস্তারিত সকল তথ্য, দেশের সেরা সেরা সব ট্রাভেল এজেন্সী ও গ্রুপের ট্যুর নিয়ে ট্যুর মার্কেট আর বাংলাদেশকে নতুনভাবে উপভোগ করার দারুণ সব সুযোগ নিয়ে ‘এক্সপেরিয়েন্স’। ভ্রমণের অনুপ্রেরণা থেকে আনন্দের সাথে ঘুরে আসা; সবকিছুই আছে ট্রাভেল বাংলাদেশ-এ!

                        </small></p>
                    </Col>
                    <Col lg={2} md={2} sm={6} xs={12}>
                        <h3>Quick Link</h3>
                        <Nav className="flex-column text-decoration-none text-white">
                            <Nav.Link className="text-white-50">About us</Nav.Link>
                            <Nav.Link className="text-white-50">Join us</Nav.Link>
                            <Nav.Link className="text-white-50">TravelBd Studio</Nav.Link>
                            <Nav.Link className="text-white-50">Privacy policy</Nav.Link>






                        </Nav>
                    </Col>
                    <Col lg={2} md={2} sm={6} xs={12}>
                        <h3>Categories</h3>
                        <Nav className="flex-column text-decoration-none text-white">
                            <Nav.Link className="text-white-50">Best Hotel</Nav.Link>
                            <Nav.Link className="text-white-50">Best Packeges</Nav.Link>
                            <Nav.Link className="text-white-50">Couple Tour</Nav.Link>
                            <Nav.Link className="text-white-50">Family Tour</Nav.Link>

                            <Nav.Link className="text-white-50">Best Places</Nav.Link>




                        </Nav>
                    </Col>

                    <Col lg={4} md={4} sm={6} xs={12}>
                        <h2 className="text-start">Subscribe to our Newsletter</h2>
                        <p className="text-white-50 text-start ">Enter your email and receive the latest news,<br/> updates and special offers from us.</p>
                        <Form>
                            <Form.Group className="mb-3 w-75 " controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Your email adress" />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" className="w-75 float-start">Subcribe</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} md={8} xs={12}sm={12}>
                        <p className="text-start">&copy; 2021 Tripbd All Rights Reserved | Devloped by Abdul Wahid.</p>
                    </Col>
                    <Col lg={4} md={4} xs={12}sm={12}>
                        <div className="flex-row ">
                            <Link> <FaFacebook className="me-2 text-decoration-none text-white"/><FaTwitter className="me-2 text-decoration-none text-white"/><FaInstagram className="me-2 text-decoration-none text-white "/><FaPinterest className="me-2 text-decoration-none text-white"/> <FaYoutube className="me-2 text-decoration-none text-white"/>
                            </Link></div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;