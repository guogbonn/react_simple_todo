import React from "react";
import styles from "./bubble.module.css";
import { Link } from "react-router-dom";

const Bubble = ({ task, deleteTask, id }) => {
  return (
    <div
      className={`${styles.task} ${styles.green} ${styles.animated} ${styles.fadeInUp}`}
    >
      <div className={`${styles.inner}`}>
        <h3>New Homepage Design</h3>
        <h4>
          {task} <button onClick={() => deleteTask(id)}>Delete me</button>
          <Link to={`/taskdetail/${id}`}>
            <button>Task Detail</button>
          </Link>
        </h4>
        <div className={`${styles.task_infos}`}>
          <p className="date">
            <i className="far fa-calendar" /> 10/6/2020
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
