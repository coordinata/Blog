import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./article-slice";
import slugReducer from "./slug-slice";
import userReducer from "./user-slice";

export default configureStore({
  reducer: {
    article: articleReducer,
    slug: slugReducer,
    user: userReducer,
  },
});
