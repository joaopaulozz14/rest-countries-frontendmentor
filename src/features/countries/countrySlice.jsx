import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./countryThunks";
const initialState = {
  countries: [],
  status: "idle",
  searchQuery: "",
  error: null,
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    clearSearchQuery(state) {
      state.searchQuery = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, clearSearchQuery } = countrySlice.actions;
export default countrySlice.reducer;
