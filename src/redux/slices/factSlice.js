import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getFacts = createAsyncThunk(
  "facts/getFacts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        "https://6718a73e7fc4c5ff8f4a671d.mockapi.io/facts"
      );
      response.data;

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
        action.payload;
      })
      .addCase(getFacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default factsSlice.reducer;
