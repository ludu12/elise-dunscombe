import { getRandomInt } from '../utils';

test('getRandomInt', () => {
  expect([0, 1, 2, 3, 4, 5].includes(getRandomInt(0, 5))).toEqual(true);
  expect([0, 1, 2, 3, 4, 5].includes(getRandomInt(6, 10))).toEqual(false);
});
