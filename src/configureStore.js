import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = createStore(
    rootReducer,
    isDev 
      ? composeWithDevTools(applyMiddleware(thunkMiddleware))
      : applyMiddleware(thunkMiddleware)
  );

  if (window) {
    window._store = store;
  }

  store.subscribe(() => {
    store.getState();
  });

  return store;
};
