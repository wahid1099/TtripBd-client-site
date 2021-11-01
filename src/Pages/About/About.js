import React from 'react';
import Services from "../../Component/Services/Services";
import abiutbg from '../../images/airportabout-.jpg';
const About = () => {
    return (
        <div>
            <h1 className="text-center mt-5">About Us</h1>
            <h3 className="text-center">WHY WE ARE THE BEST</h3>
<div> <img src={abiutbg} className="img-fluid w-100 h-50"/></div>
            <Services></Services>
        </div>
    );
};

export default About;