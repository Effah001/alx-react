import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notis from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Notis />
        <App />
    </React.StrictMode>
);
