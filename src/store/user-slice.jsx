import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  errorlogin: null,
  loading: false,
  error: false,
  errorCreate: null,
  errorUpdate: null,
};

export const postCreateUser = createAsyncThunk(
  "createUser/postCreateUser",
  async ({ username, email, password }) => {
    const res = await axios.post("https://blog.kata.academy/api/users/", {
      user: {
        username: username,
        email: email,
        password: password,
      },
    });
    localStorage.setItem("userName", res.data.user.username);
    localStorage.setItem("token", res.data.user.token);
    console.log(res.data);
    return res.data;
  }
);

export const putUpdateUser = createAsyncThunk(
  "updateUser/putUpdateUser",
  async ({ username, email, password, url }) => {
    const res = await axios.put(
      "https://blog.kata.academy/api/user",
      {
        user: {
          email: email,
          username: username,
          password: password,
          image: url,
        },
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.setItem("avatar", res.data.user.image);
    console.log(res.data);
    return res.data;
  }
);

export const postLoginUser = createAsyncThunk(
  "loginUser/postLoginUser",
  async ({ email, password }) => {
    const res = await axios.post("https://blog.kata.academy/api/users/login", {
      user: {
        email: email,
        password: password,
      },
    });
    localStorage.setItem("userName", res.data.user.username);
    localStorage.setItem("token", res.data.user.token);
    localStorage.setItem("avatar", res.data.user.image);
    console.log(res.data);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCreateUser: (state, action) => {},
    setLoginUser: (state, action) => {},
    setUpdateUser: (state, action) => {},
  },
  extraReducers: {
    [postCreateUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.errorCreate = null;
    },
    [postCreateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorCreate = false;
    },
    [postCreateUser.rejected]: (state, action) => {
      state.loading = false;
      state.errorCreate = true;
    },
    [postLoginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.errorlogin = null;
    },
    [postLoginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorlogin = false;
    },
    [postLoginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorlogin = true;
    },
    [putUpdateUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.errorUpdate = null;
    },
    [putUpdateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorUpdate = false;
    },
    [putUpdateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorUpdate = true;
    },
  },
});

export const { createUser, loginUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
