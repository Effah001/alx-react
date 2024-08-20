import HolbertonLogo from './Holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="HolbertonLogo" />
        <h1>School dashboard  </h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      <form>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
            <button type="submit">OK</button>
      </form>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;