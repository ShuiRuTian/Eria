// Initial welcome page. Delete the following line to remove it.
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { downloader } from '@src/Downloader';
import { configureStore } from './store';
// import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
// import Root from './containers/Root';
// import { configureStore, history } from './store/configureStore';
// import './app.global.css';

const store = configureStore();
// const disptch = store.dispatch;

downloader.notification('aria2.onBtDownloadComplete', (tmp) => console.log(tmp));
downloader.notification('aria2.onDownloadComplete', (tmp) => console.log(tmp));
downloader.notification('aria2.onDownloadError', (tmp) => console.log(tmp));
downloader.notification('aria2.onDownloadPause', (tmp) => console.log(tmp));
downloader.notification('aria2.onDownloadStart', (tmp) => console.log(tmp));
downloader.notification('aria2.onDownloadStop', (tmp) => console.log(tmp));

document.addEventListener('DOMContentLoaded', () => render(
  <Provider store={store}>
    <div>Hello</div>
  </Provider>,
  // this element whose id is "app" is produced by electron-webpack
  document.getElementById('app'),
));
