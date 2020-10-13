import React from "react";
import Button from "./components/button";
import Input from "./components/inputBox";
import styles from "./App.module.css";
import AnimatedBubbles from "./components/animatedBubbles";
// import { useSpring, animated } from "react-spring";
import {
  // Transition,
  Spring,
  animated,
  // config,
  // interpolate,
} from "react-spring/renderprops";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      current_input: "",
    };
    this.ref_text_box = React.createRef();

    this.onChangeHandlerTextBox = this.onChangeHandlerTextBox.bind(this);
    this.onClickHandlerButton = this.onClickHandlerButton.bind(this);
  }
  onClickHandlerDeleteTask = (id) => {
    let task_copy = [...this.state.tasks];
    task_copy.splice(id, 1);
    this.setState({
      tasks: task_copy,
    });
  };

  onClickHandlerButton = (e) => {
    let curr = this.state.current_input;
    let tasks = [...this.state.tasks];
    tasks.push(curr);
    this.setState({
      tasks: tasks,
      current_input: " ",
    });
    this.ref_text_box.current.myTextInput.innerHTML = "";
  };

  onChangeHandlerTextBox = (e) => {
    this.setState({
      current_input: e.target.textContent,
    });
  };

  render() {
    // const tasks = this.state.tasks.map((value, index) => (
    //   <Bubble
    //     key={index}
    //     id={index}
    //     task={value}
    //     deleteTask={this.onClickHandlerDeleteTask}
    //   />
    // ));
    const no_tasks = (
      <span className={styles.no_tasks_content}>
        <p className={styles.no_tasks}>No Tasks.</p>
        <p className={styles.no_tasks_sub}>Lets Add Some!</p>
      </span>
    );
    const currentTasks = this.state.tasks;
    return (
      <div className={styles.main}>
        <div className={styles.taskScroll}>
          {this.state.tasks.length ? (
            <AnimatedBubbles
              items={currentTasks}
              onClickHandlerDeleteTask={this.onClickHandlerDeleteTask}
            />
          ) : (
            no_tasks
          )}
          <div className={styles.fade}></div>
        </div>

        <Button onClickHandler={this.onClickHandlerButton} />

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
                onChangeHandler={this.onChangeHandlerTextBox}
                ref={this.ref_text_box}
              />
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}
export default App;
