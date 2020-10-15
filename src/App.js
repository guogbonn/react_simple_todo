import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import TaskList from "./screens/TaskList";
import LandingPage from "./screens/LandingPage";
import TaskDetail from "./screens/TaskDetail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    const currentTasks = this.state.tasks;
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/tasklist">
            <TaskList
              onClickHandlerButton={this.onClickHandlerButton}
              onClickHandlerDeleteTask={this.onClickHandlerDeleteTask}
              currentTasks={currentTasks}
              onChangeHandlerTextBox={this.onChangeHandlerTextBox}
              ref_text_box={this.ref_text_box}
            />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/taskdetail/:id" exact>
            <TaskDetail />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
