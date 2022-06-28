import {sum, reverseNumber, reverseAsync} from '../src/sum';

test('Sum test', () => {
  expect(sum(2, 2)).toBe(4);
});

test('Revers number', () => {
  expect(reverseNumber(12345)).toBe(54321);
  expect(reverseNumber(-123)).toBe(-321);
  expect(reverseNumber(75412)).toBe(21457);
  expect(reverseNumber(-74584)).toBe(-48547);
});

test('Revers number', () => {
  expect(reverseAsync(12345)).resolves.toBe(54321);

  //   expect(await reverseAsync(-123)).toBe(-321);
  //   expect(await reverseAsync(75412)).toBe(21457);
  //   expect(await reverseAsync(-74584)).toBe(-48547);
});
