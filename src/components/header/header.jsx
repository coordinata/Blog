import React from "react";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <p className={classes.title}>Realworld Blog</p>
        </Link>
      </div>
      <div>
        <button className={classes.button_sign_in}>Sign In</button>
        <button className={classes.button_sign_up}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
