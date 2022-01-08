import React from 'react';
import {Row,Col} from "react-bootstrap";
import { FaGlobeAmericas ,FaTaxi,FaWineGlassAlt,FaLifeRing,FaLeaf,FaEye} from "react-icons/fa";
import './service.css';
const Services = () => {
    return (
        <div className="text-center container" data-aos="zoom-in">
            <h2>Our Services</h2>
            <p>Great. Safe. Free.</p>

            <Row>
                <Col lg={4} md ={4} sm={6}>
                    <div  className="float-start flex-row"><FaGlobeAmericas className="icon"/>  Different Tours</div>
                    <br/>
                    <br/>

                    <p className="text-start ms-4">Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady.
                    </p>

                </Col>
                <Col lg={4} md ={4} sm={6}>
                    <div  className="float-start flex-row"><FaTaxi className="icon"/>  Taxi Service</div>
                    <br/>
                    <br/>

                    <p className="text-start ms-4">Free taxi services from airport to your hotel</p>

                </Col>
                <Col lg={4} md ={4} sm={6}>
                    <div  className="float-start flex-row"><FaWineGlassAlt className="icon"/>  Bar Included</div>
                    <br/>
                    <br/>

                    <p className="text-start ms-4">High quality drinks and wines and speacial reservation four guests
                    </p>

                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg={4} md ={4} sm={6}>
                    <div  className="float-start flex-row"><FaLifeRing className="icon"/>  Discount System
                    </div>
                    <br/>
                    <br/>

                    <p className="text-start ms-4">We offer the best price and discount in the country
                    </p>

                </Col>
                <Col lg={4} md ={4} sm={6}>
                    <div  className="float-start flex-row"><FaLeaf className="icon"/>   Professional Staff</div>
                    <br/>
                    <br/>

                    <p className="text-start ms-4">We have and best well trained hotel staffs all around the country</p>

                </Col>
                <Col lg={4} md ={4} sm={6}>
                    <div  className="float-start flex-row"><FaEye className="icon"/>   Parking 24/7
                    </div>
                    <br/>
                    <br/>

                    <p className="text-start ms-4">24/7 parking facilities for our customer at free of coast
                    </p>

                </Col>
            </Row>
        </div>
    );
};

export default Services;