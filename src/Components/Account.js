import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import classes from "../styles/Account.module.css";

const Account = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <NavLink
            to="signup"
            className={(navInfo) =>
              navInfo.isActive ? `${classes.active}` : ""
            }
          >
            Signup
          </NavLink>
          <NavLink
            to="login"
            className={(navInfo) =>
              navInfo.isActive ? `${classes.active}` : ""
            }
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Account;
