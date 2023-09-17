
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home component', () => {
  render(<App />);
  const homeElement = screen.getByTestId('home');
  expect(homeElement).toBeInTheDocument();
});

test('renders assistant component', () => {
  render(<App />);
  const assistantElement = screen.getByTestId('assistant');
  expect(assistantElement).toBeInTheDocument();
});

test('renders customization component', () => {
  render(<App />);
  const customizationElement = screen.getByTestId('customization');
  expect(customizationElement).toBeInTheDocument();
});
