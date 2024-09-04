import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import HolbertonLogo from '../Holberton_logo.jpg';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5rem',
    color: '#f13e3e',
    marginLeft: '1rem',
  },
  appLogo: {
    height: '25vmin',
    pointerEvents: 'none',
  },
});

const Header = () => (
  <header className={css(styles.header)}>
    <img src={HolbertonLogo} className={css(styles.appLogo)} alt="logo" />
    <h1 className={css(styles.title)}>School Dashboard</h1>
  </header>
);

export default Header;