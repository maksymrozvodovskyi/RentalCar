import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCars: [],
};

const favoriteCarsSlice = createSlice({
  name: "favoriteCars",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const car = action.payload;
      const exists = state.favoriteCars.find((item) => item.id === car.id);

      if (exists) {
        state.favoriteCars = state.favoriteCars.filter(
          (item) => item.id !== car.id
        );
      } else {
        state.favoriteCars.push(car);
      }
    },
  },
});

export const { toggleFavorite } = favoriteCarsSlice.actions;
export default favoriteCarsSlice.reducer;
