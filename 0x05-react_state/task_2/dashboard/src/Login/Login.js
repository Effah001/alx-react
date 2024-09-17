import React, { useContext, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext'; // Import AppContext

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
  const { logIn } = useContext(AppContext); // Use context to get logIn function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (enableSubmit) {
      logIn(email, password); // Pass email and password to logIn
    }
  }

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    checkSubmit(newEmail, password);
  }

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkSubmit(email, newPassword);
  }

  const checkSubmit = (emailValue, passwordValue) => {
    setEnableSubmit(emailValue.length > 0 && passwordValue.length > 0);
  }

  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit} className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="Email" className={css(styles.label)}>Email:</label>
          <input 
            type="text" 
            id="Email" 
            name="Email" 
            value={email} 
            onChange={handleChangeEmail}
            className={css(styles.input)} 
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={handleChangePassword}
            className={css(styles.input)} 
          />
        </div>
        <input 
          type="submit" 
          value="OK" 
          className={css(styles.button)} 
          disabled={!enableSubmit}
        />
      </form>
    </div>
  );
}

export default Login;