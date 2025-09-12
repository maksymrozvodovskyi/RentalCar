import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../redux/cars/slice";
import favoritesCarsReducer from "../redux/favoritesCars/slice";
import { persistReducer, persistStore } from "redux-persist";
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
});

export const persistor = persistStore(store);
