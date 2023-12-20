import React from "react";
import Article from "../article/article";
import classes from './article-list.module.scss'

const ArticleList = () => {
  return (
    <div className={classes.wrapper}>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
    </div>
  );
};

export default ArticleList;
