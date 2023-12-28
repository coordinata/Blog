import React from "react";
import classes from "./edit-profile.module.scss";
import { putUpdateUser } from "../../store/user-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const editUser = () => {
    dispatch(putUpdateUser({ email, name, password, avatar }));
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeAvatar = (event) => {
    setAvatar(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Edit Profile</h1>
      <form>
        <label className={classes.username}>
          Username
          <input
            className={classes.username_input}
            value={name}
            type="text"
            placeholder="Username"
            onChange={changeName}
          ></input>
        </label>
        <label className={classes.email}>
          Email address
          <input
            value={email}
            className={classes.email_input}
            type="email"
            placeholder="Email address"
            onChange={changeEmail}
          />
        </label>
        <label className={classes.new_password}>
          New password
          <input
            value={password}
            className={classes.new_password_input}
            type="password"
            placeholder="New password"
            onChange={changePassword}
          />
        </label>
        <label className={classes.avatar}>
          Avatar image (url)
          <input
            value={avatar}
            className={classes.avatar_input}
            type="text"
            placeholder="Avatar image"
            onChange={changeAvatar}
          />
        </label>
      </form>
      <button className={classes.save_btn} onClick={editUser}>
        Save
      </button>
    </div>
  );
};

export default EditProfile;
