import React from "react";
import styles from "./button.module.css";
const Button = ({ onClickHandler }) => {
  return (
    <div onClick={onClickHandler} className={`${styles.button} `}>
      +
    </div>
  );
};

export default Button;
