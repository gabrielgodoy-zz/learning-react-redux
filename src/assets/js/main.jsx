import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
