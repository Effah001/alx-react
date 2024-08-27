import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';


function Footer() {
    return (
        <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </footer>
    );
}

export default Footer;