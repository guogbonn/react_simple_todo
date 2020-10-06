import React from "react";
import Bubble from "./components/bubble";
import Button from "./components/button";
import Input from "./components/inputBox";
import styles from "./App.module.css";
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
    const tasks = this.state.tasks.map((value, index) => (
      <Bubble key={index} task={value} />
    ));
    return (
      <div className={styles.main}>
        <div>{tasks}</div>
        <Button onClickHandler={this.onClickHandlerButton} />
        <Input
          onChangeHandler={this.onChangeHandlerTextBox}
          ref={this.ref_text_box}
        />
      </div>
    );
  }
}
export default App;
