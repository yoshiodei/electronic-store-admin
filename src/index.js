/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main.css';
import MainRoutes from './routes/MainRoutes';
// import { Provider } from 'react-redux';
// import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store} > */}
      <MainRoutes />
    {/* </Provider> */}
  </React.StrictMode>
);
