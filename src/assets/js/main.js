import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('app')); // eslint-disable-line

if (module.hot) {
  module.hot.accept();
}
