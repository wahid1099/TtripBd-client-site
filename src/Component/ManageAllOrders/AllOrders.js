import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const AllOrders = (props) => {
    const{_id,name,img,city,phone,price,email,username}=props.allorder || {};

//
    // DELETE A TRIP
    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://desolate-thicket-49605.herokuapp.com/booktrip/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                    }
                });
        }
    }


    return (
        <div>
            <Row>
                <Col lg={2} md={6}>{_id} <hr/></Col>
                <Col lg={2} md={6}>{name} <hr/></Col>
                <Col lg={2} md={6}>{price}<hr/></Col>
                <Col lg={2} md={6}>{username}<hr/></Col>
                <Col lg={2} md={6}>{city} <hr/></Col>
                <Col lg={1} md={6}>{phone} <hr/></Col>
                <Col lg={1} md={6}><Button variant="danger" onClick={() => handleDeleteUser(_id)}>Delete</Button><hr/></Col>
                </Row>
            
        </div>
    );
};

export default AllOrders;