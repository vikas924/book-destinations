import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk("user-auth", async (token) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const destinations = await axios.get(
    "https://book-destinations-api.onrender.com/",
    config
  );
  return destinations.status;
});

export const loginUser = createAsyncThunk("user-login", async (user) => {
  const response = await axios.post(
    "https://book-destinations-api.onrender.com/login",
    user
  );
  const token = response.headers.authorization;
  const data = {
    isAuthenticated: true,
    authtoken: token,
    data: response.data,
  };
  return data;
});

export const logoutUser = createAsyncThunk("user-logout", async () => {
  localStorage.removeItem("user");
});

export const registrationUser = createAsyncThunk(
  "user-registration",
  async (user) => {
    const response = await axios.post(
      "https://book-destinations-api.onrender.com/signup",
      user
    );
    const token = response.headers.authorization;
    const data = {
      isAuthenticated: false,
      authtoken: token,
      data: response.data,
    };
    return data;
  }
);
const userSlice = createSlice({
  name: "current_user",
  initialState: {
    authtoken: "",
    data: {
      username: "",
      id: null,
      email: "",
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(loginUser.pending, (state) => ({
        ...state,
        loading: true,
      }))

      .addCase(loginUser.fulfilled, (state, action) => {
        const { payload } = action;
        if (payload) {
          localStorage.setItem("user", JSON.stringify(payload));
        }
        return {
          ...state,
          loading: false,
          username: payload,
        };
      })

      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))

      .addCase(registrationUser.pending, (state) => ({
        ...state,
        loading: true,
      }))

      .addCase(registrationUser.fulfilled, (state) => ({
        ...state,
        loading: false,
      }))

      .addCase(registrationUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(authUser.pending, (state) => ({
        ...state,
        loading: true,
      }))

      .addCase(authUser.fulfilled, (state) => ({
        ...state,
        loading: false,
      }))

      .addCase(authUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      })),
});

export default userSlice.reducer;
