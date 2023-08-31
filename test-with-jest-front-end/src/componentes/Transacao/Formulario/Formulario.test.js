import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '.';

test('Should render input field', () => {
  render(<Formulario />);

  const inputField = screen.getByPlaceholderText('Digite um valor');

  expect(inputField).toBeInTheDocument();
});

test('Should render a input field with a type number', () => {
  render(<Formulario />);

  const typeInput = screen.getByPlaceholderText('Digite um valor');
  expect(typeInput).toHaveAttribute('type', 'number');
});

test('Should render a input field that can to be filled', () => {
  render(<Formulario />);

  const typeInput = screen.getByPlaceholderText('Digite um valor');
  userEvent.type(typeInput, '50');
  expect(typeInput).toHaveValue(50);
});
