const calculator = require('../code/calculator');

it('adds two numbers', () => {
expect(calculator.add(2,3)).toBe(5);
})

it('adds two strings', () => {
  expect(calculator.add('2','3')).toBe('23');
})

it('adds string and number', () => {
  expect(calculator.add('2', 3)).toBe('23');
})

it('subtracts two numbers', () => {
  expect(calculator.sub(2,3)).toBe(-1);
})

it('can convert numbers given as strings and subtract them', () => {
  expect(calculator.sub('2','3')).toBe(-1);
})

it('can\'t subtract strings', () => {
  expect(calculator.sub('b','a')).toBe(NaN);
})

it('can\'t subtract number and string', () => {
  expect(calculator.sub( 3,'a')).toBe(NaN);
})

it('multiply two numbers', () => {
  expect(calculator.mul(2,3)).toBe(6);
})

it('can convert numbers given as strings and multiply them', () => {
  expect(calculator.mul('2','3')).toBe(6);
})

it('can\'t multiply strings', () => {
  expect(calculator.mul('b','a')).toBe(NaN);
})

it('can\'t multiply number and string', () => {
  expect(calculator.mul( 3,'a')).toBe(NaN);
})

it('divides two numbers', () => {
  expect(calculator.div(6,3)).toBe(2);
})

it('can\t divide by zero', () => {
  expect(calculator.div(6,0)).toBe(Infinity);
})

it('can convert numbers given as strings and divide them', () => {
  expect(calculator.div('6','3')).toBe(2);
})

it('can\'t divide strings', () => {
  expect(calculator.div('b','a')).toBe(NaN);
})

it('can\'t divide number and string', () => {
  expect(calculator.div( 6,'a')).toBe(NaN);
})