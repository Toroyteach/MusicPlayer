import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import GuestPlayer from './components/guest/GuestPlayer';
import UsersPlayer from './components/users/UsersPlayer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UsersPlayer />
  </React.StrictMode>
);

