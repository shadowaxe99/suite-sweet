
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Elysium OS</h1>
      <p>Your personalized AI assistant experience.</p>
      <Link to="/assistant">
        <Button variant="primary">Launch Assistant</Button>
      </Link>
      <Link to="/customization">
        <Button variant="secondary">Customize Assistant</Button>
      </Link>
    </div>
  );
};

export default Home;
