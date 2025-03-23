import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountries } from "../../api/countryService";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (url, { rejectWithValue }) => {
    try {
      const data = await axios.get(url);
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
