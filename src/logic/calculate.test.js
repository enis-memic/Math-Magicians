import calculate from './calculate';

it('Restart calculation', () => {
  const result = calculate({ total: null, next: null, operation: null }, 'AC');
  expect(result).toStrictEqual({ total: null, next: null, operation: null });
});

it('Adding two numbers calculation', () => {
  const sub = {
    total: '150',
    next: '10',
    operation: '+',
  };
  const calculation = calculate(sub, '=');
  expect(calculation).toStrictEqual({
    total: '160',
    next: null,
    operation: null,
  });
});
it(' Subtract two numbers calculation', () => {
  const num = {
    total: '80',
    next: '40',
    operation: '-',
  };
  const numSub = calculate(num, '=');
  expect(numSub).toStrictEqual({
    total: '40',
    next: null,
    operation: null,
  });
});
