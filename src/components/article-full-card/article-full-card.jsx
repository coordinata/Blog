import React, { useEffect } from "react";
import classes from "./article-full-card.module.scss";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import Markdown from "react-markdown";
import { useDispatch } from "react-redux";
import ArticleFullCardUser from "../article-full-card-user/article-full-card-user";
import FavotiteButton from "../favorite-button/favorite-button";
import { useParams } from "react-router-dom";
import { getSlugData } from "../../store/slug-slice";

const ArticleFullCard = (slug) => {
  const params = useParams();
  const article = useSelector((state) => state.slug.slugData);
  const dispatch = useDispatch();
  const {
    user: { username },
  } = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSlugData(params.slug));
  }, [params, dispatch]);

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
      return content.substring(0, num) + "...";
    }
    return content;
  };

  return article ? (
    <>
      {username === article.author.username ? (
        <ArticleFullCardUser />
      ) : (
        <div>
          <li className={classes.article_wrapper}>
            <div className={classes.article}>
              <div>
                <p className={classes.title}>{article.title}</p>
                <FavotiteButton
                  favotite={article.favorited}
                  count={article.favoritesCount}
                  slug={article.slug}
                />
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
              </div>
              <div>
                <img
                  className={classes.avatar}
                  src={article.author?.image}
                  alt="avatar"
                />
              </div>
            </div>
            <Markdown className={classes.text_all}>{article.body}</Markdown>
          </li>
        </div>
      )}
    </>
  ) : null;
};

export default ArticleFullCard;
