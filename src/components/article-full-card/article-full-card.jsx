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

  const truncateContent = (content, num) => {
    if (content.length > num) {
      return content.substring(0, num) + "...";
    }
    return content;
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
                  {truncateContent(tag, 100)}
                </p>
              ))}
            </div>
            <p className={classes.description}>{truncateContent(article.description, 1000)}</p>
          </div>
          <div>
            <p className={classes.user_name}>{article.author.username}</p>
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
        <Markdown className={classes.text_all}>{truncateContent(article.body, 1500)}</Markdown>
      </li>
    </div>
  );
};

export default ArticleAll;
