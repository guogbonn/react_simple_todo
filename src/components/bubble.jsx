import React from "react";
import styles from "./bubble.module.css";
const Bubble = ({ task }) => {
  return (
    <div
      className={`${styles.task} ${styles.green} ${styles.animated} ${styles.fadeInUp}`}
    >
      <div className={`${styles.inner}`}>
        <h3>New Homepage Design</h3>
        <h4>{task}</h4>
        <div className={`${styles.task_infos}`}>
          <p className="date">
            <i className="far fa-calendar" /> 8.20.19
          </p>
          <p className="time">
            <i className="far fa-clock" /> 0/3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
