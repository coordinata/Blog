import React from "react";
import classes from "./sign-up.module.scss";
import { Link } from "react-router-dom";
import { postCreateUser } from "../../store/user-slice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const notify = () => {
    toast.success("You have successfully logged in to your account!");
  };

  const onSubmit = (data) => {
    dispatch(postCreateUser(data));
    reset();
    notify();
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Create new account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={classes.username}>
          Username
          <input
            {...register("username", {
              required: "Incorrect username!",
              minLength: {
                value: 3,
                message: "Minimum 3 characters!",
              },
              maxLength: {
                value: 20,
                message: "Maximum 20 characters!",
              },
            })}
            className={classes.username_input}
            type="text"
            placeholder="Username"
          ></input>
        </label>
        <div className={classes.error}>
          {errors?.username && <p>{errors?.username?.message}</p>}
        </div>
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
        </label>
        <div className={classes.error_password}>
          {errors?.password && <p>{errors?.password?.message}</p>}
        </div>
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
      <input
        type="submit"
        value="Create"
        disabled={!isValid}
        className={classes.create_btn}
      />

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
