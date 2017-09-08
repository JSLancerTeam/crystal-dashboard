import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import './assets/styles/base.scss';
import Main from './pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
