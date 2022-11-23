import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Header';
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header/>
    <div className='container'>
    <App />
    </div>
    </>
  </React.StrictMode>
);

