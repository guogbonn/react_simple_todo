import React from "react";
import Button from "../components/button";
import Input from "../components/inputBox";
import styles from "./TaskList.module.css";
import AnimatedBubbles from "../components/animatedBubbles";
import { Spring, animated } from "react-spring/renderprops";

const TaskList = ({
  onClickHandlerButton,
  onClickHandlerDeleteTask,
  currentTasks,
  onChangeHandlerTextBox,
  ref_text_box,
}) => {
  const no_tasks = (
    <span className={styles.no_tasks_content}>
      <p className={styles.no_tasks}>No Tasks.</p>
      <p className={styles.no_tasks_sub}>Lets Add Some!</p>
    </span>
  );

  return (
    <div className={styles.main}>
      <div className={styles.taskScroll}>
        {currentTasks.length ? (
          <AnimatedBubbles
            items={currentTasks}
            onClickHandlerDeleteTask={onClickHandlerDeleteTask}
          />
        ) : (
          no_tasks
        )}
        <div className={styles.fade}></div>
      </div>

      <Button onClickHandler={onClickHandlerButton} />

      <Spring
        from={{
          opacity: 0,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "110px",
        }}
        to={{
          opacity: 1,
          left: 0,
          right: 0,
          bottom: "0px",
        }}
        config={{ duration: 2000, tension: 180, friction: 12 }}
      >
        {(props) => (
          <animated.div style={props}>
            <Input
              onChangeHandler={onChangeHandlerTextBox}
              ref={ref_text_box}
            />
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

export default TaskList;
