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

export const createArticle = createAsyncThunk(
  "article/createArticle",
  async ({title, description, text, tags}) => {
    const res = await axios.post(
      "https://blog.kata.academy/api/articles",
      {
        article: {
          title: title,
          description: description,
          body: text,
          tagList: tags, //array
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

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    setCreateArticle: () => {},
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
    [createArticle.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [createArticle.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createArticle.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setArticle } = articleSlice.actions;
export default articleSlice.reducer;
