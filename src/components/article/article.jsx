import React from "react";
import classes from "./article.module.scss";
import Avatar from "../../img/avatar.png";

const Article = () => {
  return (
    <div>
      <li className={classes.article}>
        <div className={classes.wrapper1}>
          <p className={classes.title}>Some article title</p>
          <button className={classes.button_like}></button>
          <p className={classes.num_like}>12</p>
        </div>
        <div className={classes.wrapper2}>
          <p className={classes.user_name}>John Doe</p>
        </div>
        <div>
          <p className={classes.tag}>Tag1</p>
          <p className={classes.date}>March 5, 2020 </p>
          <img className={classes.avatar} src={Avatar} alt="avatar" />
        </div>
        <div>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </li>
    </div>
  );
};

export default Article;
