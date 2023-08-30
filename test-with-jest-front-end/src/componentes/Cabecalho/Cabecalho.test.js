import { render, screen } from '@testing-library/react';
import Cabecalho from './index.jsx';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);
  const nameUser = screen.getByText('Joana Fonseca Gomes');

  expect(nameUser).toBeInTheDocument();
});
