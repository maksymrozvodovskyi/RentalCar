import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../redux/cars/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    // favoritesCars: favoritesCarsReducer,
  },
});
