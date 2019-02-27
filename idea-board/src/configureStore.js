import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    // Allow the store to work with the Redux DevTools Chrome Extension:
    // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  return store;
}
