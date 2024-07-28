import { getFullYear } from './utils';

test('returns the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});


import { getFootercopy } from './utils';

test('returns the correct footer for index page', () => {
  const result = getFootercopy(true);
  expect(result).toBe('Holberton School');
});

test('returns the correct footer for non-index page', () => {
  const result = getFootercopy(false);
  expect(result).toBe('Holberton School main dashboard');
});

import { getLatestNotification } from './utils';

test('getLatestNotification returns the correct string', () => {
  const expectedOutput = '<strong>Urgent requirement</strong> - complete by EOD';
  const actualOutput = getLatestNotification();
  expect(actualOutput).toBe(expectedOutput);
});
