import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');

const AppTree = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Use hydrate for react-snap pre-rendered pages, render for normal loads
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(AppTree, rootElement);
} else {
  ReactDOM.render(AppTree, rootElement);
}

reportWebVitals();
