import React from "react";
import classes from "./create-article.module.scss";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const CreateArticle = () => {
  const notify = () => toast.success("article created successfully!");
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
    dispatch(data);
    reset();
    notify();
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Create new article</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={classes.title_article}>
          Title
          <input
            {...register("title", {
              required: "This field is required!",
            })}
            className={classes.title_article_input}
            type="text"
            placeholder="Title"
          />
        </label>
        <div className={classes.error}>
          {errors?.title && <p>{errors?.title?.message}</p>}
        </div>

        <label className={classes.description}>
          Short description
          <input
            {...register("description", {
              required: "This field is required!",
            })}
            className={classes.description_input}
            type="text"
            placeholder="Short description"
          />
          <div className={classes.error}>
            {errors?.description && <p>{errors?.description?.message}</p>}
          </div>
        </label>

        <label className={classes.text}>
          Text
          <input
            {...register("text", {
              required: "This field is required!",
            })}
            className={classes.text_input}
            type="text"
            placeholder="Text"
          />
          <div className={classes.error}>
            {errors?.text && <p>{errors?.text?.message}</p>}
          </div>
        </label>

        <input
          type="submit"
          value="Send"
          disabled={!isValid}
          className={classes.send_btn}
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

export default CreateArticle;
