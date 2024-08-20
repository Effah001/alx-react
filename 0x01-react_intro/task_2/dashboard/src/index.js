import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const RootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
RootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);