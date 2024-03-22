import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReservations = createAsyncThunk(
  "reservations-fetcher",
  async (token) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const destinations = await axios.get(
      "https://book-destinations-api.onrender.com/api/v1/reservations/",
      config
    );
    return destinations.data;
  }
);

export const createReservations = createAsyncThunk(
  "reservations-create",
  async ({ token, data }) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const destinations = await axios.post(
      "https://book-destinations-api.onrender.com/api/v1/reservations/",
      data,
      config
    );
    return destinations.data;
  }
);

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    reservations: [],
    isLoading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        isloading: true,
      }))

      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })

      .addCase(fetchReservations.rejected, (state) => ({
        ...state,
        isloading: false,
      }))
      .addCase(createReservations.pending, (state) => ({
        ...state,
        isloading: true,
      }))

      .addCase(createReservations.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
      })
      .addCase(createReservations.rejected, (state) => ({
        ...state,
        isloading: false,
      }));
  },
});

export default reservationsSlice.reducer;
