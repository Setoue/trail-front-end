import { calculaNovoSaldo } from './index';

describe('when i do transaction', () => {
  test('should return the balance value updated with a yield', () => {
    const calculeYield = jest.fn((balance) => balance + balance * 0.005);

    const balance = 100;

    const newBalance = calculeYield(balance);

    expect(newBalance).toBe(100.5);
    expect(calculeYield).toBeCalled();
    expect(calculeYield).toHaveBeenCalledWith(balance);
  });

  test('that is a deposit, the balance should increase', () => {
    const transaction = {
      transacao: 'Depósito',
      valor: 50,
    };

    const newBalance = calculaNovoSaldo(transaction, 100);

    expect(newBalance).toBe(150);
  });

  test('that is a transaction, the balance should decrease', () => {
    const transaction = {
      transacao: 'Transferência',
      valor: 100,
    };

    const balance = calculaNovoSaldo(transaction, 50);

    expect(balance).toBe(-50);
  });
});
