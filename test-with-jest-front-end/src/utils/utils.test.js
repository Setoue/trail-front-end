test('Should return the balance value updated with a yield', () => {
  const calculeYield = jest.fn((balance) => balance + balance * 0.005);

  const balance = 100;

  const newBalance = calculeYield(balance);

  expect(newBalance).toBe(100.5);
  expect(calculeYield).toBeCalled();
  expect(calculeYield).toHaveBeenCalledWith(balance);
});
