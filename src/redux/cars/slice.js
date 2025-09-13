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
  isLoadingMore: false,
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
    nextPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        if (state.page === 1) {
          state.isLoading = true;
        } else {
          state.isLoadingMore = true;
        }
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.cars = action.payload.cars;
          state.isLoading = false;
        } else {
          state.cars = [...state.cars, ...action.payload.cars];
          state.isLoadingMore = false;
        }
        state.total = action.payload.totalCars;
      })
      .addCase(getCars.rejected, (state, action) => {
        if (state.page === 1) {
          state.isLoading = false;
        } else {
          state.isLoadingMore = false;
        }
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

export const { setFilters, resetFilters, resetCars, nextPage } =
  carsSlice.actions;
export default carsSlice.reducer;
