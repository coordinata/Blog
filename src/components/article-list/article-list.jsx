import React from "react";
import Article from "../article/article";
// import ArticleAll from "../article-all/article-all";
import classes from "./article-list.module.scss";
import { Pagination } from "antd";
import { useSelector } from "react-redux";
import nextId from "react-id-generator";

const ArticleList = () => {
  let id = nextId();
  const article = useSelector((state) => state.article.article);
  const articles = article.flat()


  return (
    <div className={classes.wrapper}>
      <ul className={classes.tickets_list}>
        {articles.map((article) => (
          <li key={id}>
            <Article article={article} />
          </li>
        ))}
      </ul>
      {/* <ArticleAll/> */}
      <Pagination className={classes.pagination} total={50} />
    </div>
  );
};

export default ArticleList;
