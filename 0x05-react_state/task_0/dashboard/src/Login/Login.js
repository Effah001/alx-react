import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    marginTop: '2rem',
    paddingLeft: '5rem',
    paddingBottom: '18rem',

    '@media (max-width: 1024px)': {
      paddingLeft: '3rem',
      paddingBottom: '15rem',
    },
    '@media (max-width: 900px)': {
      paddingLeft: '2rem',
      paddingBottom: '10rem',
      marginTop: '1rem',
    }
  },
  form: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',

    '@media (max-width: 900px)': {
      flexDirection: 'column',
      gap: '1rem',
    }
  },
  
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',

    '@media (max-width: 900px)': {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      width: '50%'
    }
  },
 
  button: {
    '@media (max-width: 900px)': {
      width: '10%',
    }
  }
});

function Login() {
    return (
        <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <form className={css(styles.form)}>
                <div className={css(styles.inputGroup)}>
                    <label htmlFor="Email" className={css(styles.label)}>Email:</label>
                    <input type="text" id="Email" name="Email" className={css(styles.input)} />
                </div>
                <div className={css(styles.inputGroup)}>
                    <label htmlFor="password" className={css(styles.label)}>Password:</label>
                    <input type="password" id="password" name="password" className={css(styles.input)} />
                </div>
                <button type="submit" className={css(styles.button)}>OK</button>
            </form>
        </div>
    );
}

export default Login;