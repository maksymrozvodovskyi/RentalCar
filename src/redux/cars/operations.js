import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async ({ page = 1, limit = 12, brand, price, minMil, maxMil }, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", {
        params: {
          page,
          limit,
          brand,
          rentalPrice: price,
          minMil,
          maxMil,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "cars/getCarById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBrands = createAsyncThunk(
  "cars/getBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/brands");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
