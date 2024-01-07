import { useDispatch, useSelector } from "react-redux";
import { deleteLike, postLike } from "../../store/article-slice";

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
        style={{ color: favotite ? "red" : "black" }}
        onClick={onFavorited}
      >
        Like
      </button>
      <p>{count}</p>
    </>
  );
};

export default FavotiteButton;
