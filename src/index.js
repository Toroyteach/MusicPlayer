import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { CookiesProvider } from "react-cookie";

import MusicApplication from './MusicApplication.js';

import { AuthProvider } from './subSrc/services/authContext/AuthProvider.js';

import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from 'react-redux'

import store from './subSrc/services/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        staleTime: 5 * (60 * 1000), // 10 mins
        cacheTime: 15 * (60 * 1000), // 15 mins
      },
    },
  }
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <BrowserRouter>
            <AuthProvider>
              <MusicApplication />
            </AuthProvider>
          </BrowserRouter>
        </CookiesProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

