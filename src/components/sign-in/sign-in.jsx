import React from "react";
import classes from "./sign-in.module.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLoginUser } from "../../store/user-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const notify = () => toast.success("You have successfully logged!");
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(postLoginUser(data));
    reset();
    notify();
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={classes.email}>
          Email address
          <input
            {...register("email", {
              required: "Incorrect email!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                message: "Incorrect email!",
              },
            })}
            className={classes.email_input}
            type="email"
            placeholder="Email address"
          />
        </label>
        <div className={classes.error}>
          {errors?.email && <p>{errors?.email?.message}</p>}
        </div>
        <label className={classes.password}>
          Password
          <input
            {...register("password", {
              required: "Incorrect password!",
              minLength: {
                value: 6,
                message: "Minimum 6 characters!",
              },
              maxLength: {
                value: 40,
                message: "Maximum 40 characters!",
              },
            })}
            className={classes.password_input}
            type="password"
            placeholder="Password"
          />
          <div className={classes.error_password}>
            {errors?.password && <p>{errors?.password?.message}</p>}
          </div>
        </label>
        <Link to="/">
          <input
            type="submit"
            value="Login"
            disabled={!isValid}
            className={classes.login_btn}
          />
        </Link>
      </form>
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
