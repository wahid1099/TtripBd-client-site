import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Trip = (props) => {
    const{name,price,description,img,_id,days}=props.trip || {};
    return (
        <div>
            <Col>
                <Card className="border-1">
                    <Card.Img variant="top" src={img} className="img-fluid "/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-start text-black-50">
                            {description.slice(0,200)}
                            <br/>
                           <a> Read More.....</a>

                            <h5 className="text-success">Duration: {days}</h5>
                            <p className="text-black">Cost : {price} BDT</p>
                        </Card.Text>
                        <Link to={`/placeorder/${_id}`}><Button variant="primary">Book Trip</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Trip;