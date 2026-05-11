
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GLOBAL_CSS } from './theme';

const style = document.createElement('style');
style.textContent = GLOBAL_CSS;
document.head.appendChild(style);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
