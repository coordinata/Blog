import React from "react";
import classes from "./sign-in.module.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Sign In</h1>
      <form>
        <label className={classes.email}>
          Email address
          <input
            className={classes.email_input}
            type="email"
            placeholder="Email address"
          />
        </label>
        <label className={classes.password}>
          Password
          <input
            className={classes.password_input}
            type="password"
            placeholder="Password"
          />
        </label>
      </form>
      <button className={classes.login_btn}>Login</button>
      <p className={classes.text}>
        Don’t have an account? <Link to="/sign-up" className={classes.text_sign_up}>Sign Up.</Link>
      </p>
    </div>
  );
};

export default SignIn;
