import React from "react";
import classes from "./article-full-card.module.scss";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import Markdown from "react-markdown";

const ArticleAll = () => {
  const article = useSelector((state) => state.slug.slugData);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM d, yyyy");
    return formattedDate;
  };

  return (
    <div>
      <li className={classes.article_wrapper}>
        <div className={classes.article}>
          <div>
            <p className={classes.title}>{article.title}</p>
            <button className={classes.button_like}></button>
            <p className={classes.num_like}>{article.favoritesCount}</p>
            <div>
              {article.tagList.map((tag, i) => (
                <p className={classes.tag} key={i}>
                  {tag}
                </p>
              ))}
            </div>
            <p className={classes.description}>{article.description}</p>
          </div>
          <div>
            <p className={classes.user_name}>{article.author.user_name}</p>
            <p className={classes.date}>{formatDate(article.createdAt)}</p>
          </div>
          <div>
            <img
              className={classes.avatar}
              src={article.author.image}
              alt="avatar"
            />
          </div>
        </div>
        <Markdown className={classes.text_all}>{article.body}</Markdown>
      </li>
    </div>
  );
};

export default ArticleAll;
