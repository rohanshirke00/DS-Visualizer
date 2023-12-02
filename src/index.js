import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);