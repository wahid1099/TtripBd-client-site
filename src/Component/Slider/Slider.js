import React from 'react';
import {Carousel} from "react-bootstrap";
import './slider.css';

import sylet from '../../images/sylet.jpg';
const Slider = () => {
    return (
        <div className="pt-5" data-aos="zoom-in">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block sliderimage mx-auto img-fluid"
                        src="https://i.ytimg.com/vi/gYlxw1mbOrE/maxresdefault.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 >Cox Bazar</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderimage mx-auto img-fluid"
                        src="https://avijatrik.org/wp-content/uploads/2019/06/28052066210_75de6a9fd5_o-870x555.jpg "
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Sajek Valley</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderimage mx-auto img-fluid"
                        src="https://www.travelmate.com.bd/wp-content/uploads/2021/02/Golden-Temple-Bandarban.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Bandorban</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderimage mx-auto img-fluid"
                        src={sylet}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Shylet</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;