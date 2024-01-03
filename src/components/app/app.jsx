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
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
import EditProfile from "../edit-profile/edit-profile";
import HeaderAccount from "../header-account/header-account";
import CreateArticle from "../create-article/create-article";

const App = () => {
  const loading = useSelector((state) => state.article.loading);
  const error = useSelector((state) => state.article.error);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [token, setToken] = useState();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    dispatch(getArticle((currentPage - 1) * 5));
  }, [dispatch, currentPage]);

  useEffect(() => {
    const handleTokenChange = (e) => {
      setToken(e.newValue);
    };
    window.addEventListener("storage", handleTokenChange);

    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  const onChangePg = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <Spin className={classes.spin}></Spin>;
  } else if (error) {
    return (
      <Alert type="error" className={classes.loading}>
        An error has occurred
      </Alert>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {token ? <HeaderAccount /> : <Header />}
                <ArticleList />
                <Pagination
                  className={classes.pagination}
                  current={currentPage}
                  onChange={onChangePg}
                  pageSize={5}
                  total={300}
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
                {token ? <HeaderAccount /> : <Header />}
                <ArticleFullCard />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                {token ? <HeaderAccount /> : <Header />}
                <SignIn />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                {token ? <HeaderAccount /> : <Header />}
                <SignUp />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <HeaderAccount />
                <EditProfile />
              </>
            }
          />
          <Route
            path="/new-article"
            element={
              <>
                <HeaderAccount />
                <CreateArticle />
              </>
            }
          />
        </Routes>
      </div>
    );
  }
};

export default App;
