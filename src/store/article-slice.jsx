import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  article: [],
  loading: false,
  error: false,
};

export const getArticle = createAsyncThunk(
  "article/getArticle",
  async (num = 0) => {
    const res = await axios.get(
      `https://blog.kata.academy/api/articles?offset=${num}&limit=5`
    );
    return res.data.articles;
  }
);


export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload;
    },
  },
  extraReducers: {
    [getArticle.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getArticle.fulfilled]: (state, action) => {
      state.loading = false;
      state.article = action.payload;
    },
    [getArticle.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setArticle } = articleSlice.actions;
export default articleSlice.reducer;
