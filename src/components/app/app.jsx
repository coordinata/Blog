import React from "react";
import "./app.module.scss";
import Header from "../header/header";
import ArticleList from "../article-list/article-list";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticle } from "../../store/article-slice";
import { Pagination } from "antd";
import classes from "./app.module.scss";
import { useState } from "react";
import { Alert, Spin } from "antd";
import { Routes, Route } from "react-router-dom";
import ArticleFullCard from "../article-full-card/article-full-card";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
import EditProfile from "../edit-profile/edit-profile";
import CreateArticle from "../create-article/create-article";
import EditArticle from "../edit-article/edit-article";
import { getCurrentUser } from "../../store/user-slice";

const App = () => {
  const loading = useSelector((state) => state.article.loading);
  const error = useSelector((state) => state.article.error);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const theToken = localStorage.getItem("token");
    if (theToken) {
      dispatch(getCurrentUser(theToken));
    }
  }, [dispatch]);//no dispatch

  useEffect(() => {
    dispatch(getArticle((currentPage - 1) * 5));
  }, [dispatch, currentPage]);

  const onChangePg = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <Spin className={classes.spin}></Spin>;
  } else if (error) {
    return (
      <Alert
        type="error"
        description="An error has occurred!"
        className={classes.error}
      ></Alert>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <ArticleList />
                <Pagination
                  className={classes.pagination}
                  current={currentPage}
                  onChange={onChangePg}
                  pageSize={5}
                  total={400}
                  hideOnSinglePage={true}
                  showSizeChanger={false}
                />
              </>
            }
          />
          <Route
            path="/article/:slug"
            element={
              <>
                <Header />
                <ArticleFullCard />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                <Header />
                <SignIn />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Header />
                <SignUp />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Header />
                <EditProfile />
              </>
            }
          />
          <Route
            path="/new-article"
            element={
              <>
                <Header />
                <CreateArticle />
              </>
            }
          />
          <Route
            path="/articles/:slug/edit"
            element={
              <>
                <Header />
                <EditArticle />
              </>
            }
          />
        </Routes>
      </div>
    );
  }
};

export default App;
