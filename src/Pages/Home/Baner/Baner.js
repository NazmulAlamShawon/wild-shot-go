import React from 'react';
import { Carousel } from 'react-bootstrap';

const Baner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Wild Adventure</h3>
      <p>A Wild Lover capture a wild life story</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/248241/pexels-photo-248241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Wild World</h3>
      <p>Wild Love is the most tourist spot in the world</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1130434/pexels-photo-1130434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Wild Click</h3>
      <p>Every click tell's every wild life story</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Baner;