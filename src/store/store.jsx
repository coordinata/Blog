import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./article-slice";

export default configureStore({
  reducer: {
    article: articleReducer,
  },
});
