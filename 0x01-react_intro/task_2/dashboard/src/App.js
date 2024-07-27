import React from 'react';
import './App.css';
import holberton from './holberton.jpg';
import { getFullYear, getFootercopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" className="App-E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" className="App-password" />
          </div>
          <button type="submit">OK</button>
        </form>
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFootercopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;