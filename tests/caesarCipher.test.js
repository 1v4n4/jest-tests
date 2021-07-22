const caesarCipher = require('../code/caesarCipher');

it('returns string if shift is zero', () => {
  expect(caesarCipher('1v4n4', 0)).toBe('1v4n4');
})

it('changes string acording to a shift', () => {
  expect(caesarCipher('1v4n4', 4)).toBe('1z4r4');
})

it('changes string acording to a shift', () => {
  expect(caesarCipher('1v4n4', -3)).toBe('1s4k4');
})