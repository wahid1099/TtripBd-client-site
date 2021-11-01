import React from 'react';
import aboutbg from '../../images/airportabout-.jpg';
import {Button, Col, Row} from "react-bootstrap";

const About = () => {
    return (
        <div >
            <Row className="mt-5">
                <Col lg={6} md={6} sm={12}>
                    <img src={aboutbg} className="img-fluid"/>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-5">
                    <h3>We Share Something</h3>
                    <h6>About us</h6>
                    <h5>THE MATE WAS A MIGHTY SAILIN MAN THE SKIPPER BRAVE AND SURE. FIVE PASSEGERS SET SAIL.
                    </h5>
                    <p className=" mt-5">The Love Boat soon will be making another run. The Love Boat promises something for everyone. who wabusy with three boys of his own. Sunny Days sweepin' the clouds away. On my way to where the air is sweet. Can you tell me how to get how to get to Sesame Street The mate a mighty sailin' man the Skipper brave and sure. Five passengers set sail that day for a three hour tour a three hour tour. Till the one day when the lady met this fellow more than a hunch.

                    </p>

                    <Button variant="outline-dark">About More</Button>
                </Col>
            </Row>
            
        </div>
    );
};

export default About;