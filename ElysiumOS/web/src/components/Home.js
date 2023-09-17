
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1>Welcome to Elysium OS</h1>
      <p>Your personalized AI assistant experience</p>
      <div>
        <Link to="/assistant">
          <Button variant="primary" size="lg" className="mr-2">Meet Your Assistant</Button>
        </Link>
        <Link to="/customization">
          <Button variant="secondary" size="lg">Customize Your Assistant</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
