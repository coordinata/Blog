import React from "react";
import "./app.module.scss";
import Header from "../header/header";
import ArticleList from "../article-list/article-list";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { getId } from "../../store/id-slice";
import { getArticle } from "../../store/article-slice";
import { Pagination } from "antd";
import classes from "./app.module.scss";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getArticle(currentPage));
  }, [dispatch, currentPage]);

  const onChangePg = (page) => {
    setCurrentPage(page); 
  };

  return (
    <div>
      <Header />
      <ArticleList />
      <Pagination
        className={classes.pagination}
        onChange={onChangePg}
        pageSize={5}
        total={300}
        hideOnSinglePage={true}
        showSizeChanger={false}
    
      />
    </div>
  );
};

export default App;
