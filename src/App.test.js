import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});


test('find world in the document', () => {
  const renderResponse = render(<App />);

  const worldElement = renderResponse.getByText(/world/i);
  expect(worldElement).toBeInTheDocument();
});


test('find world in the document', () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByPlaceholderText(/name here/i);
  expect(worldElement).toBeInTheDocument();
});