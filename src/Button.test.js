import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Test Button" />);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
});