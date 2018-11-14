import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  if (window) {
    window._store = store;
  }

  store.subscribe(() => {
    store.getState();
  });

  return store;
};
