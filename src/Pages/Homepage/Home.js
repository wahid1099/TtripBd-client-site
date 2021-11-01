import React from 'react';
import Slider from "../../Component/Slider/Slider";
import Services from "../../Component/Services/Services";
import About from "../../Component/About/About";
import Reviews from "../../Component/Reviews/Reviews";
import Trips from "../../Component/Trips/Trips";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Trips></Trips>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;