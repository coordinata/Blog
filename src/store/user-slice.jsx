import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  errorlogin: null,
  loading: false,
  error: false,
  errorCreate: null,
  errorUpdate: null,
  auth: false,
};

export const postCreateUser = createAsyncThunk(
  "createUser/postCreateUser",
  async ({ username, email, password }) => {
    console.log(username);
    const res = await axios.post("https://blog.kata.academy/api/users/", {
      user: {
        username: username,
        email: email,
        password: password,
      },
    });
    localStorage.setItem("token", res.data.user.token);
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
    return res.data;
  }
);

export const getCurrentUser = createAsyncThunk(
  "loginUser/withToken",
  async (token) => {
    const theResponse = await axios.get("https://blog.kata.academy/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return theResponse.data;
  }
);

export const postLoginUser = createAsyncThunk(
  "loginUser/postLoginUser",
  async ({ email, password }) => {
    const theResponse = await axios.post(
      "https://blog.kata.academy/api/users/login",
      {
        user: {
          email: email,
          password: password,
        },
      }
    );
    localStorage.setItem("token", theResponse.data.user.token);

    return theResponse.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCreateUser: (state, action) => {},
    setLoginUser: (state, action) => {},
    setUpdateUser: (state, action) => {},
    doLogOut: (state) => {
      state.user = null;
      state.auth = false;
      localStorage.removeItem("token");
    },
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
      state.auth = true;
      state.user = action.payload.user;
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
      state.auth = true;
      state.user = action.payload.user;
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
    [getCurrentUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload.user;
      state.auth = true;
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { createUser, loginUser, updateUser, doLogOut } =
  userSlice.actions;
export default userSlice.reducer;
