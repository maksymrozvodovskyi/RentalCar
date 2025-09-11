import { createSlice } from "@reduxjs/toolkit";
import { getBrands, getCarById, getCars } from "./operations";

const initialState = {
  cars: [],
  currentCar: null,
  brands: [],
  prices: [],
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
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      };
    },
    resetCars(state) {
      state.cars = [];
      state.page = 1;
      state.total = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.cars = [];
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload.cars;
        state.total = action.payload.totalCars;
        state.page = action.payload.page;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      })
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetFilters, resetCars } = carsSlice.actions;
export default carsSlice.reducer;
