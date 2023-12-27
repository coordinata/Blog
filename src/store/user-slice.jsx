import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loginUser: false,
  loading: false,
  error: false,
};

export const postCreateUser = createAsyncThunk(
  "createUser/postCreateUser",
  async ({ name, email, password }) => {
    const res = await axios.post("https://blog.kata.academy/api/users/", {
      user: {
        username: name,
        email: email,
        password: password,
      },
    });
    console.log(res.data);
    return res.data;
  }
);

export const postLoginUser = createAsyncThunk(
  "loginUser/postLoginUser",
  async ({email, password}) => {
    const res = await axios.post("https://blog.kata.academy/api/users/login", {
      user: {
        email: email,
        password: password,
      },
    });
    console.log(res.data);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCreateUser: (state, action) => {
      state.loginUser = true;
    },
    setLoginUser: (state, action) => {
      state.loginUser = true;
    },
  },
  extraReducers: {
    [postCreateUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [postCreateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.loginUser = true;
    },
    [postCreateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    [postLoginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [postLoginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.loginUser = true;
    },
    [postLoginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { createUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
