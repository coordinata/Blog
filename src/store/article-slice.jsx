import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  article: [],
  loading: false,
  error: false,
};

export const postLike = createAsyncThunk("article/postLike", async (slug) => {
  const res = await axios.post(
    `https://blog.kata.academy/api/articles/${slug}/favorite`,
    {},
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }
  );

  console.log(res.data);
  return res.data;
});

export const getArticle = createAsyncThunk(
  "article/getArticle",
  async (num = 0) => {
    const res = await axios.get(
      `https://blog.kata.academy/api/articles?offset=${num}&limit=5`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data.articles;
  }
);

export const createArticle = createAsyncThunk(
  "article/createArticle",
  async ({ title, description, text, tagsArr }) => {
    const res = await axios.post(
      "https://blog.kata.academy/api/articles",
      {
        article: {
          title: title,
          description: description,
          body: text,
          tagList: tagsArr, //array
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
    setPostLike: () => {},
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
    [postLike.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [postLike.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [postLike.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setArticle, setCreateArticle, setPostLike } =
  articleSlice.actions;
export default articleSlice.reducer;
