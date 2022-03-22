import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';

import './index.css';
import App from './App';
import { store } from './state';

ReactModal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
