import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import Home from './components/Home';
//import Visualizer from './components/sub-components/Visualizer';
//import SampleWeather from './components/main-music-components/SampleWeather';
//import ClassVisualizerComponent from './components/sub-components/ClassVisualizerComponent';
import HomeAdmin from '../src/components/admin/HomeAdmin.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <HomeAdmin/>
      </BrowserRouter>
  </React.StrictMode>
);

