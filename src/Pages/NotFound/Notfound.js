import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import banner from '../../images/banner_error_404.jpg';
const Notfound = () => {
    return (
        <div className="mx-auto  text-center">
            <h2 className="mt-5">What are You looking for !!</h2>
            <Link to='/home'><Button variant="warning" className="mt-3 w-50">Go Home</Button></Link>
            <img src={banner} className="w-75 p-5 m-4"/>

        </div>

    );
};

export default Notfound;