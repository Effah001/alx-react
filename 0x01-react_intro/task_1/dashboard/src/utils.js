export function getFullYear() {
  return new Date().getFullYear();
}

export function getFootercopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
}
