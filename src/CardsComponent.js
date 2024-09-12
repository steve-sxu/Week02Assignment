import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { getRandomImage } from './imageService';

function CardsComponent() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imgs = await Promise.all([getRandomImage(), getRandomImage(), getRandomImage()]);
      setImages(imgs);
    };
    fetchImages();
  }, []);

  return (
    <Row>
      {images.map((image, index) => (
        <Col key={index} sm={4}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Card {index + 1}</Card.Title>
              <Card.Text>Short bio for card {index + 1}.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardsComponent;
