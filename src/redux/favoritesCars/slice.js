import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCars: [],
};

const favoriteCarsSlice = createSlice({
  name: "favoritesCars",
  initialState,
  reducers: {},
});

export default favoriteCarsSlice.reducer;
