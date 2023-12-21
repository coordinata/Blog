import React from "react";
import "./app.module.scss";
import Header from "../header/header";
import ArticleList from "../article-list/article-list";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { getId } from "../../store/id-slice";
import { getArticle } from "../../store/article-slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ArticleList />
    </div>
  );
};

export default App;
