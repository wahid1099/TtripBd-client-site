import React, {useEffect, useState} from 'react';
import AllOrders from "./AllOrders";
import Orders from "../My Orders/orders";
import {Col, Row} from "react-bootstrap";

const ManageAllorders = () => {
    const [allorder,setAllorders]=useState([]);
    useEffect(()=>{
        fetch('https://desolate-thicket-49605.herokuapp.com/allorder')
            .then(res=>res.json())
            .then(data=>setAllorders(data));
    },[])




    return (
        <div>
            <h1 className="text-center mt-3">All Orders</h1>
            <Row className="m-4">
                <Col lg={2} md={6}>Order Id <hr/></Col>
                <Col lg={2} md={6}>Trip Name <hr/></Col>
                <Col lg={2} md={6}>Trip Price <hr/></Col>
                <Col lg={2} md={6}>User Name <hr/></Col>
                <Col lg={2} md={6}>Adress <hr/></Col>
                <Col lg={1} md={6}>Phone <hr/></Col>
                <Col lg={1} md={6}>Delete Trip <hr/></Col>


            {
                allorder.map(allorder=><AllOrders
                    allorder={allorder}
                    ></AllOrders>



                )
            }
            </Row>
        </div>
    );
};

export default ManageAllorders;