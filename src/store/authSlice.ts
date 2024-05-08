import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../api";

type AuthUser = string | object;

const authUser: AuthUser =
  (localStorage.getItem("authUser") as string | null) !== null
    ? JSON.parse(localStorage.getItem("authUser") as string)
    : {};

const initialState = {
  user: authUser,
  error: "",
};

export const login = createAsyncThunk("user", async (payload) => {
  const response = await getRequest("users");
  return response.data;
});
export const signup = createAsyncThunk("user", async (payload) => {
  const response = await getRequest("users");
  return response.data;
});
export const logout = createAsyncThunk("users", async () => {
  // const response = await postRequest("users");
  return {};
});
// export const addUser = createAsyncThunk("users", async (payload) => {
//   const response = await postRequest("users", payload);
//   return response.data;
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // addAuthUser: (state, action) => {
    //   state.user = action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message as string;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { addAuthUser } = accauntSlice.actions;

// export const selectAllAccaunts = (state) => state.user.users;

export default authSlice.reducer;
