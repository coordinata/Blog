import React from "react";
import classes from "./sign-up.module.scss";
import { Link } from "react-router-dom";
import { postCreateUser } from "../../store/user-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const notify = () => {
    toast.success("You have successfully logged in to your account!");
  };

  const createUser = () => {
    dispatch(postCreateUser({ name, email, password }));
    notify();
  };

  const changeUserName = (event) => {
    setName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

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
            onChange={changeUserName}
          ></input>
        </label>
        <label className={classes.email}>
          Email address
          <input
            className={classes.email_input}
            type="email"
            placeholder="Email address"
            onChange={changeEmail}
          />
        </label>
        <label className={classes.password}>
          Password
          <input
            className={classes.password_input}
            type="password"
            placeholder="Password"
            onChange={changePassword}
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
          <input type="checkbox" className={classes.checkbox_input} />I agree to
          the processing of my personal information
        </label>
      </form>
      <button className={classes.create_btn} onClick={createUser}>
        Create
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
        Already have an account?{" "}
        <Link to="/sign-in" className={classes.text_sign_in}>
          Sign In.
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
