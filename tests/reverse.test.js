const reverseObject = require('../code/reverse')

it('reverses a string', () => {
  expect(reverseObject('ivana')).toBe('anavi');
})

it('stringifies and reverses a number', () => {
  expect(reverseObject(123)).toBe('321');
})