import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const firstName = screen.getByTestId("first-name")
  const lastName = screen.getByTestId("last-name")
  const email = screen.getByTestId("email-address")
  const password = screen.getByTestId("password")
  expect(firstName).toBeInTheDocument()
  expect(lastName).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(password).toBeInTheDocument()
});

//The input field should have valid phone value
test('pass valid input', () => {
  render(<App />);
  const email = screen.getByTestId("email-address")
  userEvent.type(email, "example@example.com");
  
  expect(screen.getByTestId("email-address")).toHaveValue("example@example.com");
});
