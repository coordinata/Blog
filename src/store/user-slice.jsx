import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loginUser: false,
  loading: false,
  error: false,
  name: "",
  avatar: "",
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
    localStorage.setItem("userName",  JSON.stringify(res.data.user.username));
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
    localStorage.setItem("userName",  JSON.stringify(res.data.user.username));
    localStorage.setItem("token", JSON.stringify(res.data.user.token));
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
    setUpdateUser: (state, action) => {
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
    [putUpdateUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [putUpdateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.loginUser = true;
    },
    [putUpdateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { createUser, loginUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
