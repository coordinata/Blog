import React from "react";
import "./app.module.scss";
import Header from "../header/header";
import ArticleList from "../article-list/article-list";

const App = () => {
  return (
    <div>
      <Header />
      <ArticleList />
    </div>
  );
};

export default App;
