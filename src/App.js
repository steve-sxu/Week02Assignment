import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselComponent from './CarouselComponent'; // or use CardsComponent

function App() {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>Welcome to Steve's Bootstrap Site</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CarouselComponent />  {/* or use CardsComponent */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
