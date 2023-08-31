import { render, screen } from '@testing-library/react';
import { useEvent } from '@testing-library/user-event';
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
