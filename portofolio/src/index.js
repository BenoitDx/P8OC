import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom'; // Importez createRoot depuis react-dom

import App from './App';

const root = document.getElementById('root');

// Utilisez createRoot au lieu de ReactDOM.render
const reactRoot = createRoot(root);
reactRoot.render(
  <Router>
    <App />
  </Router>
);