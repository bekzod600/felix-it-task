import { configureStore } from "@reduxjs/toolkit";
// import accountReducer from "./accountSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    // accaunt: accountReducer,
    auth: authSlice,
  },
});
