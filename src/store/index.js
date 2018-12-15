import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { ENV, DEVTOOLS } from 'react-native-dotenv';

import reducers from 'reducers';

let temporaryStore = null;

if (ENV === 'dev' && DEVTOOLS === true) {
  const { composeWithDevTools } = require('remote-redux-devtools');
  temporaryStore = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
} else temporaryStore = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const store = temporaryStore;

const persistor = persistStore(store);

export { store, persistor };
