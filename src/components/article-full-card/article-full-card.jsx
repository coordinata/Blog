import React from "react";
import classes from "./article-full-card.module.scss";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import Markdown from "react-markdown";

const ArticleFullCard = () => {
  const article = useSelector((state) => state.slug.slugData);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "";
    }
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "";
      }
      const formattedDate = format(date, "MMMM d, yyyy");
      return formattedDate;
    } catch (error) {
      console.error("Error while formatting date:", error);
      return "";
    }
  };

  const truncateContent = (content, num) => {
    if (content && content.length > num) {
      // Проверка на наличие данных
      return content.substring(0, num) + "...";
    }
    return content;
  };

  return article ? (
    <div>
      <li className={classes.article_wrapper}>
        <div className={classes.article}>
          <div>
            <p className={classes.title}>{article.title}</p>
            <button className={classes.button_like}></button>
            <p className={classes.num_like}>{article.favoritesCount}</p>
            <div>
            {article.tagList && article.tagList.map((tag, i) => ( // Добавлена проверка на наличие tagList
              <p className={classes.tag} key={i}>
                {truncateContent(tag, 100)}
              </p>
            ))}
          </div>
            <p className={classes.description}>
              {truncateContent(article.description, 1000)}
            </p>
          </div>
          <div>
            <p className={classes.user_name}>{article.author?.username}</p>
            <p className={classes.date}>{formatDate(article.createdAt)}</p>
          </div>
          <div>
            <img
              className={classes.avatar}
              src={article.author?.image}
              alt="avatar"
            />
          </div>
        </div>
        <Markdown className={classes.text_all}>
          {truncateContent(article.body, 1500)}
        </Markdown>
      </li>
    </div>
  ) : null;
};

export default ArticleFullCard;
