import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';
import { AppContext } from '../App/AppContext';
import React, { useContext } from 'react';

function Footer() {
    const { user } = useContext(AppContext);

    return (
        <footer className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            {user.isLoggedIn && (
                <p>
                    <a href="/contact">Contact us</a>
                </p>
            )}
        </footer>
    );
}

export default Footer;