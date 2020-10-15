import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
function NavBar(props) {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={`${styles.text}`}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/tasklist">
          <li>Task List</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
