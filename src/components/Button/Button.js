import React from "react";

import styles from "./Button.module.css";

const Button = ({ icon, text, classes, type, onClick }) => {
  // let link = null;
  // myroute ? (link = myroute) : (link = {});

  const reducer = (acc, curr) => `${acc} ${styles[curr]}`;
  const className = classes.split(" ").reduce(reducer, "");

  let inputElement = (
    <button className={className} type={type} onClick={onClick}>
      {icon} {text}
    </button>
    // <Link to={link} className={className}>
    //   {icon} {text}
    // </Link>
  );

  return inputElement;
};

export default Button;
