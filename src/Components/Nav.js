import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </div>
  );
};

export default Nav;
