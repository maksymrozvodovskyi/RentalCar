import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../redux/cars/slice";
import favoritesCarsReducer from "../redux/favoritesCars/slice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favoriteCars",
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesCarsReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favoriteCars: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
