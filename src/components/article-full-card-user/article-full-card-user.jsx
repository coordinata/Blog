import React from "react";
import classes from "./article-full-card-user.module.scss";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import Markdown from "react-markdown";
import { postLike } from "../../store/article-slice";
import { deleteLike } from "../../store/article-slice";
import { useDispatch } from "react-redux";
import { Popconfirm } from "antd";

const ArticleFullCardUser = () => {
  const article = useSelector((state) => state.slug.slugData);
  const localToken = localStorage.getItem("token");
  const dispatch = useDispatch();

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

  const clickLike = () => {
    if (localToken) {
      article.favorited
        ? dispatch(deleteLike(article.slug))
        : dispatch(postLike(article.slug));
    }
  };

  const truncateContent = (content, num) => {
    if (content && content.length > num) {
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
            <button
              className={
                article.favorited
                  ? classes.button_like_active
                  : classes.button_like
              }
              onClick={clickLike}
            ></button>
            <p className={classes.num_like}>{article.favoritesCount}</p>
            <div>
              {article.tagList &&
                article.tagList.map((tag, i) => (
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
            <img
              className={classes.avatar}
              src={article.author?.image}
              alt="avatar"
            />
            <div className={classes.btn_wrapper}>
              <Popconfirm
                okText="Yes"
                cancelText="No"
                description="Are you sure to delete this article?"
              >
                <button className={classes.button_del}>Delete</button>
              </Popconfirm>
              <button className={classes.button_edit}>Edit</button>
            </div>
          </div>
        </div>
        <Markdown className={classes.text_all}>{article.body}</Markdown>
      </li>
    </div>
  ) : null;
};

export default ArticleFullCardUser;
