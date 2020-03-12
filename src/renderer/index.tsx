// Initial welcome page. Delete the following line to remove it.
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../app';
import { configureStore } from './store';
// import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
// import Root from './containers/Root';
// import { configureStore, history } from './store/configureStore';
// import './app.global.css';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => render(
  <Provider store={store}>
    <div>Hello</div>
  </Provider>,
  // this element whose id is "app" is produced by electron-webpack
  document.getElementById('app'),
));
