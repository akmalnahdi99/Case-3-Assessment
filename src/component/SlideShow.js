import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import pool from '../assets/imgs/pool.jpg';
import transport from '../assets/imgs/transport.jpg';
import restaurant from '../assets/imgs/restaurant.jpg';

export default function SlideShow() {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
            <img
                className=" w-100"
                src={restaurant}
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="w-100"
                src={pool}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className=" w-100"
                src={transport}
                alt="Second slide"
            />
        </Carousel.Item>
    </Carousel>
    )
  };