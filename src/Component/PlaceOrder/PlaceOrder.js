import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import UserInformation from './UserInformation';

const PlaceOrder = () => {

   


    const {user}=UseAuth();
   // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const{tripid}=useParams();
    const [placeorder,setplaceOrder]=useState();

 

    useEffect(()=>{
        fetch(`https://desolate-thicket-49605.herokuapp.com/trips/${tripid}`)
            .then(res=>res.json())
            .then(data=>setplaceOrder(data));
    },[])
    const{name,price,description,img,_id,days}=placeorder || {};



    //booking trip and sending data to server

  


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

                  <UserInformation
                  
                  img={img}
                  _id={_id}
                  name={name}
                  price={price}
                  ></UserInformation>



                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrder;