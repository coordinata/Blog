import React from "react";
import classes from "./article-card.module.scss";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getSlugData } from "../../store/slug-slice";
import { useDispatch } from "react-redux";
import FavotiteButton from "../favorite-button/favorite-button";

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getSlugData(article.slug));
  }, [article.slug, dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM d, yyyy");
    return formattedDate;
  };

  const truncateContent = (content, num) => {
    if (content && content.length > num) {
      return content.substring(0, num) + "...";
    }
    return content;
  };

  return (
    <div className={classes.article}>
      <div>
        <Link to={`/article/${article.slug}`}>
          <p className={classes.title}>{truncateContent(article.title, 30)}</p>
        </Link>
        <FavotiteButton
          favotite={article.favorited}
          count={article.favoritesCount}
          slug={article.slug}
        />
        <div>
          {article.tagList &&
            article.tagList.slice(0, 5).map((tag, i) => (
              <p className={classes.tag} key={i}>
                {truncateContent(tag, 10)}
              </p>
            ))}
        </div>

        <p className={classes.description}>
          {truncateContent(article.description, 125)}
        </p>
      </div>
      <div>
        <p className={classes.user_name}>
          {truncateContent(article.author.username, 8)}
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
    </div>
  );
};

export default ArticleCard;
