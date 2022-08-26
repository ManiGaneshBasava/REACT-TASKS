import { Reducer } from './Reducer';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import localStorage from 'redux-persist/es/storage';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  // Storage :localStorage,
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);