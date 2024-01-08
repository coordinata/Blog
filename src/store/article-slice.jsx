import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  article: [],
  loading: false,
  error: false,
};

export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (slug) => {
    const res = await axios.delete(
      `https://blog.kata.academy/api/articles/${slug}`,
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

export const postLike = createAsyncThunk("article/postLike", async (slug) => {
  const res = await axios.post(
    `https://blog.kata.academy/api/articles/${slug}/favorite`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return res.data;
});

export const deleteLike = createAsyncThunk(
  "article/deleteLike",
  async (slug) => {
    const res = await axios.delete(
      `https://blog.kata.academy/api/articles/${slug}/favorite`,

      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );

    return res.data;
  }
);

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
          tagList: tagsArr,
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

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
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
      state.article.unshift(action.payload.article);
    },
    [createArticle.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    [postLike.pending]: (state, action) => {},
    [postLike.fulfilled]: (state, action) => {
      state.article = state.article.map((el) => {
        if (el.slug === action.payload.article.slug) {
          return {
            ...el,
            favorited: action.payload.article.favorited,
            favoritesCount: action.payload.article.favoritesCount,
          };
        }
        return el;
      });
      state.loading = false;
    },
    [postLike.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    [deleteLike.pending]: (state, action) => {},
    [deleteLike.fulfilled]: (state, action) => {
      state.article = state.article.map((el) => {
        if (el.slug === action.payload.article.slug) {
          return {
            ...el,
            favorited: action.payload.article.favorited,
            favoritesCount: action.payload.article.favoritesCount,
          };
        }
        return el;
      });
    },
    [deleteLike.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    [deleteArticle.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [deleteArticle.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [deleteArticle.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default articleSlice.reducer;
