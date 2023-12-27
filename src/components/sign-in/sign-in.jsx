import React from "react";
import classes from "./sign-in.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLoginUser } from "../../store/user-slice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginUser = () => {
    dispatch(postLoginUser({email, password}));
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Sign In</h1>
      <form>
        <label className={classes.email}>
          Email address
          <input
            onChange={changeEmail}
            className={classes.email_input}
            type="email"
            placeholder="Email address"
          />
        </label>
        <label className={classes.password}>
          Password
          <input
          onChange={changePassword}
            className={classes.password_input}
            type="password"
            placeholder="Password"
          />
        </label>
      </form>
      <button className={classes.login_btn} onClick={loginUser}>
        Login
      </button>
      <p className={classes.text}>
        Don’t have an account?{" "}
        <Link to="/sign-up" className={classes.text_sign_up}>
          Sign Up.
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
