import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  currentCar: null,
  filters: {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
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
