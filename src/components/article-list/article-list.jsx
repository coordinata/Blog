import React from "react";
import ArticleCard from "../article-card/article-card";
import classes from "./article-list.module.scss";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const ArticleList = () => {
  const article = useSelector((state) => state.article.article);
  const articles = article.flat();

  return (
    <div className={classes.wrapper}>
      <ul className={classes.tickets_list}>
        {articles.map((article) => (
          <li key={uuidv4()}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
