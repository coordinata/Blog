import React from "react";
import classes from "./sign-up.module.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Create new account</h1>
      <form>
        <label className={classes.username}>
          Username
          <input
            className={classes.username_input}
            type="text"
            placeholder="Username"
          ></input>
        </label>
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
        <label className={classes.repeat_password}>
          Repeat Password
          <input
            className={classes.repeat_password_input}
            type="password"
            placeholder="Repeat Password"
          />
        </label>
        <label className={classes.checkbox}>
          <input type="checkbox" checked className={classes.checkbox_input} />I
          agree to the processing of my personal information
        </label>
      </form>
      <button className={classes.create_btn}>Create</button>
      <p className={classes.text}>
        Already have an account?{" "}
        <Link to="/sign-in" className={classes.text_sign_in}>
          Sign In.
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
