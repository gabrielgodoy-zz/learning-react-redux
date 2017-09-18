import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export default function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  // Suport para extensão do Chrome "Redux dev tools"
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())),
  );
  /* eslint-enable */

  if (module.hot) {
    // Habilita Webpack hot module replacement para reducers
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
