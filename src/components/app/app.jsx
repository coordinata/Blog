import React from "react";
import "./app.module.scss";
import Header from "../header/header";
import ArticleList from "../article-list/article-list";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { getId } from "../../store/id-slice";
import { getArticle } from "../../store/article-slice";
import { Pagination } from "antd";
import classes from "./app.module.scss";
import { useState } from "react";
import { Alert, Spin } from "antd";
import { Routes, Route } from "react-router-dom";
import ArticleFullCard from "../article-full-card/article-full-card";

const App = () => {
  const loading = useSelector((state) => state.article.loading);
  const error = useSelector((state) => state.article.error);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getArticle(currentPage));
  }, [dispatch, currentPage]);

  const onChangePg = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <Spin className={classes.spin}></Spin>;
  } else if (error) {
    return <Alert type="error" className={classes.loading}>An error has occurred</Alert>;
  } else {
    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ArticleList />
                <Pagination
                  className={classes.pagination}
                  onChange={onChangePg}
                  pageSize={5}
                  total={600}
                  hideOnSinglePage={true}
                  showSizeChanger={false}
                />
              </>
            }
          />
          <Route path="/article/:slug" element={<ArticleFullCard />} />
        </Routes>
      </div>
    );
  }
};

export default App;
