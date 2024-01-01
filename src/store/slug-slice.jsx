import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  slugData: [],
  loading: false,
  error: false,
};

export const getSlugData = createAsyncThunk(
    "slugData/getSlugData",
    async (slug) => {
      const res = await axios.get(
        `https://blog.kata.academy/api/articles/${slug}`
      );
      return res.data.article;
  }
);


export const slugSlice = createSlice({
  name: "slugData",
  initialState,
  reducers: {
    setSlugData: (state, action) => {
      state.slugData = action.payload;
    },
  },
  extraReducers: {
    [getSlugData.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getSlugData.fulfilled]: (state, action) => {
      state.loading = false;
      state.slugData = action.payload;
    },
    [getSlugData.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setSlugData } = slugSlice.actions;
export default slugSlice.reducer;