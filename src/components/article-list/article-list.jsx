import React from "react";
import Article from "../article/article";
import classes from "./article-list.module.scss";
import { Pagination } from "antd";

const ArticleList = () => {
  return (
    <div className={classes.wrapper}>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Pagination className={classes.pagination} total={50} />
    </div>
  );
};

export default ArticleList;
