import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

const PlaceOrder = () => {

    const nameRef=useRef();
    const emailRef=useRef();
    const adressREf=useRef();
    const cityRef=useRef();
    const phoneRef=useRef();


    const {user}=UseAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const{tripid}=useParams();
    const [placeorder,setplaceOrder]=useState();

    useEffect(()=>{
        fetch(`https://desolate-thicket-49605.herokuapp.com/trips/${tripid}`)
            .then(res=>res.json())
            .then(data=>setplaceOrder(data));
    },[])
    const{name,price,description,img,_id,days}=placeorder || {};



    //booking trip and sending data to server

    const handleBookTrip = e => {
        const username=nameRef.current.value;
        const email=emailRef.current.value;
        const city=cityRef.current.value;
        const adress=adressREf.current.value;
        const phone=phoneRef.current.value;

        const booktrip={username,email,city,adress,phone,_id,name,img,price};


        fetch('https://desolate-thicket-49605.herokuapp.com/booktrip', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booktrip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully trip Booked.')
                    console.log(booktrip);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h1 className="text-center mt-3">Book Trip</h1>

            <Row className="container m-4">
                <Col lg={6} md={6} sm={12}>

                    <h6>User Name: {user.displayName}</h6>
                    <h6>User Email: {user.email}</h6>
                    <h5>Trip Id: {_id}</h5>
                    <hr/>
                    <div className="d-flex text-center"><img src={img} className="w-25" />
                    <h6 className="ms-3">TripName:{name}</h6>
                        <h6 className="ms-5">Price:{price}</h6>
                        <h6 className="ms-5">Days:{days}</h6>
                    </div>

                </Col>
                <Col lg={6} md={6} sm={12}>

                    <Form onSubmit={handleBookTrip}>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">

                            <Form.Control type="text" defaultValue={user.displayName} ref={nameRef} required/>

                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">

                            <Form.Control type="text" defaultValue={user.email} ref={emailRef} required/>

                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter city" ref={cityRef} required/>

                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter adress" ref={adressREf} required/>

                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter phone" ref={phoneRef} required/>

                        </Form.Group>




                        <Button variant="primary" type="submit">
                            Book Trip
                        </Button>
                    </Form>



                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrder;