import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../redux/cars/slice";
import favoritesCarsReducer from "../redux/favoritesCars/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favoritesCars: favoritesCarsReducer,
  },
});
