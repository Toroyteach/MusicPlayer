import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HomeAdmin from '../src/components/backend/HomeAdmin.js'
import TestHome from './TestHome.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <HomeAdmin/>
      </BrowserRouter>
  </React.StrictMode>
);

