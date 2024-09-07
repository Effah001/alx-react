import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    marginTop: '2rem',
    paddingLeft: '5rem',
    paddingBottom: '18rem',

    // responsive behavior
    '@media (max-width: 1024px)': {
      paddingLeft: '3rem',
      paddingBottom: '15rem',
    },
    '@media (max-width: 900px)': {
      paddingLeft: '2rem',
      paddingBottom: '10rem',
    }
  },
  form: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',

    '@media (max-width: 1024px)': {
      flexDirection: 'row',
      gap: '1rem',
    },

    '@media (max-width: 900px)': {
      flexDirection: 'column',
      gap: '0.5rem',
    }
  },

  input: {
    width: '100%',
    padding: '2px',
    boxSizing: 'border-box',
    '@media (max-width: 900px)': {
      width: '200px',
    }
  }
});

function Login() {
    return (
        <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <form className={css(styles.form)}>
                <label htmlFor="Email">Email: </label>
                <input type="text" id="Email" name="Email" className={css(styles.input)} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password"  className={css(styles.input)}/>
                <button type="submit">OK</button>
            </form>
        </div>
    );
}

export default Login;