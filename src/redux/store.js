import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
import userReducer from "./userRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key : 'user',
  storage,
  blacklist : ['registerError', 'logoutError', 'error', 'isFetching'] // Now, properties cannot be persisted.
}

const cartPersistConfig = {
  key : 'cart',
  storage,
}

// !!Deprecated
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// !!Deprecated
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  cart: persistReducer(cartPersistConfig, cartReducer)
});

// Local Storage persist:root ( userData, cartData ) !!!Deprecated
const persistedReducer = persistReducer(persistConfig, rootReducer);

const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);


export const store = configureStore({
  reducer: {
    user : userPersistedReducer,
    cart : cartPersistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
