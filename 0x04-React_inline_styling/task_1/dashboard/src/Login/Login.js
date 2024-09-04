import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    marginTop: '2rem',
    paddingLeft: '5rem',
    paddingBottom: '18rem',
  },
  form: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  },
});

function Login() {
    return (
        <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <form className={css(styles.form)}>
                <label htmlFor="Email">Email: </label>
                <input type="text" id="Email" name="Email" />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" />
                <button type="submit">OK</button>
            </form>
        </div>
    );
}

export default Login;