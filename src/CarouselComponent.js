import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { getRandomImage } from './imageService';

function CarouselComponent() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imgs = await Promise.all([getRandomImage(), getRandomImage(), getRandomImage()]);
      setImages(imgs);
    };
    fetchImages();
  }, []);

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} alt={`slide ${index}`} className="d-block w-100" />
          <Carousel.Caption>
            <h3>Image {index + 1}</h3>
            <p>Short bio for image {index + 1}.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
