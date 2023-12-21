import React from "react";
import Article from "../article/article";
// import ArticleAll from "../article-all/article-all";
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
            <Article article={article} />
          </li>
        ))}
      </ul>
      {/* <ArticleAll/> */}
    </div>
  );
};

export default ArticleList;
