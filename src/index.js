import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TailwindCSS file
import 'tailwindcss/dist/base.min.css'; // You can use your own tailwindcss file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
