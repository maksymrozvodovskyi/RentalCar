import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCarById = createAsyncThunk(
  "cars/getCarById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
