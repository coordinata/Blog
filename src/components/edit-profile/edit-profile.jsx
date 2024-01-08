import React from "react";
import classes from "./edit-profile.module.scss";
import { putUpdateUser } from "../../store/user-slice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { errorUpdate, auth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/sign-in");
    }
  }, [auth, navigate]);
  const notify = () => {
    toast.success("The information has been successfully updated!");
  };

  const notifyError = () =>
    toast.error("This email or username is already taken!");

  useEffect(() => {
    if (errorUpdate === null) {
      return;
    } else if (errorUpdate) {
      notifyError();
    } else {
      notify();
    }
  }, [errorUpdate]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(putUpdateUser(data));
    reset();
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Edit Profile</h1>
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
        <label className={classes.new_password}>
          New password
          <input
            {...register("password", {
              minLength: {
                value: 6,
                message: "Minimum 6 characters!",
              },
              maxLength: {
                value: 40,
                message: "Maximum 40 characters!",
              },
            })}
            className={classes.new_password_input}
            type="password"
            placeholder="New password"
          />
        </label>
        <div className={classes.error}>
          {errors?.password && <p>{errors?.password?.message}</p>}
        </div>
        <label className={classes.avatar}>
          Avatar image (url)
          <input
            {...register("url", {
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Not a valid URL!",
              },
            })}
            className={classes.avatar_input}
            type="text"
            placeholder="Avatar image"
          />
        </label>
        <div className={classes.error_url}>
          {errors?.url && <p>{errors?.url?.message}</p>}
        </div>
        <input
          className={classes.save_btn}
          type="submit"
          value="Save"
          disabled={!isValid}
        />
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
    </div>
  );
};

export default EditProfile;
