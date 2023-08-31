import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '.';

describe('Should render input field', () => {
  test('in the document', () => {
    render(<Formulario />);

    const inputField = screen.getByPlaceholderText('Digite um valor');

    expect(inputField).toBeInTheDocument();
  });

  test(' with a type number', () => {
    render(<Formulario />);

    const typeInput = screen.getByPlaceholderText('Digite um valor');
    expect(typeInput).toHaveAttribute('type', 'number');
  });

  test('that can to be filled', () => {
    render(<Formulario />);

    const typeInput = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(typeInput, '50');
    expect(typeInput).toHaveValue(50);
  });
});

describe('Shoud call a event onSubmit ', () => {
  test('when to click in transaction done', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
