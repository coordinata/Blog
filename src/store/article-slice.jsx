import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  article: [],
};

export const getArticle = createAsyncThunk(
  "article/getArticle",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get("https://blog.kata.academy/api/articles");
      dispatch(setArticle(res.data.articles));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.article.push(action.payload);
    },
  },
});

export const { setArticle } = articleSlice.actions;
export default articleSlice.reducer;
