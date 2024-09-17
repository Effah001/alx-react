import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import HolbertonLogo from '../Holberton_logo.jpg';
import { AppContext } from '../App/AppContext';

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
  logoutSection: {
    marginTop: '1rem', 
  },
  column: {
    flexDirection: 'column',
  },
});

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.header, user.isLoggedIn && styles.column)}>
        <img src={HolbertonLogo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.title)}>School Dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            <p>Welcome, {user.email || 'Guest'} (<span onClick={logOut} style={{ cursor: 'pointer', color: 'blue' }}>logout</span>)</p>
          </div>
        )}
      </header>
    );
  }
}

export default Header;