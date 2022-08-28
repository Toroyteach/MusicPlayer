import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { CookiesProvider } from "react-cookie";

import MusicApplication from './MusicApplication.js';

import { AuthProvider } from './subSrc/services/authContext/AuthProvider.js';

import MusicContextState from './subSrc/services/music/MusicContextState.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <AuthProvider>
          <MusicContextState>
            <MusicApplication/>
          </MusicContextState>
        </AuthProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

