/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main.css';
import MainRoutes from './routes/MainRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <div className="view-on-larger-screen">
        <h1>Please view on a larger desktop screen</h1>
      </div>
      <div className="show-for-desktop-screen">
        <MainRoutes />
      </div>
    </Provider>
  </React.StrictMode>
);
