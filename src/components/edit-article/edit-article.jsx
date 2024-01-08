import React, { useEffect } from "react";
import classes from "./edit-article.module.scss";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { editArticle } from "../../store/article-slice";
import { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditArticle = () => {
  const [data, setData] = useState();
  const article = useSelector((state) => state.article.article);
  const params = useParams();
  const [tagsArr, setTagsArr] = useState([]);
  const notify = () => toast.success("Article successfully edited!");
  const dispatch = useDispatch();
  const tagInputRef = useRef(null);

  useEffect(() => {
    const thisData = (article.filter((el) => el.slug === params.slug));
    return setData(thisData)
  }, []);

  const addTag = (e) => {
    e.preventDefault();
    if (tagInputRef.current.value.trim() !== "") {
      setTagsArr([...tagsArr, tagInputRef.current.value]);
    }
    tagInputRef.current.value = "";
  };

  const removeTag = (index) => {
    const updatedTagsArr = tagsArr.filter((_, i) => i !== index);
    setTagsArr(updatedTagsArr);
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(editArticle({ ...data, tagsArr: tagsArr, slug: params.slug }));
    reset();
    notify();
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Edit article</h1>
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
            defaultValue={data ? data[0].title : ""}
          />
        </label>
        <div className={classes.error}>
          {errors.title && <p>{errors.title.message}</p>}
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
            defaultValue={data ? data[0].description : ""}
          />
          <div className={classes.error}>
            {errors.description && <p>{errors.description.message}</p>}
          </div>
        </label>

        <label className={classes.text}>
          Text
          <textarea
            {...register("text", {
              required: "This field is required!",
            })}
            className={classes.text_input}
            type="text"
            placeholder="Text"
            defaultValue={data ? data[0].body : ""}
          />
          <div className={classes.error}>
            {errors.text && <p>{errors.text.message}</p>}
          </div>
        </label>

        <label className={classes.tags}>
          Tags
          <div className={classes.tag_wrapper}>
            {tagsArr.map((tag, index) => (
              <div key={index} className={classes.tag_row}>
                <input
                  className={classes.tag}
                  type="text"
                  placeholder="Tag"
                  value={tag}
                  readOnly
                />
                <button
                  className={classes.del_btn}
                  onClick={() => removeTag(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div className={classes.tag_row}>
              <input
                ref={tagInputRef}
                className={classes.tag}
                type="text"
                placeholder="Tag"
              />
              <button className={classes.add_btn} onClick={(e) => addTag(e)}>
                Add tag
              </button>
            </div>
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

export default EditArticle;
