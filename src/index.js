import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { CookiesProvider } from "react-cookie";

import MusicApplication from './MusicApplication.js';

import { AuthProvider } from './subSrc/services/authContext/AuthProvider.js';

import MusicContextState from './subSrc/services/music/MusicContextState.js';

import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <BrowserRouter>
          <AuthProvider>
            <MusicApplication />
          </AuthProvider>
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

