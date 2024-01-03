import React from "react";
import classes from "./header-account.module.scss";
import { Link } from "react-router-dom";
import Avatar from "../../img/avatar.png";

const HeaderAccount = () => {
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");

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
          <p className={classes.user_name}>{userName}</p>
          <img src={Avatar} alt="avatar" className={classes.avatar} />
        </Link>

        <Link to="/">
          <button className={classes.button_log_out} /*onClick={localStorage.removeItem("token")}*/>Log Out</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderAccount;
