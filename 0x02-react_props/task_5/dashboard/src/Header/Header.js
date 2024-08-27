import HolbertonLogo from '../Holberton_logo.jpg';
import './Header.css';


function Header() {
    return (
        <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="HolbertonLogo" />
        <h1>School dashboard  </h1>
        </header>
    );
}

export default Header;