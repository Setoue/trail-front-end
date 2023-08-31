import { render, screen } from '@testing-library/react';
import Extrato from './index';

describe('Should render a transaction list', () => {
  test('in the document', () => {
    const transactions = [{ transaction: 'Deposíto', value: 100 }];
    render(<Extrato transacoes={transactions} />);

    const list = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
  });
});
