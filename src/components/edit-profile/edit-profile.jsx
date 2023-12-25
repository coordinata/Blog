import React from "react";
import classes from "./edit-profile.module.scss";

const EditProfile = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Edit Profile</h1>
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
        <label className={classes.new_password}>
          New password
          <input
            className={classes.new_password_input}
            type="password"
            placeholder="New password"
          />
        </label>
        <label className={classes.avatar}>
          Avatar image (url)
          <input
            className={classes.avatar_input}
            type="text"
            placeholder="Avatar image"
          />
        </label>
      </form>
      <button className={classes.save_btn}>Save</button>
    </div>
  );
};

export default EditProfile;
