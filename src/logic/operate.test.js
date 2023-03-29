import operate from './operate';

it('Addition of 2 numbers', () => {
  expect(operate(5, 5, '+')).toBe('10');
});
it('Subtraction of 2 numbers', () => {
  expect(operate(5, 5, '-')).toBe('0');
});
it('Multiplication of 2 numbers', () => {
  expect(operate(5, 5, 'x')).toBe('25');
});
it('Division of 2 numbers', () => {
  expect(operate(5, 5, '÷')).toBe('1');
});
it('Do the operation of two numbers', () => {
  expect(operate(8, 5, '%')).toBe('3');
});
