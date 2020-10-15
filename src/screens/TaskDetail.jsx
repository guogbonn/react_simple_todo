import React from "react";
import styles from "./TaskDetail.module.css";
import { BrowserRouter as Router, useParams } from "react-router-dom";

const TaskDetail = (props) => {
  let { id } = useParams();
  return (
    <div className={`${styles.screen}`}>
      <div className={`${styles.title}`}>Task Id: {id}</div>
    </div>
  );
};

export default TaskDetail;
