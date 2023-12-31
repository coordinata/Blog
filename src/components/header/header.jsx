import React from "react";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderAccount from "../header-account/header-account";

const Header = () => {
  const { auth } = useSelector((state) => state.user);
  return (
    <>
      {auth ? (
        <HeaderAccount />
      ) : (
        <header className={classes.header}>
          <div>
            <Link to="/">
              <p className={classes.title}>Realworld Blog</p>
            </Link>
          </div>
          <div>
            <Link to="/sign-in">
              <button className={classes.button_sign_in}>Sign In</button>
            </Link>
            <Link to="/sign-up">
              <button className={classes.button_sign_up}>Sign Up</button>
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
