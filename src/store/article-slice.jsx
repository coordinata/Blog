import { createSlice } from "@reduxjs/toolkit";

const initialState = { article: [] };

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticle() {
      console.log("lll");
    },
  },
});

export const { getArticle } = articleSlice.actions;
export default articleSlice.reducer;
