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
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFootercopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
