import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {},
});

export default carsSlice.reducer;
