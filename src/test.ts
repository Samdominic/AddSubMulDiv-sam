import { add, sub, mul, div } from '../src/index';
test('My Add', () => {
  expect(add(5, 6)).toBe(11);
});

test('My Sub', () => {
  expect(sub(6, 5)).toBe(1);
});

test('My Mul', () => {
  expect(mul(5, 6)).toBe(30);
});

test('My Div', () => {
  expect(div(6, 2)).toBe(3);
});
