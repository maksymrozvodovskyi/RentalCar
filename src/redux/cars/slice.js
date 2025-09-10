import { createSlice } from "@reduxjs/toolkit";
import { getCarById } from "./operations";

const initialState = {
  cars: [],
  currentCar: null,
  brands: [],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
  page: 1,
  total: 0,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCar = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
