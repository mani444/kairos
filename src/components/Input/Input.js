import React from "react";

import styles from "./Input.module.css";

const input = ({ classes, type, placeholder, onChange }) => {
  // console.log("classes", classes, styles[`${classes}`]);
  let inputElement = (
    <input
      className={styles[`${classes}`]}
      type={type}
      placeholder={placeholder}
      name="name"
      onInput={(e) => onChange(e)}
    />
  );

  return <div>{inputElement}</div>;
};

export default input;
