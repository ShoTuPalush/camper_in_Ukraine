import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { catalogReducer } from './catalog/slice';

// const persistBooksConfig = {
//   key: 'books',
//   storage,
//   whitelist: ['saveBooks'],
// };

// const persistLocalsConfig = {
//   key: 'theme',
//   storage,
//   whitelist: ['theme'],
// };

const rootReducer = combineReducers({
  catalog: catalogReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);
