import React from "react";
import styles from "./inputBox.module.css";
class Input extends React.Component {
  render() {
    return (
      <div
        ref={(ref) => (this.myTextInput = ref)}
        onInput={this.props.onChangeHandler}
        className={styles.inputBox}
        contentEditable="true"
        suppressContentEditableWarning={true}
      ></div>
    );
  }
}

export default Input;
