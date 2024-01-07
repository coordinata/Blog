import React from "react";
import classes from "./header-account.module.scss";
import { Link } from "react-router-dom";
import Avatar from "../../img/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { doLogOut } from "../../store/user-slice";

const HeaderAccount = () => {
  const { username, image } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(doLogOut());
  };

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <p className={classes.title}>Realworld Blog</p>
        </Link>
      </div>
      <div>
        <Link to="/new-article">
          <button className={classes.button_create_article}>
            Create article
          </button>
        </Link>
        <Link to="/profile">
          <p className={classes.user_name}>{username}</p>
          <img src={image || Avatar} alt="avatar" className={classes.avatar} />
        </Link>

        <Link to="/">
          <button className={classes.button_log_out} onClick={onLogOut}>
            Log Out
          </button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderAccount;
