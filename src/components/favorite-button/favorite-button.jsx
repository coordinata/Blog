import { useDispatch, useSelector } from "react-redux";
import { deleteLike, postLike } from "../../store/article-slice";
import classes from "./favorite-button.module.scss";

const FavotiteButton = ({ favotite, count, slug }) => {
  console.log(favotite);
  const { auth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onFavorited = () => {
    if (favotite) {
      dispatch(deleteLike(slug));
    } else {
      dispatch(postLike(slug));
    }
  };
  return (
    <>
      <button
        disabled={!auth}
        className={favotite ? classes.button_like_active : classes.button_like}
        onClick={onFavorited}
      ></button>
      <p className={classes.num_like}>{count}</p>
    </>
  );
};

export default FavotiteButton;
