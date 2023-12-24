import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./article-slice";
import idReducer from "./id-slice";
import slugReducer from "./slug-slice";

export default configureStore({
  reducer: {
    article: articleReducer,
    id: idReducer,
    slug: slugReducer,
  },
});
