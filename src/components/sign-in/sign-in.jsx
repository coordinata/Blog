import React from "react";
import classes from "./sign-in.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLoginUser } from "../../store/user-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const notify = () => {
    toast.success("You have successfully created an account!");
  };

  const loginUser = () => {
    dispatch(postLoginUser({ email, password }));
    notify();
    setEmail("");
    setPassword(""); 
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
            value={email}
            onChange={changeEmail}
            className={classes.email_input}
            type="email"
            placeholder="Email address"
          />
        </label>
        <label className={classes.password}>
          Password
          <input
            value={password}
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
