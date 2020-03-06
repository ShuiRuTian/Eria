// Initial welcome page. Delete the following line to remove it.
import React from 'react';
import { render } from 'react-dom';
import App from '../app';
// import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
// import Root from './containers/Root';
// import { configureStore, history } from './store/configureStore';
// import './app.global.css';

// const store = configureStore();

document.addEventListener('DOMContentLoaded', () => render(
  <>
    <div>Hello</div>
  </>,
  document.getElementById('app'),
));
