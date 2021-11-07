import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";


const UserInformation = ({img,price,name,_id}) => {

    const {user}=UseAuth();
    
    
    const nameRef=useRef();
const emailRef=useRef();
const adressREf=useRef();
const cityRef=useRef();
const phoneRef=useRef();



const handleBookTrip = e => {
    const username=nameRef.current.value;
    const email=emailRef.current.value;
    const city=cityRef.current.value;
    const adress=adressREf.current.value;
    const phone=phoneRef.current.value;

    const booktrip={username,img,city,adress,phone,price,email,name}
  console.log(booktrip);
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
                alert('Successfully Booked the New Trip.')
                e.target.reset();
            }
        })
    e.preventDefault();
}
    return (
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
    );
};

export default UserInformation;