import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <h1 className="text-3xl font-bold text-red-500 underline">
      Hello world!
    </h1>
    <App />
  </React.StrictMode>
);

reportWebVitals();
