import React from 'react';
import {Table} from "react-bootstrap";

const Orders = (props) => {
    const {username,name,_id,adress,city,phone,price,img,email}=props.trip;
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Trip Name</th>
                    <th>Trip Image</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Phone</th>
                    <th>Adress</th>

                    <th>Price</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{_id}</td>
                    <td>{name}</td>
                    <td><img src={img} className="w-25"/></td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{adress}</td>
                    <td>{price}</td>

                </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default Orders;