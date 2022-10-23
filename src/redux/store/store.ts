import {configureStore} from '@reduxjs/toolkit';

import {RootState, rootReducer} from '../features';
import {persistStore, persistReducer} from 'redux-persist';
import {reduxStorage} from '../../utils/storage';

const middlewares: any[] = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer: any = persistReducer(persistConfig, rootReducer);

export default () => {
  let store: any = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(middlewares),
  });
  let persistor: any = persistStore(store);
  return {store, persistor};
};
