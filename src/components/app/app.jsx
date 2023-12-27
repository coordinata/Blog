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

const App = () => {
  const loading = useSelector((state) => state.article.loading);
  const error = useSelector((state) => state.article.error);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const login = useSelector((state) => state.user.loginUser);

  useEffect(() => {
    dispatch(getArticle(currentPage));
  }, [dispatch, currentPage]);

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
                {login ? <HeaderAccount /> : <Header />}
                <ArticleList />
                <Pagination
                  className={classes.pagination}
                  current={currentPage} // Укажем текущую страницу
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
                {login ? <HeaderAccount /> : <Header />}
                <ArticleFullCard />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                {login ? <HeaderAccount /> : <Header />}
                <SignIn />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                {login ? <HeaderAccount /> : <Header />}
                <SignUp />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                {login ? <HeaderAccount /> : <Header />}
                <EditProfile />
              </>
            }
          />
        </Routes>
      </div>
    );
  }
};

export default App;
