import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
//import Visualizer from './components/sub-components/Visualizer';
//import SampleWeather from './components/main-music-components/SampleWeather';
//import ClassVisualizerComponent from './components/sub-components/ClassVisualizerComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

