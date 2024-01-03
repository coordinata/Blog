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
  async ({title, description, body}) => {
    const res = await axios.post(
      "https://blog.kata.academy/api/articles",
      {
        article: {
          title: title,
          description: description,
          body: body,
          tags: ["tags"], //array
        },
      },
      {
        headers: {
          Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTJlNTEzOGM4MjhkMWIwMDM5M2E4MiIsInVzZXJuYW1lIjoicXVldWU5OTkiLCJleHAiOjE3MDk1MDA2MzIsImlhdCI6MTcwNDMxNjYzMn0.im3J6aWDtMxcEga7nifyfXhFfH5r9-5MpnDCaZ1rrE4`,
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
