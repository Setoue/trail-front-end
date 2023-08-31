import { render, screen } from '@testing-library/react';
import Transacoes from './index';
import estilos from '../Extrato.module.css';

describe('should render the same componentes', () => {
  test('with props updated', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 40,
    };

    const { rerender } = render(
      <Transacoes estilos={estilos} transacao={transacao} />,
    );

    const typeTransaction = screen.getByTestId('tipoTransacao');
    const valueTransaction = screen.getByTestId('valorTransacao');

    expect(typeTransaction).toHaveTextContent('Depósito');
    expect(valueTransaction).toHaveTextContent('R$ 40');

    const transacaoNova = {
      transacao: 'Transferência',
      valor: 90,
    };

    rerender(<Transacoes estilos={estilos} transacao={transacaoNova} />);

    const newTypeTransaction = screen.getByTestId('tipoTransacao');
    const newValueTransaction = screen.getByTestId('valorTransacao');

    expect(newTypeTransaction).toHaveTextContent('Transferência');
    expect(newValueTransaction).toHaveTextContent('- R$ 90');
  });
});
