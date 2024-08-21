import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the current year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns correct string for true argument', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns correct string for false argument', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns correct HTML string', () => {
  const expectedHTML = "<strong>Urgent requirement</strong> - complete by EOD";
  expect(getLatestNotification()).toBe(expectedHTML);
});
