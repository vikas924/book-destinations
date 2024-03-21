import { configureStore } from "@reduxjs/toolkit";
import destinationsSlice from "./destinations/destinationsSlice";
import userSlice from "./authentication/userSlice";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const loadUserFromLocalStorage = () => {
  try {
    const serializedUser = localStorage.getItem("user");
    if (serializedUser === null) {
      return undefined;
    }
    return JSON.parse(serializedUser);
  } catch (err) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    destinations: destinationsSlice,
    current_user: userSlice,
  },
  preloadedState: {
    current_user: loadUserFromLocalStorage(),
    destinations: loadStateFromLocalStorage(),
  },
});

export default store;
