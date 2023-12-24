import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import editSlice from './features/editSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    editModal: editSlice
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);