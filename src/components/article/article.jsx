import React from "react";
import classes from "./article.module.scss";
import { format } from "date-fns";
import Markdown from 'react-markdown'

const Article = ({ article }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM d, yyyy");
    return formattedDate;
  };

  const truncateUsername = (username) => {
    if (username.length > 12) {
      return username.substring(0, 12) + "...";
    }
    return username;
  };

  const truncateTitle = (title) => {
    if (title.length > 80) {
      return title.substring(0, 80) + "...";
    }
    return title;
  };

  return (
    <div className={classes.article}>
      <div>
        <p className={classes.title}>{truncateTitle(article.title)}</p>
        <button className={classes.button_like}></button>
        <p className={classes.num_like}>{article.favoritesCount}</p>
        <div>
          {article.tagList.slice(0, 5).map((tag, i) => (
            <p className={classes.tag} key={i}>
              {tag}
            </p>
          ))}
        </div>

        <p className={classes.text}>{article.description}</p>
      </div>
      <div>
        <p className={classes.user_name}>
          {truncateUsername(article.author.username)}
        </p>
        <p className={classes.date}>{formatDate(article.createdAt)}</p>
      </div>
      <div>
        <img
          className={classes.avatar}
          src={article.author.image}
          alt="avatar"
        />
      </div>
      <div>
        <Markdown>{article.body}</Markdown>
      </div>
    </div>
  );
};

export default Article;
