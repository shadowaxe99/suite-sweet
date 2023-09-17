
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    
    // Check if the main app container is rendered
    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });

  test('renders navigation bar', () => {
    render(<App />);
    
    // Check if the navigation bar is rendered
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
  });

  test('renders home page on initial render', () => {
    render(<App />);
    
    // Check if the home page is rendered on initial render
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
