import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns the correct sring', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('the returned string for geetLastestNotificatin', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
