import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth';
import { contactApi } from './contacts/contactsApi';
import { filter } from './filter/filter-reducer';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filter,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
