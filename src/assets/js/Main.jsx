import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import configureStore from './store';

import '../styles/main.scss';
import App from './App';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
  ;
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
